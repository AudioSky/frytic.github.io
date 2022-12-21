import Vector2 from './Vector2.js';
import {scene} from './Main.js';
import Input from './Input.js';
import WaitUntil from './WaitUntil.js';
import Card from './Card.js';
import RotatorY from './RotatorY.js';
import {lerp} from './Utils.js';
import LerpAnim from "./LerpAnim.js";
import LinearMoveAnim from './LinearAnim.js';

export default class GamePlayManager extends ISpriteInstance
{
	constructor()
	{
		super();
		this.stackRefPointY = 500;
		this.stackCount = 4;
		this.stackSpace = 250;
		
		this.updatables = [];
		this.stacks = [];
		this.draggingCard = null;
		this.lastDraggingPoint = new Vector2();
		this.snippingStack = null;
		this.draggingCardOrder = 0;
		this.dragging = false;
		this.intractable = true;
		this.active = true;
	}
	
	async init()
	{
	
		 
		await this.waitUntil(()=> this.runtime.objects.CardDrawer.getFirstInstance());
		await this.waitUntil(()=> this.runtime.objects.CardDiscarder.getFirstInstance());
		
		this.drawer = this.runtime.objects.CardDrawer.getFirstInstance();
		this.discarder = this.runtime.objects.CardDiscarder.getFirstInstance();
		
		this.setupStacks();
		this.drawer.init();
		this.drawer.restore(await this.getSave("drawer"));
		this.discarder.init();
		this.discarder.restore(await this.getSave("discarder"));
		
		this.discarder.updated = this.discarderOnUpdated.bind(this);
		this.drawer.cardsUpdated = this.drawerOnCardsUpdated.bind(this);
		
		this.updateScoreMultiplexerUI();
		
	}
	
	drawerOnCardsUpdated()
	{
		this.save("drawer",this.drawer.toSave());
	}
	
	discarderOnUpdated()
	{
		this.save("discarder",this.discarder.toSave());
	}
	
	async setupStacks()
	{
		const leftX = this.runtime.layout.width/2 - (this.stackCount-1)*this.stackSpace/2;
		
		for(let i=0;i<this.stackCount;i++)
		{
			const stack = this.runtime.objects.CardStack.createInstance(this.layer.index,leftX+i*this.stackSpace,this.stackRefPointY);
			stack.init(this.runtime.objects.Card.getFirstInstance().height);
			stack.restore(await this.getSaveStack(i));
			stack.onGotTwoZeroFortyEight = this.stackOnGotTwoZeroFourtyEight.bind(this);
			stack.onScored = this.stackOnScored.bind(this);
			stack.onCardProcessed = this.stackOnCardProcessed.bind(this);
			this.stacks.push(stack);
		}
	}
	
	stackOnCardProcessed(stack)
	{
		this.saveStack(stack);
		if(this.stacks.every(s=>s.isFull()) && this.stacks.every(s=>!s.haveMergeForCards(s.topCard(),this.drawer.topCard())))
		{
			scene.onAllStacksFilled();
		}
	}
	
	stackOnScored(stack,value,multiplexer)
	{
		const topCard = stack.topCard();
		scene.onScored(value,multiplexer,topCard?new Vector2(topCard.x,topCard.y):new Vector2(stack.x,stack.y));
	}
	
	stackOnGotTwoZeroFourtyEight(stack)
	{
		
		scene.setScoreMultiplexer(scene.scoreMultiplexer+1);
		if(this.dragging)
		{
			this.drawer.returnTopCard();
			this.draggingCard = null;
			this.dragging = false;
		}
			
		this.multiplierAnim(stack);
	}
	
	async multiplierAnim(stack)
	{
		
		this.intractable = false;
		const card = stack.topCard();
		stack.removeTopCard();
		
		const targetScale = 1.1;
		const targetPoint = new Vector2(this.runtime.layout.width/2,this.runtime.layout.height/2);
		card.setOrder(20);
		const cardStartScale = card.scale.x;
		const cardMidScale = targetScale*1.3;
		const cardMinNormalized = 0.3;
		
		const cardStartPoint = new Vector2(card.x,card.y);
		this.playClipIfCan('score_bonus');
		await this.linearAnim(5,n=>{
			card.x = lerp(cardStartPoint.x,targetPoint.x,n);
			card.y = lerp(cardStartPoint.y,targetPoint.y,n);
			
			card.setScale( new Vector2(1,1).mul(n<=cardMinNormalized ?lerp(cardStartScale,cardMidScale,n/cardMinNormalized) : lerp(cardMidScale,targetScale,(n - cardMinNormalized)/(1-cardMinNormalized))));
		});
		await this.delay(0.288);
		this.runtime.objects.ScoreBonusParticle.createInstance(1,card.x,card.y);
		await this.delay(0.02);
		
		card.destroy();
		await this.scoreBonusUIAnim();
		this.intractable = true;
		
	}
	
