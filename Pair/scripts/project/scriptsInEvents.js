


const scriptsInEvents = {

		async Action_Event39_Act1(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
		},

		async Action_Event39_Act2(runtime, localVars)
		{
			vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
							 
			function MyAdd(){
			 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
							 console.log(data);});	
			}
			MyAdd();
		},

		async Action_Event39_Act4(runtime, localVars)
		{
			console.log(runtime.globalVars.Abd);
		},

		async Btnclick_Event1_Act2(runtime, localVars)
		{
			function addScript(src) {
			  var script = document.createElement('script');
			  script.src = src;
			  script.async = false; // чтобы гарантировать порядок
			  document.head.appendChild(script);
			}
			
			addScript('https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js');
			
		},

		async Btnclick_Event37_Act3(runtime, localVars)
		{
			  console.log("MySocial");
			  vkBridge.send('VKWebAppShowWallPostBox',
						   {"message": "Найди пару для каждой картинки!",
				     	     "attachments": "https://vk.com/app8127397_587856911"})
							  .then(data => {
							     console.log(data);});						 
			
		},

		async Btnclick_Event40_Act3(runtime, localVars)
		{
			 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
			         .then(data => console.log(data.success))  
			        .catch(error => console.log(error));	
							console.log("tMyFrend");	
			
		},

		async Star_Event2_Act1(runtime, localVars)
		{
			vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"});
			   
			vkBridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
			    .then(data => {
								if (data.result) { 	runtime.globalVars.Priz=1;
									console.log(data.result);
									console.log(runtime.globalVars.Priz); }
								})
			    .catch(error => console.log(error));	
			
			
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

