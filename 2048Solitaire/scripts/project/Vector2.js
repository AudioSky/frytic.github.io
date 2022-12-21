
export default class Vector2{

	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
	
	static lerp(vec1,vec2,n)
	{
		return new Vector2(lerp(vec1.x,vec2.x,n),lerp(vec1.y,vec2.y,n));
	}
	
	mag()
	{
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}


	sub(item)
	{
		return new Vector2(this.x - item.x,this.y-item.y);
	}
	
	add(item)
	{
		return new Vector2(this.x + item.x,this.y+item.y);
	}

	mul(item)
	{
		return new Vector2(this.x*item,this.y*item);
	}
	
	normalized()
	{
		return  this.mul(1/this.mag());
	}
	clone()
	{
		return new Vector2(this.x,this.y);
	}
	
	getRotateVector2(angle)
	{
		return new Vector2(Math.cos(angle)*this.x - Math.sin(angle)*this.y,Math.sin(angle)*this.x + Math.cos(angle)*this.y);
	}

}