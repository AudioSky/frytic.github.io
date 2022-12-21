import LerpAnim from "./LerpAnim.js";
import LinearMoveAnim from './LinearAnim.js';
import {rand,clamp,lerp} from './Utils.js';

export default class MainScene{

	constructor(runtime,level)
	{
		this.runtime = runtime;
		this.updatables = [];
		
		this.gameStarted = null;
		this.gameOver = null;
		this.levelUped = null;
		this.scored = null;
		this.playManager = this.runtime.objects.GamePlayManager.getFirstInstance();
		
		this.runtime.globalVars.GameState = 'none';
		this.scoreMultiplexer = 1;
		this.scoreToNextLevel = 0;
		this.elapsedScoreForNextLevel = 0;
		this.isGameOvered = false;
		this.init();
		console.log(this.allInstances());
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
	
	
	async init()
	{
		await this.initPersistantVariables();
		this.setScoreToNextLevel(MainScene.getScoreForLevel(this.runtime.globalVars.Level));
		this.playManager.active = true;
		
		if(this.isGameOvered)
		{
			this.playManager.clearSave();
			this.setElapsedScoreForNextLevel(0);
			this.setScore(0);
			this.setGameOvered(false);
		}
		
		this.playManager.init();
		
		if(this.gameStarted) this.gameStarted();
	}

	async initPersistantVariables()
	{
		await this.initScoreMultiplexer();
		await this.initScore();
		await this.initLevel();
		await this.initScoreToNextLevel();
		await this.initElapsedScoreForNextLevel();
		await this.initGameOvered();
	}
	
	onScored(value,multiplexer,position)
	{
		const score = value*this.scoreMultiplexer*multiplexer;
		this.setScore(this.runtime.globalVars.Score+score);
		
		if(this.scored)this.scored(score,multiplexer,position);
		
		if(multiplexer>1)
		{
		const combo = this.runtime.objects.ComboEffect.createInstance(1,position.x,position.y);
		combo.setMultiplexer(multiplexer);
		}
		
		this.setElapsedScoreForNextLevel(this.elapsedScoreForNextLevel+score);
		
		if(this.scoreToNextLevel<=this.elapsedScoreForNextLevel)
		this.levelUp();
	}
	
	levelUp()
	{
		this.setLevel(this.runtime.globalVars.Level+1);
		this.playSoundEffect('level_complete');
		this.setElapsedScoreForNextLevel(this.elapsedScoreForNextLevel - this.scoreToNextLevel);
		this.setScoreToNextLevel(MainScene.getScoreForLevel(this.runtime.globalVars.Level));
		this.runtime.objects.CardDiscarder.getFirstInstance().clear();
		if(this.levelUped)this.levelUped(this.runtime.globalVars.Level);
		this.sendEvent('LevelUp');
	}
	
	onAllStacksFilled()
	{
		this.overTheGame();
	}
	
	overTheGame()
	{
		console.log("Game Over");
		if(this.runtime.globalVars.GameState === "Over")
			return;
			
		this.runtime.globalVars.GameState = "Over";
		
		
			
		this.playManager.active = false;
		this.playManager.clearSave();
		this.setGameOvered(true);
		if(this.gameOver) this.gameOver();
		this.sendEvent('Over');
	}

	update(runtime)
	{
		this.updatables.forEach(u=>u.update(runtime.dt));
	
		for(const o of this.runtime.objects.WinParticles.instances())
		{
			o.update();
		}
		for(const o of this.runtime.objects.GamePlayManager.instances())
		{
			o.update();
		}
		for(const o of this.runtime.objects.CardDrawer.instances())
		{
			o.update();
		}
		for(const o of this.runtime.objects.CardStack.instances())
		{
			o.update();
		}
			for(const o of this.runtime.objects.TextWithBG.instances())
		{
			o.update();
		}
		
	}
	
	getLevelProgress()
	{
		return this.elapsedScoreForNextLevel/this.scoreToNextLevel;
	}
	
	isBestScoreArchived()
	{
		return this.score > bestScore;
	}
	
	static getScoreForLevel(level)
	{
		return 4000 + level*1000;
	}
	
	
	//send the event to event sheet
	sendEvent(name)
	{
		const event = this.runtime.objects.SimpleEvent.createInstance(0,0,0);
		event.instVars.Name = name;
		event.destroy();
	}
	
	playSoundEffect(name)
	{
		if(!this.runtime.globalVars.Sound)
			return;
		const ist = this.runtime.objects.SoundEffect.createInstance(0,0,0);
		ist.instVars.Name = name;
		ist.destroy();
	}
	
	addUpdatable(updatable)
	{
		this.updatables.push(updatable);
	}
	
	removeUpdatable(updatable)
	{
		const index = this.updatables.indexOf(updatable);
		this.updatables.splice(index,1);
	}
	
	waitUntil(condition,callback=null)
	{
		return new Promise((resolve,_)=>{
			let waitUntil = null;
			waitUntil = new WaitUntil(condition,()=>{
				this.removeUpdatable(waitUntil);
				if(callback)callback();
				resolve();
			});
			this.addUpdatable(waitUntil);
		});
	}
	
	linearAnim(speed,updateCallback,finished)
	{
		return new Promise((resolve,_)=>{
			
			let anim = null;
			anim = new LinearMoveAnim(speed,updateCallback,()=>{
				this.removeUpdatable(anim);
				if(finished)finished();
				resolve();
				
			});
			
			this.addUpdatable(anim);
		});
	}
	
	delay(seconds)
	{
		return new Promise((resolve,_)=>{
			setTimeout(resolve,seconds*1000);
		});
	}
	
	
	lerpAnim(speed,start,end,updateCallback,finished)
	{
	
		return new Promise((resolve,_)=>{
			
			let anim = null;
			anim = new LerpAnim(speed,start,end,updateCallback,()=>{
				this.removeUpdatable(anim);
				if(finished)finished();
				
				resolve();
			});
			
			this.addUpdatable(anim);
		});
	}
	
		async initScoreMultiplexer()
	{
		this.scoreMultiplexer = await this.runtime.storage.getItem("score_multiplexer") ?? 1;
	}
	
	async initScore()
	{
		this.runtime.globalVars.Score = await this.runtime.storage.getItem('score') ?? 0;
	}
	
	async initLevel()
	{
		this.runtime.globalVars.Level = await this.runtime.storage.getItem('level') ?? 1;
		
		
	}
	
	async initScoreToNextLevel()
	{
		this.scoreToNextLevel = await this.runtime.storage.getItem('score_to_next_level') ?? 0;
		
		
	}
	
	async initElapsedScoreForNextLevel()
	{
		this.elapsedScoreForNextLevel = await this.runtime.storage.getItem('elapsed_score_for_next_level') ?? 0;
	}
	
	async initGameOvered()
	{
		this.isGameOvered = await this.runtime.storage.getItem('is_game_overed') ?? false;
	}
	
	async setScoreMultiplexer(value)
	{
		this.scoreMultiplexer = value;
		await this.runtime.storage.setItem("score_multiplexer",value);
	}
	
	async setScore(value)
	{
		this.runtime.globalVars.Score = value;
		await this.runtime.storage.setItem('score',value);
	}
	
	async setLevel(value)
	{
		this.runtime.globalVars.Level = value;
		await this.runtime.storage.setItem('level',value);
	}
	
	async setScoreToNextLevel(value)
	{
		this.scoreToNextLevel = value;
		await this.runtime.storage.setItem('score_to_next_level',value);
	}
	
	async setElapsedScoreForNextLevel(value)
	{
		console.log('set Elapsed score for next level:'+value);
		this.elapsedScoreForNextLevel = value;
		await this.runtime.storage.setItem('elapsed_score_for_next_level',value);
	}
	
	async setGameOvered(value)
	{
		this.isGameOvered = value;
		await this.runtime.storage.setItem('is_game_overed',value);
	}

}