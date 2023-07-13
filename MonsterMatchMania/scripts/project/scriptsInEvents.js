


const scriptsInEvents = {

	async Es_main_Event13_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Объединяй Блоки!",
			     	     "attachments": "https://vk.com/app51702757_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Es_main_Event15_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Es_game_Event61_Act1(runtime, localVars)
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
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

