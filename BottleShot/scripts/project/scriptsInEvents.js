


const scriptsInEvents = {

	async Action_Event54_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Action_Event54_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Btn_click_Event36_Act4(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Btn_click_Event39_Act4(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Разбей Все Бутылки!",
			     	     "attachments": "https://vk.com/app51427204_587856911"})
						  .then(data => {
						     console.log(data);});	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

