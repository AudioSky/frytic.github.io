


const scriptsInEvents = {

	async EventMenu_Event21_Act6(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async EventMenu_Event22_Act6(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Защити Круг!",
			     	     "attachments": "https://vk.com/app51564263_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async EventGameplay_Event68_Act1(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async EventGameplay_Event68_Act2(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async EventGameplay_Event68_Act4(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

