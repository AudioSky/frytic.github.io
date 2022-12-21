import {mergeParallel,rand,lerp} from './Utils.js';
import Vector2 from './Vector2.js';
import {scene,cardTypeDetails} from './Main.js';
import LerpAnim from './LerpAnim.js';
import LinearMoveAnim from './LinearAnim.js';

export default class CardDrawer extends ISpriteInstance{
	constructor()
	{
		super();
		this.visibleCardCount = 2;
		this.cardSpace = 40;
		this.cards = [];
		this.cardPoints = [];
		this.cardsUpdated = null;
		this.topCardOrder = 50;
		this.updatables = [];
	}
	
	init()
	{
		this.setUpCardPoints();
		this.initCards([]);
	}
	
	initCards(cardDetailses)
	{
	console.log(cardDetailses);
		for(let i=0;i<this.cardPoints.length;i++)
		{
			if(cardDetailses.length>i)
			{
				this.addNewCard(cardDetailses[i]);
			}
			else
			{
				this.addRandomCard();
			}
		}
	}
	
	addRandomCard()
	{
		return this.addNewCard(this.getRandomCardDetails());
	}
	
	addNewCard(cardDetails)
	{
		const cardIndex = this.cards.length;
		if(cardIndex>=this.cardPoints.length)
			throw Error();
			
		const card = this.instantiateCard(cardDetails);
		card.setOrder(this.topCardOrder - cardIndex);
		const point = this.cardPoints[cardIndex];
		card.x = point.x;
		card.y = point.y;
		this.cards.push(card);
		if(this.cardsUpdated) this.cardsUpdated();
		
		return card;
		
	}
	
	async removeTopCard()
	{
		this.cards.splice(0,1);
		for(let i=0;i<this.cards.length;i++)
		{
			this.cards[i].setOrder(this.topCardOrder - i);
		}
		const anims = this.cards.map((c,i)=> {return async ()=> await this.moveCard(c,this.cardPoints[i]);});
		anims.push(this.addRandomCardWithAnim.bind(this));
		await mergeParallel(anims);
	}
	
	async addRandomCardWithAnim()
	{
		const card = this.addRandomCard();
		const startX = this.cards.length>1?this.cards[this.cards.length-2].x : this.cards[this.cards.length-1].x;
		const targetX = card.x;
		card.x = startX;
		await this.lerpAnim(2,0,1.2,n=>{card.x = lerp(startX,targetX,n)});
	}
	
	async moveCard(card,targetPoint,speed = 5)
	{
		const startX = card.x;
		const startY = card.y;
		
		await this.linearAnim(speed,n=>{
		 card.x = lerp(startX,targetPoint.x,n);
		 card.y = lerp(startY,targetPoint.y,n);
		});
	}
	
	setUpCardPoints()
	{
		for(let i = 0 ;i< this.visibleCardCount;i++)
		{
			this.cardPoints.push(new Vector2(this.x - this.cardSpace*i,this.y));
		}
	}
	
	instantiateCard(cardDetails)
	{
		const card = this.runtime.objects.Card.createInstance(this.layer.index,0,0);
		card.init(cardDetails.type,cardDetails.value);
		return card;
	}
	
	getRandomCardDetails()
	{
		const cardType = cardTypeDetails.getRandomCardType(this.runtime.globalVars.Level);
		switch(cardType)
		{
			case "Bomb":
				return {type:"Bomb",value:Math.pow(2,rand(1,5))};
			
			case "Star":
			return {type:"Star"};
		
			
			default:
			return {type:"Normal",value:Math.pow(2,rand(1,5))};
		}
	}
	
	async returnTopCard()
	{
		const topCard = this.topCard();
		const startPoint = new Vector2(topCard.x,topCard.y);
		await this.lerpAnim(15,0,1.2,n=>{
			topCard.x = lerp(startPoint.x,this.cardPoints[0].x,n);
			topCard.y = lerp(startPoint.y,this.cardPoints[0].y,n);
		});
	}
	
	toSave()
	{
		return JSON.stringify({cards:this.cards.map(c=>{return {type:c.type,value:c.value};})});
	}
	
	restore(json)
	{
		if(!json || json.length === 0)
			return;
		
		console.log(json);
		for(const card of this.cards)
		{
			card.destroy();
		}
		this.cards = [];
		
		this.initCards(JSON.parse(json).cards);
		
	}
	
	topCard()
	{
		return this.cards.length ? this.cards[0] : null;
	}
	
	update()
	{
		this.updatables.forEach(u=>u.update(this.runtime.dt));
	}
		
	addUpdatable(updatable)
	{
		this.updatables.push(updatable);
	}
	
	removeUpdatable(updatable)
	{
		const index = this.updatables.indexOf(updatable);
		this.updatables.splice(index,1);
	}
	
	linearAnim(speed,updateCallback,finished)
	{
		return new Promise((resolve,_)=>{
			
			let anim = null;
			anim = new LinearMoveAnim(speed,updateCallback,()=>{
				this.removeUpdatable(anim);
				if(finished)finished();
				resolve();
				
			});
			
			this.addUpdatable(anim);
		});
	}
	
	delay(seconds)
	{
		return new Promise((resolve,_)=>{
			setTimeout(resolve,seconds*1000);
		});
	}
	
	
	lerpAnim(speed,start,end,updateCallback,finished)
	{
	
		return new Promise((resolve,_)=>{
			
			let anim = null;
			anim = new LerpAnim(speed,start,end,updateCallback,()=>{
				this.removeUpdatable(anim);
				if(finished)finished();
				
				resolve();
			});
			
			this.addUpdatable(anim);
		});
	}
}