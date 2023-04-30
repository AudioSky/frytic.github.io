


const scriptsInEvents = {

	async Es_game_Event87_Act1(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Es_game_Event87_Act3(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
		 
		    if (data.result) { 
		      // Предзагруженные материалы есть
			   runtime.globalVars.ReklSound=1;
				console.log(data.result);
				 console.log(runtime.globalVars.ReklSound);
			  
		    } 
		  
					 console.log(data);});	
		}
		MyAdd();
	},

	async Es_game_Event87_Act5(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Es_game_Event88_Act1(runtime, localVars)
	{
		console.log(runtime.globalVars.ReklSound);
	},

	async Es_game_Event89_Act3(runtime, localVars)
	{
		console.log("sound1");
	},

	async Es_game_Event90_Act3(runtime, localVars)
	{
		console.log("sound0");
	},

	async Es_main_Event2_Act1(runtime, localVars)
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

	async Es_main_Event14_Act3(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Поставь новый рекорд!",
			     	     "attachments": "https://vk.com/app51630451_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Es_main_Event16_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