	async scoreBonusUIAnim()
	{
		const multiplexerEffect = [...this.runtime.objects.TextWithBG.instances()].find(t=>t.instVars.Id === "ScoreMultiplexerEffect");
		
		const scoreBonusEffect = [...this.runtime.objects.TextWithBG.instances()].find(t=>t.instVars.Id === "ScoreBonusEffect");
		
		const scoreMultiplexer = [...this.runtime.objects.TextWithBG.instances()].find(t=>t.instVars.Id === "ScoreMultiplexer");
		
		const scoreMultiplexerBG = scoreMultiplexer.bg;
		
		const multiplexerEffectInitialSize = new Vector2(multiplexerEffect.width,multiplexerEffect.height);
		
		
		
		
		multiplexerEffect.x = this.runtime.layout.width/2;
		multiplexerEffect.y = this.runtime.layout.height/2;
		
		scoreBonusEffect.x = multiplexerEffect.x;
		scoreBonusEffect.y = multiplexerEffect.y;
		
		const multiplexerEffectInitialPosition = new Vector2(multiplexerEffect.x,multiplexerEffect.y);
		
		
		scoreBonusEffect.setVisible(true);
		multiplexerEffect.setVisible(false);
		multiplexerEffect.zElevation = 1;
		scoreBonusEffect.zElevation = 1;
		
		const multiplexerEffectRotator =  new RotatorY(multiplexerEffect);
		const scoreBonusEffectRotator = new RotatorY(scoreBonusEffect);
		
		await this.delay(0.5);
		await this.linearAnim(4,n=>{
			if(n<0.5)
			{
				scoreBonusEffectRotator.setRotation(n*180);
			}
			else
			{
				if(scoreBonusEffect.isVisible)
				{
					scoreBonusEffect.setVisible(false);
					scoreBonusEffectRotator.setRotation(0);
					multiplexerEffect.setVisible(true);
					multiplexerEffect.text.text = "x"+scene.scoreMultiplexer;
				}
				
				multiplexerEffectRotator.setRotation((n-1)*180);
			}
		});
		
		await this.delay(0.5);
		
		await this.linearAnim(5,n=>{
			multiplexerEffect.x = lerp(multiplexerEffectInitialPosition.x,scoreMultiplexerBG.x,n);
			multiplexerEffect.y = lerp(multiplexerEffectInitialPosition.y,scoreMultiplexerBG.y,n);
			
			multiplexerEffect.width = lerp(multiplexerEffectInitialSize.x,scoreMultiplexerBG.width,n);
			multiplexerEffect.height = lerp(multiplexerEffectInitialSize.y,scoreMultiplexerBG.height,n);
		});
		
			multiplexerEffect.x = multiplexerEffectInitialPosition.x;
			multiplexerEffect.y = multiplexerEffectInitialPosition.y;
			
			multiplexerEffect.width = multiplexerEffectInitialSize.x;
			multiplexerEffect.height = multiplexerEffectInitialSize.y;
			multiplexerEffect.setVisible(false);
			
			this.updateScoreMultiplexerUI();
			
		
	}
	
	updateScoreMultiplexerUI()
	{
	 const scoreMultiplexer = [...this.runtime.objects.TextWithBG.instances()].find(t=>t.instVars.Id === "ScoreMultiplexer");
			scoreMultiplexer.text.text = "x"+scene.scoreMultiplexer;
			scoreMultiplexer.setVisible(scene.scoreMultiplexer > 1);
	}
	
	update()
	{
		for(const updatable of this.updatables)
		{
			updatable.update(this.runtime.dt);
		}
		this.handleUpdateDragging();
	}
	
