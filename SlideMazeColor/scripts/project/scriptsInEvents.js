


const scriptsInEvents = {

	async Global_Event50_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Global_Event50_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Start_Event24_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Start_Event25_Act2(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Закрась Всё!",
			     	     "attachments": "https://vk.com/app8175283_587856911"})
						  .then(data => {
						     console.log(data);});	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

