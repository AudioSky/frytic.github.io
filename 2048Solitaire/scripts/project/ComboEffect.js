import {comboEffectColors} from './Settings.js';

export default class ComboEffect extends ISpriteInstance
{
	constructor()
	{
		super();
		this.textOffsetY = 3;
		this.multiplexer = 1;
		this.text = this.runtime.objects.ComboEffectText.createInstance(this.layer.index,this.x,this.y+this.textOffsetY);
		this.addDefaultChild(this.text);
		this.setMultiplexer(1);
		
	}
	
	setMultiplexer(multiplexer)
	{
		this.multiplexer = multiplexer;
		this.text.text = "x"+multiplexer;
		this.colorRgb = comboEffectColors[Math.max(multiplexer,0)%comboEffectColors.length];
	}
	
	addDefaultChild(child)
	{
		console.log(child);
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