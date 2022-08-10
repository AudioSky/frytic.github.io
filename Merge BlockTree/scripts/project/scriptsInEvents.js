import {scene} from './Main.js';

export function getScene()
{
	return scene;
}


const scriptsInEvents = {

		async Egame_Event8_Act3(runtime, localVars)
		{
			getScene().onTouchDown(runtime.globalVars.TouchX,runtime.globalVars.TouchY);
		},

		async Egame_Event9_Act3(runtime, localVars)
		{
			getScene().onTouchDragging(runtime.globalVars.TouchX,runtime.globalVars.TouchY);
		},

		async Egame_Event10_Act1(runtime, localVars)
		{
			getScene().onTouchUp(runtime.globalVars.TouchX,runtime.globalVars.TouchY);
		},

		async Egame_Event34_Act1(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
		},

		async Egame_Event34_Act2(runtime, localVars)
		{
			vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
							 
			function MyAdd(){
			 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
							 console.log(data);});	
			}
			MyAdd();
		},

		async Egame_Event34_Act4(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
		},

		async Btn_Event1_Act1(runtime, localVars)
		{
			 console.log("MySocial");
			  vkBridge.send('VKWebAppShowWallPostBox',
						   {"message": "Объединяй Блоки!",
				     	     "attachments": "https://vk.com/app51397340_587856911"})
							  .then(data => {
							     console.log(data);});		
		},

		async Btn_Event2_Act1(runtime, localVars)
		{
			 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
			         .then(data => console.log(data.success))  
			        .catch(error => console.log(error));	
							console.log("tMyFrend");	
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

