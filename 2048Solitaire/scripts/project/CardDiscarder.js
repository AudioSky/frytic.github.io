

export default class CardDiscarder extends ISpriteInstance{
	constructor()
	{
		super();
		this.discardCardCount = 2;
		this.normalizedHeight = 290;
		this.holders = [];
		this.updated = null;
	}
	
	init()
	{
		this.generateHolders();
	}
	
	generateHolders()
	{
		const cardHeight = this.normalizedHeight/this.discardCardCount;
		for(let i=0;i<this.discardCardCount;i++)
		{
			const cardHolder = this.runtime.objects.DiscardCardHolder.createInstance(this.layer.index,this.x,this.y - this.normalizedHeight/2 + cardHeight/2 +cardHeight*i);
			cardHolder.height = cardHeight;
			this.holders.push(cardHolder);
			cardHolder.setPlacementType(i==0?"Top":"Bottom");
			cardHolder.clear();
		}
	}
	
	getNextHolderToFill()
	{
		return this.holders.find(h=>!h.filled);
	}
	
	isFilled(){
		return !this.getNextHolderToFill();
	}
	
	discardCard(card)
	{
		if(this.isFilled())
			throw Error();
			
		this.getNextHolderToFill().discardCard(card);
		
		if(this.updated)this.updated();
	}
	
	clearHolder(holder)
	{
		holder.clear();
		if(this.updated)this.updated();
	}
	
	clear()
	{
		this.holders.forEach(h=>this.clearHolder(h));
	}
	
	toSave()
	{
		return JSON.stringify({saves:this.holders.map(h=>{return {filled:h.filled,color:h.colorRgb};})});
	}
	
	restore(json)
	{
		console.log(json);
		if(!json || !json.length)
		return;
		
		const {saves} = JSON.parse(json);
		
		for(let i=0;i<saves.length;i++)
		{
			this.holders[i].restore(saves[i].filled,saves[i].color);
		}
	}
}