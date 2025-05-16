

const scriptsInEvents = {

	async Btns_Event75_Act15(runtime, localVars)
	{

	},

	async Btns_Event77_Act15(runtime, localVars)
	{

	},

	async Menu_Event112_Act3(runtime, localVars)
	{
		 /*console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Дойди До Блока Бесконечности!",
			     	     "attachments": "https://vk.com/app52896396"})
						  .then(data => {
						     console.log(data);});	*/
							 
							 
		  vkBridge.send('VKWebAppShowStoryBox', {
		  background_type: 'image',
		  url : 'https://vk.com/photo-212537939_457239024?rev=1',
		  attachment: {
		    text: 'book',
		    type: 'photo',
		    owner_id: 212537939,
		    id: 457239024
		  }})
		  .then((data) => {
		    if (data.code_data) {
		      // Редактор историй открыт
		      console.log(data);
		    }})
		  .catch((error) => {
		    // Ошибка
		    console.log(error);
		  });				 
	},

	async Menu_Event113_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Action_Event7_Act7(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			  ysdk.features.GameplayAPI?.start()   
		
		});
	},

	async Action_Event1480_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1483_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1487_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1491_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1495_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1499_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1503_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1507_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1511_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1515_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1519_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1523_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1527_Act3(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event1556_Act1(runtime, localVars)
	{
		const ArrayRnd = runtime.objects.ArrayRnd.getFirstInstance();
		
		ArrayRnd.setSize(12,  1)
		
		let arrAA = [];
		
		function getRanArr(lngth) {
		
		  let arr = [];
		  
		  do {
		  
		    let ran = Math.floor(Math.random() * lngth);
		    arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
		  } while (arr.length < lngth)
		
		  return arr;
		}
		
		const res = getRanArr(12);
		
		
		function setAert(){
		
		  arrAA.push(...res);
		  //console.log(arrAA);
		  
		  for (let i = 0; i < arrAA.length; i++ ){
		  
		    ArrayRnd.setAt(arrAA[i], i, 0);
		  }  
		  
		}
		
		setAert();
	},

	async Action_Event1565_Act1(runtime, localVars)
	{

	},

	async Action_Event1567_Act1(runtime, localVars)
	{

	},

	async Action_Event1568_Act1(runtime, localVars)
	{

	},

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

	async Action_Event1558_Act1(runtime, localVars)
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

	async Btns_Event89_Act2(runtime, localVars)
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
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
