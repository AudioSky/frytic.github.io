import {toZeroToThreeSixty} from './Utils.js';

export default class RotatorY{
	
	constructor(go)
	{
		this.go = go;
		this.normWidth = go.width;
		this.normHeight = go.height;
		this.scaleY=1;
		this.scaleX=1;
		this.mulXFactorForRotation = 1;
	}
	
	setYScale(scaleY)
	{
		this.scaleY = scaleY;
		this.updateGoSize();
	}
	
	setXScale(scaleX)
	{
		this.scaleX = scaleX;
		this.updateGoSize();
	}
	
	setRotation(angle)
	{
		const normAngle = toZeroToThreeSixty(angle);
		this.mulXFactorForRotation = Math.abs(Math.cos(normAngle*Math.PI/180));
		this.updateGoSize();
// 		console.log(normAngle,this.mulXFactorForRotation);
		
	}
	
	updateGoSize()
	{
		this.go.width = this.mulXFactorForRotation*this.scaleX*this.normWidth;
		this.go.height = this.normHeight* this.scaleY;
	}
}