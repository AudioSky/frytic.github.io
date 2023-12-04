


const scriptsInEvents = {

	async Action_Event1_Act1(runtime, localVars)
	{
		vkBridge.send('VKWebAppShowBannerAd', {
		
		  banner_location: 'top',
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

	async Action_Event310_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Action_Event311_Act1(runtime, localVars)
	{
		/*vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
		 
		    if (data.result) { 
		      // Предзагруженные материалы есть
			  runtime.globalVars.ReklSound=1;	
				console.log(data.result);
				 console.log(runtime.globalVars.ReklSound);
			  
		    } 
		  
					 console.log(data);
					  runtime.globalVars.ReklSound=1;
					  console.log(data.result);
					 
					 });	
		
		*/
		
		bridge.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial'});
		
		
		bridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
		  .then((data) => {
		    if (data.result){
			
		        console.log('Реклама показана');
			    runtime.globalVars.ReklSound=1;	
				console.log(data.result);
				console.log(runtime.globalVars.ReklSound);
			}
		    else{
			
			    runtime.globalVars.ReklSound=1;	
				console.log(data.result);
				console.log(runtime.globalVars.ReklSound);
				console.log('Ошибка при показе');
			}
		      
		  })
		  .catch((error) => { console.log(error);
		         runtime.globalVars.ReklSound=1;	
				console.log(data.result);
				console.log(runtime.globalVars.ReklSound);/* Ошибка */ });
	},

	async Action_Event315_Act7(runtime, localVars)
	{
		console.log(runtime.globalVars.ReklSound);
	},

	async Action_Event315_Act8(runtime, localVars)
	{
		console.log(runtime.globalVars.Abd);
	},

	async Menu_Event135_Act1(runtime, localVars)
	{
		vkBridge.send('VKWebAppCheckNativeAds', { ad_format: 'reward' })
		  .then((data) => {
		    if (data.result) {
		
		      // Предзагруженная реклама есть.
		 
		      // Теперь можно создать кнопку
		      // "Прокачать героя за рекламу".   
		      // ...
		        fooButtonClick();    
		      } else {
		        console.log('Рекламные материалы не найдены.');
		      }
		  })
		  .catch((error) => { console.log(error); /* Ошибка */  });
		
		// Обработчик нажатия кнопки "Посмотрите рекламу, чтобы прокачать героя"
		function fooButtonClick()
		{
		  // Показать рекламу
		vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
		    .then((data) => {
		      if (data.result) {// Успех
			    console.log('Реклама показана');
				
				runtime.globalVars.PrizTwo=2;
				console.log(runtime.globalVars.Priz); 
				
				runtime.globalVars.Priz=1;		 
				console.log(runtime.globalVars.Priz); 
				
		      }else{ // Ошибка 
		        console.log('Ошибка при показе');
				}
		    })
		    .catch((error) => { 
			console.log(error); 
			
			runtime.globalVars.Priz=1;		 
			console.log(runtime.globalVars.Priz); 
			/* Ошибка */ });
		}
	},

	async Menu_Event138_Act3(runtime, localVars)
	{
		console.log(runtime.globalVars.Priz);
	},

	async Buttons_Event15_Act3(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Давай скорее к нам, сражаться!",
			     	     "attachments": "https://vk.com/app51807334_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Buttons_Event16_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

