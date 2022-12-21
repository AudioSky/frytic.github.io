
export default class WaitUntil{

	constructor(condition,completed)
	{
		this.condition = condition;
		this.completedCallbacks = [];
		if(completed)this.completedCallbacks.push(completed);
		this.isCompelted = false;
	}

	update(_)
	{
		if(this.isCompleted)
			return;
	
		if(this.condition())
		{
			this.isCompleted = true;
			for(let callback of this.completedCallbacks)
			{
				callback();
			}
		}
	}
	
	toAsync()
	{
		return new Promise((resolve,_)=>{
			if(this.isCompleted)
				resolve();
			else
				this.completedCallbacks.push(resolve);
		});
	}

}