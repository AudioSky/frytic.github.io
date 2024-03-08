


const scriptsInEvents = {

	async Action_Event1_Act1(runtime, localVars)
	{
		runtime.globalVars.Lang_Ynd=ysdk.environment.i18n.lang;
		
		console.log(runtime.globalVars.Lang_Ynd);
		console.log(ysdk.environment.i18n.lang);
		
	},

	async Action_Event156_Act1(runtime, localVars)
	{
		 ysdk.getLeaderboards()
		  .then(lb => {
		    // Без extraData
		    lb.setLeaderboardScore('Best', runtime.globalVars.RecordScore);
		  });
		
		
		
	},

	async Action_Event173_Act2(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
		
		// ...  
		
		// Показать рекламу
		vkBridge.send("VKWebAppShowNativeAds", {"ad_format": "interstitial"}).then((data) => {
		    if (data.result){
		      console.log('Реклама показана');
			  	runtime.globalVars.ReklSound=1;			
				console.log(runtime.globalVars.ReklSound);
			  }
		    else{
		      console.log('Ошибка при показе');	  	
			  }
		  })
		  .catch((error) => { console.log(error); 
		  
		       runtime.globalVars.ReklSound=1;			
				console.log(runtime.globalVars.ReklSound);/* Ошибка */ });
	},

	async Action_Event173_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.ReklSound);
	},

	async Action_Event176_Act1(runtime, localVars)
	{
		vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
		
		// ...  
		
		// Показать рекламу
		vkBridge.send("VKWebAppShowNativeAds", {"ad_format": "interstitial"}).then((data) => {
		    if (data.result){
		      console.log('Реклама показана');
			  	runtime.globalVars.ReklSound=1;			
				console.log(runtime.globalVars.ReklSound);
			  }
		    else{
		      console.log('Ошибка при показе');	  	
			  }
		  })
		  .catch((error) => { console.log(error); 
		  
		       runtime.globalVars.ReklSound=1;			
				console.log(runtime.globalVars.ReklSound);/* Ошибка */ });
	},

	async Start_Event12_Act3(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Продержись как можно дольше!",
			     	     "attachments": "https://vk.com/app51872471_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Start_Event13_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

