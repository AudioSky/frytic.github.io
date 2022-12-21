import Vector2 from "./Vector2.js";
import {cardColors,defaultBombCardColor} from './Settings.js';

export default class Card extends ISpriteInstance{

	static UNIT_SIZE = 30;
	
	constructor()
	{
		super();
		this.type = "Normal";
		
		this.scale = new Vector2(1,1);
		this.order = 0;
		this.hasValue = false;
		this.value = 0;
		
		this.normalHeight = this.height;
		this.normalWidth = this.width;
		
		this.text = null;
		this.bombOverlay = null;
		this.create();
	}
	
	create()
	{	
		this.text = this.runtime.objects.CardText.createInstance(this.layer.index,0,0);
		const textPos = new Vector2(this.x - this.width/2 + this.text.width/2 + 10 , this.y - this.height/2 + this.text.height/2 + 10);
		this.text.x = textPos.x;
		this.text.y = textPos.y;
		this.addDefaultChild(this.text);
		
		const shadow = this.runtime.objects.CardShadowEffect.createInstance(this.layer.index,this.x,this.y);
		
		this.addDefaultChild(shadow);
		
		this.bombOverlay = this.runtime.objects.BombOverlay.createInstance(this.layer.index,this.x,this.y);
		this.addDefaultChild(this.bombOverlay);
	}
	
	init(type,value)
	{
		this.type = type;
		this.setValue(value);
	}
	
	setOrder(order)
	{
		this.order = order;
		this.zElevation = 0.2 + 0.01*order;
	}
	
	setScale(scale)
	{
		this.width = this.normalWidth*scale.x;
		this.height = this.normalHeight*scale.y;
		this.scale = scale;
	}
	
	setValue(value)
	{
		this.value = value;
		this.hasValue = value > 0;
		this.updateCardRenderers();
	}
	
	updateCardRenderers()
	{
		let anim = "Normal";
		let color = [1,1,1];
		switch(this.type)
		{
			case "Normal":
				anim = "Normal";
				color = this.getColorForNumber(this.value)
			break;
			
			case "Star":
				anim = "Star";
				color = [1,1,1];
			break;
			
			case "Bomb":
				anim = "Normal";
				color = this.hasValue ? this.getColorForNumber(this.value) : defaultBombCardColor;
			break;
		}
		
		this.colorRgb = color;
		this.setAnimation(anim);
		
		this.bombOverlay.isVisible = this.type === "Bomb";
		this.text.isVisible = this.hasValue;
		this.text.text = this.value + "";
	}
	
	getColorForNumber(number)
	{
		const index = (Math.floor(Math.log2(number)) - 1)%cardColors.length;
		return cardColors[index];
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
	
}