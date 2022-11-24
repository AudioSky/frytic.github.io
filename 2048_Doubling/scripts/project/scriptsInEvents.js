


const scriptsInEvents = {

	async Gameplayevents_Event115_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Gameplayevents_Event115_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Gamehomeevents_Event4_Act3(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "2048 кликер!",
			     	     "attachments": "https://vk.com/app51485348_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Gamehomeevents_Event5_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

