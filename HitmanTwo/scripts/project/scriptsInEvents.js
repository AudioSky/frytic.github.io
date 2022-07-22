


const scriptsInEvents = {

		async Levels_Event156_Act1(runtime, localVars)
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

		async Levels_Event158_Act1(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
		},

		async Levels_Event159_Act1(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
		},

		async Levels_Event159_Act2(runtime, localVars)
		{
			vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
							 
			function MyAdd(){
			 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
							 console.log(data);});	
			}
			MyAdd();
		},

		async Levels_Event159_Act4(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
		},

		async Btn_Event1_Act1(runtime, localVars)
		{
			 console.log("MySocial");
			  vkBridge.send('VKWebAppShowWallPostBox',
						   {"message": "Победи Всех Врагов!",
				     	     "attachments": "https://vk.com/app8221441_587856911"})
							  .then(data => {
							     console.log(data);});		
		},

		async Btn_Event2_Act1(runtime, localVars)
		{
			 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
			         .then(data => console.log(data.success))  
			        .catch(error => console.log(error));	
							console.log("tMyFrend");	
		},

		async Reklama_Event1_Act1(runtime, localVars)
		{
			function addScript(src) {
			  var script = document.createElement('script');
			  script.src = src;
			  script.async = false; // чтобы гарантировать порядок
			  document.head.appendChild(script);
			}
			
			addScript('https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js');
		},

		async Reklama_Event1_Act2(runtime, localVars)
		{
			vkBridge.send('VKWebAppInit');
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

