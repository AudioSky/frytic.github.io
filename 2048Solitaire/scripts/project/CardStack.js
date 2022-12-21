import Vector2 from './Vector2.js';
import LerpAnim from "./LerpAnim.js";
import LinearMoveAnim from './LinearAnim.js';
import {lerp} from './Utils.js';


export default class CardStack extends ISpriteInstance
{
	constructor()
	{
		super();
		this.spacing = 70;
		this.maxCardCount = 13;
		this.combo = 0;
		this.processing = false;
		this.updatables = [];
		this.cards = [];
		this.cardHeight = 0;
		this.onCardProcessed = null;
		this.onGotTwoZeroFortyEight = null;
		this.onScored = null;
		
		this.cardHolderEffect = null;
		this.cardHighlightEffect = null;
		this.create();
	}
	
	init(cardHeight)
	{
		this.cardHeight = cardHeight;
	}
	
	
	create()
	{
		this.cardHolderEffect = this.runtime.objects.CardHolderEffect.createInstance(this.layer.index,this.x,this.y);
		this.addDefaultChild(this.cardHolderEffect);
		this.cardHighlightEffect = this.runtime.objects.CardHighlightEffect.createInstance(this.layer.index,this.x,this.y);
	}
	
	
	
	async addCardWithAnim(card)
	{
		this.clearCardSnip();
		card.setOrder(this.cards.length);
		await this.moveCard(card,this.getNextCardPoint());
		this.cards.push(card);
		
		if(this.haveSpecialAction())
		{
			await this.handleCardSpecialActions();
		}
		else
		{
			await this.showCardLandingAnim();
		}
	}
	
	updateCardsOrder()
	{
		for(let i=0;i<this.cards.length;i++)
		{
			this.cards[i].setOrder(i);
		}
	}
	
	
	async showCardLandingAnim()
	{
		const topCard = this.topCard();
		const startScale = topCard.scale.y;
		const minScale = 0.8*startScale;
		const maxScale = 1.1*startScale;
		this.processing = true;
		this.playClipIfCan('card_land');
		await this.lerpAnim(15,0,1.1,n=>{
			topCard.setScale(new Vector2(topCard.scale.x,lerp(startScale,minScale,n)));
		});
		
		await this.lerpAnim(15,0,1.1,n=>{
			topCard.setScale(new Vector2(topCard.scale.x,lerp(minScale,maxScale,n)));
		});
		
		await this.lerpAnim(15,0,1.1,n=>{
			topCard.setScale(new Vector2(topCard.scale.x,lerp(maxScale,startScale,n)));
		});
		
		this.processing = false;
		
		if(this.onCardProcessed)
			this.onCardProcessed(this);
		
	}

	haveSpecialAction()
	{
		return this.haveBombMerge() || this.haveNormalMerge();
	}
	
	haveBombMerge()
	{
		if(this.cards.length<2)
			return this.cards.length>=1 && this.topCard().type == "Bomb" && !this.topCard().hasValue;
			
			const topCard = this.topCard();
			const cardBeforeTop = this.cards[this.cards.length - 2];
			return (topCard.type === "Bomb" || cardBeforeTop.type === "Bomb")
			&& (!topCard.hasValue || topCard.value === cardBeforeTop.value);
			
		
	}
	
	haveNormalMerge()
	{
		if(this.cards.length<2)
			return false;
			
		const topCard = this.topCard();
		const cardBeforeTop = this.cards[this.cards.length-2];
		
		return topCard.type === "Star" || cardBeforeTop.type === "Star" || topCard.type === "Normal" && cardBeforeTop.type === "Normal" && cardBeforeTop.value === topCard.value;
	}
	
	haveBombMergeForCards(lastCard,newCard)
	{
		if(!lastCard|| !newCard)
			return false;
			
		return (newCard.type === "Bomb" || lastCard.type === "Bomb") &&
		(!newCard.hasValue || newCard.value === lastCard.value);
	}
	
	haveNormalMergeForCards(lastCard,newCard)
	{
		if(!lastCard || !newCard)
			return false;
			
		return !(newCard.type === "Star" && lastCard.type === "Star") && (newCard.type === "Star" || lastCard.type === "Star"|| newCard.type === "Normal" && lastCard.type === "Normal" && newCard.value === lastCard.value);
	}
	
	haveMergeForCards(lastCard,newCard)
	{
		return this.haveBombMergeForCards(lastCard,newCard) || this.haveNormalMergeForCards(lastCard,newCard);
	}
	
	canBeFirstCard(card)
	{
		return card.type !== "Bomb" || card.hasValue;
	}
	
	async handleCardSpecialActions()
	{
		this.processing = true;
		while(this.haveNormalMerge()&&!this.haveBombMerge())
		{
			this.combo++;
			await this.normalCardMerge();
		}
		
		if(this.haveBombMerge())
		{
			this.combo = 1;
			await this.bombCardMerge();
		}
		
		this.combo = 0;
		this.processing = false;
		if(this.onCardProcessed)
			this.onCardProcessed(this);
	}
	
	async bombCardMerge()
	{
		const score = this.cards.reduce((p,c)=>p+c , 0);
		this.playClipIfCan("bomb_clip");
		
		while(this.cards.length>1)
		{
// 			this.playClipIfCan("card_bomb_merge_clip");
			const topCard = this.topCard();
			const cardAboveTop = this.cards[this.cards.length - 2];
			await this.moveCard(topCard,new Vector2(cardAboveTop.x,cardAboveTop.y),25);
			const breakEffect = this.runtime.objects.CardBreakEffect.createInstance(1,topCard.x,topCard.y);
			breakEffect.colorRgb = topCard.colorRgb;
// 			this.delay(3).then(()=>breakEffect.destroy());
			topCard.destroy();
			this.cards.splice(this.cards.length-1,1);
		}
		this.topCard().destroy();
		this.cards = [];
		if(this.scored)
			this.scored(this,score,1)
	}
	
