


const scriptsInEvents = {

	async Menusheet_balls_Event6_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Продержись как можно дольше!",
			     	     "attachments": "https://vk.com/app51420108_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Menusheet_balls_Event7_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Egame_balls_Event1_Act1(runtime, localVars)
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

	async Egame_balls_Event151_Act1(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Egame_balls_Event151_Act2(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
						 console.log(data);});	
		}
		MyAdd();
	},

	async Egame_balls_Event151_Act4(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

