

export default class DiscardCardHolder extends ISpriteInstance{
	constructor()
	{
		super();
		this.filled = false;
		this.opacity = 0;
		this.discardIcon = this.runtime.objects.DiscardCardIcon.createInstance(this.layer.index,this.x,this.y);
		this.addDefaultChild(this.discardIcon);
	}
	

	
	discardCard(card)
	{
		this.colorRgb = card.colorRgb.slice();
		this.filled = true;
		this.opacity = 1;
		this.discardIcon.isVisible = false;
		card.destroy();
	}
	
	restore(filled,color)
	{
		this.filled = filled;
		this.discardIcon.isVisible = !filled;
		
		if(filled) {
			this.colorRgb = color;
			this.opacity = 1;
		}
	}
	
	setPlacementType(type)
	{
		let animation = "Top"
		switch(type)
		{
			case "Top":
				animation = "Top";
			break;
			
			case "Bottom":
				animation = "Bottom";
			break;
		}
		
		this.setAnimation(animation);
	}
	
	clear()
	{
		this.colorRgb = [1,1,1];
		this.opacity = 0;
		this.filled = false;
		this.discardIcon.isVisible = true;
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