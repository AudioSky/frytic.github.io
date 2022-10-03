


const scriptsInEvents = {

	async Egame_Event225_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Egame_Event225_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Emenu_Event13_Act2(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Собери Три в Ряд!",
			     	     "attachments": "https://vk.com/app51440258_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Emenu_Event14_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

