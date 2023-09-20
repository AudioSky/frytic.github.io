


const scriptsInEvents = {

	async Gameplayevents_Event2_Act1(runtime, localVars)
	{
		vkBridge.send('VKWebAppShowBannerAd', {
		
		  banner_location: 'bottom',
		  layout_type: 'resize'
		
		  })
		 .then((data) => { 
		    if (data.result) {
		      // Баннерная реклама отобразилась
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		    console.log(error);
		  });
	},

	async Gameplayevents_Event140_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Gameplayevents_Event140_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Gamehomeevents_Event10_Act2(runtime, localVars)
	{
		  console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Продержись как можно дольше!",
			     	     "attachments": "https://vk.com/app51453978_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Gamehomeevents_Event11_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