	handleUpdateDragging()
	{
		if(!this.intractable || [2,3,4].map(i=>this.runtime.layout.getLayer(i)).find(l=>l.isVisible))
		{
			if(this.dragging)
			{
				if(this.snippingStack)
					this.snippingStack.onExitCardSnip();
					
				if(this.drawer.topCard() == this.draggingCard)
				{
					this.drawer.returnTopCard();
				}
				
				this.draggingCard = null;
				this.snippingStack = null;
			}
			
			return;
		}
		
		if(Input.isMouseDown)
		{
			const card = this.getCardUnderMouse();
			if(card && this.isDraggableCard(card))
			{
				this.draggingCard = card;
				this.draggingCardOrder = card.order;
				this.draggingCard.setOrder(65);
				this.lastDraggingPoint = Input.mousePosition.clone();
				this.dragging = true;
			}
			
		}
		
		if(this.dragging)
		{
			const delta = Input.mousePosition.sub(this.lastDraggingPoint);
			this.draggingCard.x += delta.x;
			this.draggingCard.y += delta.y;
			this.lastDraggingPoint = Input.mousePosition.clone();
			
			this.handleCardSnipping();
		}
		
		if(Input.isMouseUp && this.dragging)
		{
			if(this.drawer.topCard() == this.draggingCard)
			{
				this.onTouchUpDraggingDrawerCard();
			}
			
			this.draggingCard = null;
			this.snippingStack = null;
			this.draggingCardOrder = -1;
			this.dragging = false;
		}
	}
	
	getCardUnderMouse()
	{
	
		const cards = [...this.runtime.objects.Card.instances()];
		const touchingCardsInOrder = cards.filter(c=>c.containsPoint(Input.mousePosition.x,Input.mousePosition.y)).sort((a,b)=>a.zElevation - b.zElevation);
		
		return touchingCardsInOrder.length ? touchingCardsInOrder[touchingCardsInOrder.length-1] : null;
	}
	
	onTouchUpDraggingDrawerCard()
	{
		if(this.snippingStack)
		{
			this.drawer.removeTopCard();
			this.snippingStack.addCardWithAnim(this.draggingCard);
		}
		else if(!this.discarder.isFilled() && Math.abs(this.discarder.x-this.draggingCard.x) < this.draggingCard.width*0.9 && Math.abs(this.discarder.y-this.draggingCard.y) < this.draggingCard.height*0.9 && this.draggingCard.type !== "Star")
		{
			this.drawer.removeTopCard();
			this.discarder.discardCard(this.draggingCard);
		}
		else
		{
			this.draggingCard.setOrder(this.draggingCardOrder);
			this.drawer.returnTopCard();
		}
	}
	
	isDraggableCard(card)
	{
		return this.drawer.topCard() === card;
	}
	
	handleCardSnipping()
	{
		const stack = this.stacks.find(s=>s.canCardSnip(this.draggingCard));
		if(this.snippingStack !== stack)
		{
			if(stack)
			{
				stack.onEnterCardSnip(this.draggingCard);
			}
			
			if(this.snippingStack)
			{
				this.snippingStack.onExitCardSnip();
			}
			
			this.snippingStack = stack;
		}
	}
	
	async save(key,json)
	{
		await this.runtime.storage.setItem(key,json);
	}
	
	async getSave(key)
	{
		return await this.runtime.storage.getItem(key);
	}
	
	async saveStack(stack)
	{
		await this.runtime.storage.setItem("Stack_"+this.stacks.findIndex(s=>s===stack),stack.toSave());
	}
	
	async getSaveStack(index)
	{
		return await this.runtime.storage.getItem("Stack_"+index);
	}
	
	async clearSave()
	{
		[...Array(this.stackCount).keys()].forEach(async i=> await this.runtime.storage.removeItem("Stack_"+i));
		await this.runtime.storage.removeItem("drawer");
		await this.runtime.storage.removeItem("discarder");
	}
	
	playClipIfCan(name)
	{
		if(!this.runtime.globalVars.Sound)
			return;
		const ist = this.runtime.objects.SoundEffect.createInstance(0,0,0);
		ist.instVars.Name = name;
		ist.destroy();
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
	
	waitUntil(condition,callback=null)
	{
		return new Promise((resolve,_)=>{
			let waitUntil = null;
			waitUntil = new WaitUntil(condition,()=>{
				this.removeUpdatable(waitUntil);
				if(callback)callback();
				resolve();
			});
			this.addUpdatable(waitUntil);
		});
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