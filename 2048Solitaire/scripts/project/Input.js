import Vector2 from './Vector2.js';

export default class Input{
	static mousePosition = new Vector2();
	
	static isMouseDown = false;
	static isMouseUp = false;
	
	static passCount = {isMouseDown:0,isMouseUp:0};
	
	static update(runtime)
	{
		this.updateMouseButtons();
	}
	
	static updateMouseButtons()
	{
		if(this.isMouseDown && this.passCount.isMouseDown>1)
		{
			this.isMouseDown = false;
			this.passCount.isMouseDown = 0;
			}
			
		if(this.isMouseUp && this.passCount.isMouseUp>1)
		{
			this.isMouseUp = false;
			this.passCount.isMouseUp = 0;
			}
			
		
		if(this.isMouseDown)
		{
			this.passCount.isMouseDown++;
		}
		
		if(this.isMouseUp)
		{
			this.passCount.isMouseUp++;
		}
	}
}