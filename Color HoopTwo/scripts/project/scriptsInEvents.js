


const scriptsInEvents = {

	async Win_Event106_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Win_Event106_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Start_Event6_Act4(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Start_Event8_Act4(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Пройди Все Уровни!",
			     	     "attachments": "https://vk.com/app51466499_587856911"})
						  .then(data => {
						     console.log(data);});	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

