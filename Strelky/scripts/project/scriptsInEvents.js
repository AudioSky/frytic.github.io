


const scriptsInEvents = {

	async Action_Event1_Act1(runtime, localVars)
	{
		vkBridge.send('VKWebAppShowBannerAd', {
		
		  banner_location: 'Bottom',
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

	async Action_Event248_Act1(runtime, localVars)
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

	async Butons_Event148_Act3(runtime, localVars)
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

	async Butons_Event156_Act2(runtime, localVars)
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
				
				runtime.globalVars.PrizTwo=4;
				console.log(runtime.globalVars.Priz); 
				
				runtime.globalVars.Priz=4;		 
				console.log(runtime.globalVars.Priz); 
				
		      }else{ // Ошибка 
		        console.log('Ошибка при показе');
				}
		    })
		    .catch((error) => { 
			console.log(error); 
			
			runtime.globalVars.Priz=4;		 
			console.log(runtime.globalVars.Priz); 
			/* Ошибка */ });
		}
	},

	async Start_Event30_Act3(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Прокачай Мозг!",
			     	     "attachments": "https://vk.com/app52203029"})
						  .then(data => {
						     console.log(data);});	
	},

	async Start_Event31_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

