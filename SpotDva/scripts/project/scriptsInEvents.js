


const scriptsInEvents = {

		async Btn_click_Event27_Act8(runtime, localVars)
		{
			 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
			         .then(data => console.log(data.success))  
			        .catch(error => console.log(error));	
							console.log("tMyFrend");	
		},

		async Btn_click_Event29_Act8(runtime, localVars)
		{
			  console.log("MySocial");
			  vkBridge.send('VKWebAppShowWallPostBox',
						   {"message": "Найди все отличия!",
				     	     "attachments": "https://vk.com/app8130185_587856911"})
							  .then(data => {
							     console.log(data);});	
								 
		},

		async Action_Event17_Act1(runtime, localVars)
		{
			vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"});
			   
			vkBridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
			    .then(data => {
								if (data.result) { 	runtime.globalVars.Priz=1;
									console.log(data.result);
									console.log(runtime.globalVars.Priz); }
								})
			    .catch(error => console.log(error));	
		},

		async Action_Event34_Act1(runtime, localVars)
		{
			vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
							 
			 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
							 console.log(data);});	
		},

		async Action_Event34_Act3(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

