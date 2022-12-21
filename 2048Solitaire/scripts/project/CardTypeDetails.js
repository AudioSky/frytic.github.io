

export default class CardTypeDetails {
	constructor(details)
	{
		this.details = details.slice();
	}
	
	getRandomCardType(level)
	{
		const availables = this.details.filter(d=>d.unlockLevel<= level);
		const totalProbability = availables.reduce((t,i)=>t+i.probability,0);
		const rand = Math.random()*totalProbability;
		
		let elapsedProbability = 0;

		for(const item of availables)
		{
			if(elapsedProbability+item.probability>=rand)
			{
				return item.type;
			}
			console.log(elapsedProbability,rand);
			
			elapsedProbability += item.probability;
		}
		
		return "Normal";
		
	}
}