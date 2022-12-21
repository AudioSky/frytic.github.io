

export default class TextWithBG extends ISpriteInstance{
	constructor()
	{
		super();
		
		this.initialized = false;
	}
	
	init()
	{
		if(this.initialized) return;
	
		const childs = this.allInstances().filter(ist=>ist.instVars && ist.instVars.TargetParent === this.instVars.Id);
		this.text = childs.filter(c=>c instanceof ITextInstance)[0];
		this.bg = childs.filter(c=>c instanceof ISpriteInstance)[0];

		this.addDefaultChild(this.text);
		this.addDefaultChild(this.bg);
		
		this.initialized = true;
	}
	
	
	update()
	{
		if(!this.initialized)
			this.init();
	}
	
	
	
	allInstances()
	{
		const insts = [];
		console.log(this.runtime.objects);
		for(const i in this.runtime.objects)
		{
			insts.push(...this.runtime.objects[i].instances());
		}
		
		return insts;
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
	
	setVisible(isVisible)
	{
		this.isVisible = isVisible;
		for(let i=0;i<this.getChildCount();i++)
		{
			this.getChildAt(i).isVisible = isVisible;
		}
	}
}