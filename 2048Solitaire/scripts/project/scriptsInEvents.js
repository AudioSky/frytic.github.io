import {scene,cardTypeDetails} from './Main.js';
import {lerp} from './Utils.js';
import Vector2 from './Vector2.js';
import Input from './Input.js';







const scriptsInEvents = {

	async Egame_Event18_Act3(runtime, localVars)
	{
		const bgBar = runtime.objects.LevelProgressBackgroundBar.getFirstInstance();
		const bar = runtime.objects.LevelProgressFillBar.getFirstInstance();
		
		bar.width = scene.getLevelProgress()*bgBar.width;
		
		
		
	},

	async Egame_Event21_Act3(runtime, localVars)
	{
		const levelText = runtime.objects.Level_Complete_Level_Text.getFirstInstance();
		
		const completeText = runtime.objects.Level_Complete_Complete_Text.getFirstInstance();
		
		levelText.text = "Level "+ runtime.globalVars.Level;
		
		const levelTextStartSize = levelText.sizePt;
		
		const completeTextStartSize = completeText.sizePt;
		
		levelText.sizePt = 0;
		completeText.sizePt = 0;
		
		scene.lerpAnim(5,0,1.3,n=>{
			const scale = lerp(0.2,1,n);
			levelText.sizePt = 	levelTextStartSize*scale;
		});
		
		await scene.delay(.2);
		
		const intermidateScale = 1.2;
		const intermidateNormalized = 0.6;
		
		await scene.lerpAnim(3,0,1.3,n=>{
			const scale = n<intermidateNormalized ? lerp(0.2,intermidateScale,n/intermidateNormalized) : lerp(intermidateScale,1,(n-intermidateNormalized)/(1-intermidateNormalized));
			completeText.sizePt = 		completeTextStartSize*scale;
		});
		
		await scene.delay(.6);
		runtime.globalVars.ContinueLevel = true;
		runtime.goToLayout("Game");
		
	},

	async Egame_Event32_Act3(runtime, localVars)
	{
		const details = cardTypeDetails.details.find(c=>c.unlockLevel === runtime.globalVars.Level);
		console.log(details);
		const completeImage = runtime.objects.LevelUpImage.getFirstInstance();
		
		const completeText = runtime.objects.LevelUpUpText.getFirstInstance();
		
		if(details)
		{
			completeImage.setAnimation(details.unlockImage);
			completeText.text = details.unlockMessage;
		}
		else{
		
		completeImage.setAnimation('None');
		completeText.text = "Вы перешли на новый уровень!";
		}
		
		
	},

	async Egame_Event34_Act3(runtime, localVars)
	{
		Input.mousePosition = new Vector2(+runtime.globalVars.Temp,+runtime.globalVars.Temp2);
	},

	async Egame_Event35_Act1(runtime, localVars)
	{
		Input.isMouseDown = true;
	},

	async Egame_Event36_Act1(runtime, localVars)
	{
		Input.isMouseUp = true;
	},

	async Egame_Event59_Act2(runtime, localVars)
	{
		const effect = runtime.getInstanceByUid(+runtime.globalVars.Temp);
		
		const startY = effect.y;
		const endY = startY-7;
		const hideNormalized = 0.85;
		
		scene.linearAnim(1,n=>{
			effect.y = lerp(startY,endY,n);
			if(n>hideNormalized)
			{
				const opacity = lerp(1,0,(n-hideNormalized)/(1-hideNormalized));
				effect.opacity = opacity;
				effect.text.opacity = opacity;
			}
		},()=>{effect.destroy();});
		
	},

	async Egame_Event83_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Egame_Event83_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Start_Event9_Act2(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "2048 Пасьянс!",
			     	     "attachments": "https://vk.com/app51509066_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Start_Event10_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

