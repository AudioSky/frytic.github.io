


const scriptsInEvents = {

	async Action_Event2_Act1(runtime, localVars)
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

	async Action_Event169_Act1(runtime, localVars)
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

	async Action_Event173_Act4(runtime, localVars)
	{
		console.log(runtime.globalVars.ReklSound);
	},

	async Start_Event13_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Помоги Котикам!",
			     	     "attachments": "https://vk.com/app51745646_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Start_Event15_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Btn_Event48_Act2(runtime, localVars)
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
				 runtime.globalVars.Priz=1;
				  console.log(runtime.globalVars.Priz); 
		      }else{ // Ошибка 
		        console.log('Ошибка при показе');
				}
		    })
		    .catch((error) => { console.log(error); /* Ошибка */ });
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

