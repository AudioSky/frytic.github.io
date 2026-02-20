

const scriptsInEvents = {

	async Btns_Event42_Act1(runtime, localVars)
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

	async Louder_Event1_Act3(runtime, localVars)
	{
		
		
		 vkBridge.send('VKWebAppStorageGet', {
		  keys: [
		    'Coins'
		  ]})
		  .then((data) => {  
		      runtime.globalVars.Coins = Coins;
		       console.log(Coins);
		
		  })
		
	},

	async Inventary_Event3_Act3(runtime, localVars)
	{
		YaGames.init()
		    .then((ysdk) => {
		        // Сообщаем платформе, что игра загрузилась и можно начинать играть.
		        ysdk.features.LoadingAPI?.ready()
				 		
		    })
		    .catch(console.error);
	},

	async Inventary_Event17_Act1(runtime, localVars)
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
				
				runtime.globalVars.PrizHomeTwo=2;
				console.log(runtime.globalVars.PrizHome); 
				
				runtime.globalVars.PrizHome=1;		 
				console.log(runtime.globalVars.PrizHome); 
				
		      }else{ // Ошибка 
		        console.log('Ошибка при показе');
				}
		    })
		    .catch((error) => { 
			console.log(error); 
			
			runtime.globalVars.PrizHome=1;		 
			console.log(runtime.globalVars.PrizHome); 
			/* Ошибка */ });
		}
	},

	async Inventary_Event23_Act6(runtime, localVars)
	{
		let Coins = runtime.globalVars.Coins;
		
		vkBridge.send('VKWebAppStorageSet', {
		   key: 'Coins',
		   value: runtime.globalVars.Coins
		  })
		  
	},

	async Inventary_Event76_Act3(runtime, localVars)
	{
						
		  vkBridge.send('VKWebAppShowStoryBox', {
		  background_type: 'image',
		  url : 'https://vk.com/photo-212537939_457239029?rev=1',
		  attachment: {
		    text: 'book',
		    type: 'photo',
		    owner_id: 212537939,
		    id: 457239029
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

	async Inventary_Event77_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Inventary_Event79_Act1(runtime, localVars)
	{
		let _HeroFace= runtime.globalVars.HeroFace;// какое значение сейчас, какой персонаж
		let ArrayNameFace = ["One", "Viking", "Soldier", "Pirate", "Gladiator"];// названия анимаций персонажа, лица
		
		CheckNameFce();
		
		function CheckNameFce(){
		
		  for(let i = 0; i <= ArrayNameFace.length; i++){
		      
			 if(_HeroFace == i){
			    
				runtime.globalVars.HeroFaceName = ArrayNameFace[i];
		
			 }
		  }
		}
	},

	async Inventary_Event124_Act1(runtime, localVars)
	{
		let ArrayPriceFace = [0, 75, 150, 250, 400];// цена за смену имиджа
		let _HeroFaceNow = runtime.globalVars.HeroFaceTable;// какой выбран персонаж
		let _HeroFacePrice =runtime.globalVars.HeroFacePrice;// цена за смену имиджа
		
		ChengingPriceBuyHero();
		
		function ChengingPriceBuyHero(){
		
		  for(let i = 0; i <= ArrayPriceFace.length; i++){
		
		    if(_HeroFaceNow == i){
		
			  runtime.globalVars.HeroFacePrice = ArrayPriceFace[i];
			} 
		
		  }
		}
		
	},

	async Inventary_Event244_Act1(runtime, localVars)
	{
		let ArrayPriceGun = [[20, 50],
		                     [25, 60],
							           [35, 70],
							           [40, 90],
							           [50, 120]];
		let _HeroFaceNow = runtime.globalVars.HeroFaceTable;// какой выбран персонаж	
		
		let _GunOneTow = runtime.globalVars.GunOneTwo;
		let _GunOneThree = runtime.globalVars.GunOneThree;
		
		let _GunVikingTwo = runtime.globalVars.GunVikingTwo;
		let _GunVikingThree = runtime.globalVars.GunVikingThree;
		
		let _GunSoldierTwo = runtime.globalVars.GunSoldierTwo;
		let _GunSoldierThree = runtime.globalVars.GunSoldierThree;
		
		let _GunPirateTwo = runtime.globalVars.GunPirateTwo;
		let _GunPirateThree = runtime.globalVars.GunPirateThree;
		
		let _GunGladiatorTwo = runtime.globalVars.GunGladiatorTwo;
		let _GunGladiatorThree = runtime.globalVars.GunGladiatorThree;
		
		GunChangingGun();
		
		function GunChangingGun(){
		  if(_HeroFaceNow == 0){
		    //console.log(runtime.globalVars.GunOneTow);
		    if(_GunOneTow == 0 && _GunOneThree == 0){
			   
		      runtime.globalVars.HeroFacePrice = ArrayPriceGun[0][0]; 
		
			}else{
		      runtime.globalVars.HeroFacePrice = ArrayPriceGun[0][1]; 
			}
		
		  }else if(_HeroFaceNow == 1){
		
		    if(_GunVikingTwo == 0 && _GunVikingThree == 0){
			   
		      runtime.globalVars.HeroFacePrice = ArrayPriceGun[1][0]; 
		
			}else{
		      runtime.globalVars.HeroFacePrice = ArrayPriceGun[1][1]; 
			}
		
		  }else if(_HeroFaceNow == 2){
		
		      if(_GunSoldierTwo == 0 && _GunSoldierThree == 0){
			   
		       runtime.globalVars.HeroFacePrice = ArrayPriceGun[2][0]; 
		
			   }else{
		       runtime.globalVars.HeroFacePrice = ArrayPriceGun[2][1]; 
			  }
		
		  }else if(_HeroFaceNow == 3){
		
		      if(_GunPirateTwo == 0 && _GunPirateThree == 0){
			   
		       runtime.globalVars.HeroFacePrice = ArrayPriceGun[3][0]; 
		
			   }else{
		       runtime.globalVars.HeroFacePrice = ArrayPriceGun[3][1]; 
			  }
		
		  }else if(_HeroFaceNow == 4){
		
		      if(_GunGladiatorTwo == 0 && _GunGladiatorThree == 0){
			   
		       runtime.globalVars.HeroFacePrice = ArrayPriceGun[4][0]; 
		
			   }else{
		       runtime.globalVars.HeroFacePrice = ArrayPriceGun[4][1]; 
			  }
		
		  }      
		
		}
	},

	async Action_Event2_Act1(runtime, localVars)
	{

	},

	async Action_Event540_Act13(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event553_Act2(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event828_Act2(runtime, localVars)
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
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
