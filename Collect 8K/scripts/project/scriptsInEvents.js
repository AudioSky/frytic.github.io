


const scriptsInEvents = {

	async Ev_main_Event12_Act3(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Дойди До 8К!",
			     	     "attachments": "https://vk.com/app51488913_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Ev_main_Event13_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Ev_game_Event89_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Ev_game_Event89_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