	async normalCardMerge()
	{
		const topCard = this.topCard();
		const cardAboveTop = this.cards[this.cards.length - 2];
		this.playClipIfCan("card_merge");
		
		await this.moveCard(topCard,new Vector2(cardAboveTop.x,cardAboveTop.y));
		
		if(cardAboveTop.type === "Star")
		{
			this.cards.splice(this.cards.length-2,1);
			cardAboveTop.destroy();
			this.updateCardsOrder();
		}
		else
		{
			this.topCard().destroy();
			this.cards.splice(this.cards.length-1,1);
		}
		
		if(this.onScored)
			this.onScored(this,this.topCard().value*2,this.combo);
			
		await this.doubleTheTopCard();
		
		if(this.topCard().value === 2048)
		{
			if(this.onGotTwoZeroFortyEight)
			this.onGotTwoZeroFortyEight(this);
			console.log("Got 2048");
		}
		
		
	}	
	
	async doubleTheTopCard()
	{
		const topCard = this.topCard();
		const startScale = topCard.scale.x;
		const minScale = startScale*0.8;
		const maxScale = startScale*1.1;
		
		await this.lerpAnim(15,0,1.1,n=>{
			topCard.setScale(new Vector2(1,1).mul(lerp(startScale,minScale,n)));
		});
		
		topCard.setValue(topCard.value*2);
		
		await this.lerpAnim(15,0,1.1,n=>{
			topCard.setScale(new Vector2(1,1).mul(lerp(minScale,maxScale,n)));
		});
		
		await this.lerpAnim(15,0,1.1,n=>{
			topCard.setScale(new Vector2(1,1).mul(lerp(maxScale,startScale,n)));
		});
	}
	
	async moveCard(card,targetPoint,speed = 15)
	{
		const startPoint = new Vector2(card.x,card.y);
		await this.linearAnim(speed,n=>{
			card.x = lerp(startPoint.x,targetPoint.x,n);
			card.y = lerp(startPoint.y,targetPoint.y,n);
		});
	}
	
	getNextCardPoint()
	{
		if(!this.cards.length)
		{
			return new Vector2(this.x,this.y);
		}
		
		return new Vector2(this.x,this.cards[this.cards.length-1].y + this.spacing);
	}
	
	canCardSnip(card)
	{
		if(this.processing) return false;
		
		if(this.cards.length >= this.maxCardCount && !this.haveMergeForCards(this.topCard(),card))
			return false;
		
		if(this.topCard() && this.topCard().type === "Star" && card.type === "Star" )
			return false;
		
		if(!this.cards.length && !this.canBeFirstCard(card))
			return false;
			
			
		const obj = !this.topCard() ? this.cardHolderEffect : this.topCard();
		return Math.abs(obj.y - card.y)<this.cardHeight*0.8 && Math.abs(obj.x - card.x)<card.width*0.8;
	}
	
	removeTopCard()
	{
		if(!this.topCard())
			throw Error();
			
		this.cards.splice(this.cards.length-1,1);
	}
	
	onEnterCardSnip(card)
	{
		if(!this.canCardSnip(card))
			throw Error();
			
			
		this.playClipIfCan("card_snip");
		const topCard = this.topCard();
		const target = topCard ? topCard : this.cardHolderEffect;
		this.cardHighlightEffect.x = target.x;
		this.cardHighlightEffect.y = target.y;
		this.cardHighlightEffect.zElevation = target.zElevation + 0.01;
		this.cardHighlightEffect.isVisible = true;
	}
	
	onExitCardSnip()
	{
		this.clearCardSnip();
	}
	
	clearCardSnip()
	{
		this.cardHighlightEffect.isVisible = false;
	}
	
	toSave()
	{
		return JSON.stringify({
			cards:this.cards.map(c=> { return { type: c.type,value:c.value};})
		});
	}
	
	restore(json)
	{
		if(!json || !json.length) return;
		const save = JSON.parse(json);
		
		this.cards.forEach(c=>c.destroy());
		this.cards = [];
		
		
		for(const details of save.cards)
		{
			const card = this.instantiateCard(details);
			const point = this.getNextCardPoint();
			card.x = point.x;
			card.y = point.y;
			this.cards.push(card);
		}
		
		this.updateCardsOrder();
	}
	
	instantiateCard(cardDetails)
	{
		const card = this.runtime.objects.Card.createInstance(this.layer.index,0,0);
		card.init(cardDetails.type,cardDetails.value);
		console.log(cardDetails);
		
		return card;
	}
	
	playClipIfCan(clip,volume = 1)
	{
		const effect = this.runtime.objects.SoundEffect.createInstance(0,0,0);
		effect.instVars.Name = clip;
		effect.instVars.Volume = volume;
		effect.destroy();
		console.log("Play clip:"+clip);
	}
	
	topCard(){
		return this.cards.length ? this.cards[this.cards.length - 1] : null;
	}
	
	isFull()
	{
		return this.cards.length >= this.maxCardCount;
	}
	
	addDefaultChild(child)
	{
		this.addChild(child,{
			transformX:true,
			transformY:true,
			transformAngle:true,
			transformZElevation:true,
			transformWidth:true,
			transformHeight:true,
			destroyWithParent:true
		});
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