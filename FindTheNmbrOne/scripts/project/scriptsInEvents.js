


const scriptsInEvents = {

	async Gameplayevents_Event76_Act1(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Gameplayevents_Event76_Act2(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Gameplayevents_Event76_Act4(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Homeevents_Event5_Act3(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Найди Число!",
			     	     "attachments": "https://vk.com/app51606926_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Homeevents_Event7_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

