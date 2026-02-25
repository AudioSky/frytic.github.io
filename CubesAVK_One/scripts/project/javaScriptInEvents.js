

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

	async Localhost_Event1_Act19(runtime, localVars)
	{

	},

	async Louder_Event2_Act3(runtime, localVars)
	{

	},

	async Inventary_Event3_Act3(runtime, localVars)
	{

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

	async Inventary_Event23_Act4(runtime, localVars)
	{
		    console.log("aa " +  runtime.globalVars.Coins);
		
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

	async Inventary_Event83_Act4(runtime, localVars)
	{
		let _HeroFaceGt = +runtime.globalVars.HeroFace;
		let _HeroFaceNow =_HeroFaceGt;
		let _HeroFaceStr = _HeroFaceNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'HeroFace',
		   value: _HeroFaceStr 
		  });
		
		
	},

	async Inventary_Event92_Act5(runtime, localVars)
	{
		let _HeroFaceGt = +runtime.globalVars.HeroFace;
		let _HeroFaceNow =_HeroFaceGt;
		let _HeroFaceStr = _HeroFaceNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'HeroFace',
		   value: _HeroFaceStr 
		  });
		
		
	},

	async Inventary_Event101_Act4(runtime, localVars)
	{
		let _HeroFaceGt = +runtime.globalVars.HeroFace;
		let _HeroFaceNow =_HeroFaceGt;
		let _HeroFaceStr = _HeroFaceNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'HeroFace',
		   value: _HeroFaceStr 
		  });
		
		
	},

	async Inventary_Event110_Act4(runtime, localVars)
	{
		let _HeroFaceGt = +runtime.globalVars.HeroFace;
		let _HeroFaceNow =_HeroFaceGt;
		let _HeroFaceStr = _HeroFaceNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'HeroFace',
		   value: _HeroFaceStr 
		  });
		
		
	},

	async Inventary_Event119_Act4(runtime, localVars)
	{
		let _HeroFaceGt = +runtime.globalVars.HeroFace;
		let _HeroFaceNow =_HeroFaceGt;
		let _HeroFaceStr = _HeroFaceNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'HeroFace',
		   value: _HeroFaceStr 
		  });
		
		
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

	async Inventary_Event130_Act3(runtime, localVars)
	{
		let _FaceVikingGt = +runtime.globalVars.FaceViking;
		let _FaceVikingNow =_FaceVikingGt;
		let _FaceVikingStr = _FaceVikingNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'FaceViking',
		   value: _FaceVikingStr 
		  });
		
		
	},

	async Inventary_Event131_Act4(runtime, localVars)
	{
		let _FaceSoldierGt = +runtime.globalVars.FaceSoldier;
		let _FaceSoldierNow =_FaceSoldierGt;
		let _FaceSoldierStr = _FaceSoldierNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'FaceSoldier',
		   value: _FaceSoldierStr 
		  });
		
		
	},

	async Inventary_Event132_Act4(runtime, localVars)
	{
		let _FacePirateGt = +runtime.globalVars.FacePirate;
		let _FacePirateNow =_FacePirateGt;
		let _FacePirateStr = _FacePirateNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'FacePirate',
		   value: _FacePirateStr 
		  });
		
		
	},

	async Inventary_Event133_Act4(runtime, localVars)
	{
		let _FaceGladiatorGt = +runtime.globalVars.FaceGladiator;
		let _FaceGladiatorNow =_FaceGladiatorGt;
		let _FaceGladiatorStr = _FaceGladiatorNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'FaceGladiator',
		   value: _FaceGladiatorStr 
		  });
		
		
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

	async Inventary_Event265_Act5(runtime, localVars)
	{
		let _GunOneTwoGt = +runtime.globalVars.GunOneTwo;
		let _GunOneTwoNow =_GunOneTwoGt;
		let _GunOneTwoStr = _GunOneTwoNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunOneTwo',
		   value: _GunOneTwoStr 
		  });
		
		
	},

	async Inventary_Event268_Act5(runtime, localVars)
	{
		let _GunOneThreeTwoGt = +runtime.globalVars.GunOneThree;
		let _GunOneThreeNow =_GunOneThreeTwoGt;
		let _GunOneThreeStr = _GunOneThreeNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunOneThree',
		   value: _GunOneThreeStr 
		  });
		
		
	},

	async Inventary_Event271_Act5(runtime, localVars)
	{
		let _GunVikingTwoGt = +runtime.globalVars.GunVikingTwo;
		let _GunVikingTwoNow =_GunVikingTwoGt;
		let _GunVikingTwoStr = _GunVikingTwoNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunVikingTwo',
		   value: _GunVikingTwoStr 
		  });
		
		
	},

	async Inventary_Event274_Act5(runtime, localVars)
	{
		let _GunVikingThreeGt = +runtime.globalVars.GunVikingThree;
		let _GunVikingThreeNow =_GunVikingThreeGt;
		let _GunVikingThreeStr = _GunVikingThreeNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunVikingThree',
		   value: _GunVikingThreeStr 
		  });
		
		
	},

	async Inventary_Event277_Act5(runtime, localVars)
	{
		let _GunSoldierTwoGt = +runtime.globalVars.GunSoldierTwo;
		let _GunSoldierTwoNow =_GunSoldierTwoGt;
		let _GunSoldierTwoStr = _GunSoldierTwoNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunSoldierTwo',
		   value: _GunSoldierTwoStr 
		  });
		
		
	},

	async Inventary_Event280_Act5(runtime, localVars)
	{
		let _GunSoldierThreeGt = +runtime.globalVars.GunSoldierThree;
		let _GunSoldierThreeNow =_GunSoldierThreeGt;
		let _GunSoldierThreeStr = _GunSoldierThreeNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunSoldierThree',
		   value: _GunSoldierThreeStr 
		  });
		
		
	},

	async Inventary_Event283_Act5(runtime, localVars)
	{
		let _GunPirateTwoGt = +runtime.globalVars.GunPirateTwo;
		let _GunPirateTwoNow =_GunPirateTwoGt;
		let _GunPirateTwoStr = _GunPirateTwoNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunPirateTwo',
		   value: _GunPirateTwoStr 
		  });
		
		
	},

	async Inventary_Event286_Act5(runtime, localVars)
	{
		let _GunPirateThreeGt = +runtime.globalVars.GunPirateThree;
		let _GunPirateThreeNow =_GunPirateThreeGt;
		let _GunPirateThreeStr = _GunPirateThreeNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunPirateThree',
		   value: _GunPirateThreeStr 
		  });
		
		
	},

	async Inventary_Event289_Act5(runtime, localVars)
	{
		let _GunGladiatorTwoGt = +runtime.globalVars.GunGladiatorTwo;
		let _GunGladiatorTwoNow =_GunGladiatorTwoGt;
		let _GunGladiatorTwoStr = _GunGladiatorTwoNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunGladiatorTwo',
		   value: _GunGladiatorTwoStr 
		  });
		
		
	},

	async Inventary_Event292_Act5(runtime, localVars)
	{
		let _GunGladiatorThreeGt = +runtime.globalVars.GunGladiatorThree;
		let _GunGladiatorThreeNow =_GunGladiatorThreeGt;
		let _GunGladiatorThreeStr = _GunGladiatorThreeNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'GunGladiatorThree',
		   value: _GunGladiatorThreeStr 
		  });
		
		
	},

	async Inventary_Event366_Act1(runtime, localVars)
	{
		
		let _Coinsdsf = +runtime.globalVars.Coins;
		let _CoinsASdasdA = _Coinsdsf;
		let _CoinsStr = _CoinsASdasdA.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'Coins',
		   value: _CoinsStr 
		  });
		
		    console.log("aa " +  runtime.globalVars.Coins);
		     console.log("aad " +  _CoinsStr);
	},

	async Inventary_Event368_Act1(runtime, localVars)
	{
		
		let _LevGt = +runtime.globalVars.levt;
		let _LevtNow = _LevGt;
		let _LevStr = _LevtNow.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'Levt',
		   value: _LevStr 
		  });
		
		    console.log("aa Levt" +  runtime.globalVars.levt);
		     console.log("aadLevt " +  _CoinsStr);
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
	},

	async Louder_Event2_Act2(runtime, localVars)
	{
		let _CoinsGet;
		let _LevtGet;
		
		let _HeroFaceGet;
		let _FaceVikingGet;
		let _FaceSoldierGet;
		let _FacePirateGet;
		let _FaceGladiator;
		
		let _GunOneTwo;
		let _GunOneThree;
		let _GunVikingTwo;
		let _GunVikingThree;
		let _GunSoldierTwo;
		let _GunSoldierThree;
		let _GunPirateTwo;
		let _GunPirateThree;
		let _GunGladiatorTwo;
		let _GunGladiatorThree;
		
		/* если пусто */
		let _varEmpty = [0, 1];
		
		vkBridge.send('VKWebAppStorageGet', {
		  keys: [
		    'Coins'
		  ]})
		  .then((result) => { 
		
		    try{ 
		
		      _CoinsGet = JSON.parse(result.keys[0].value);
		
		       if(_CoinsGet.length != 0){
		           runtime.globalVars.Coins = +_CoinsGet; 
		           console.log("непустой монетки a " + result.keys[0].value);
		       }else{
		           runtime.globalVars.Coins = +_varEmpty[0];
		           console.log("пустой монетки a" + result.keys[0].value);
		       }      
		
		    }catch{ 
		
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.Coins = +_varEmpty[0];    
		  }); 
		
		vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'Levt'    
		  ]})
		  .then((result) => { 
		
		    try{   
		
		      _LevtGet = JSON.parse(result.keys[0].value);
		
		       if(_LevtGet.length != 0){ 
		           runtime.globalVars.levt = +_LevtGet;  
		           console.log("непустой levt" + result.keys[0].value);
		       }else{
		           runtime.globalVars.levt = +_varEmpty[1];
		           console.log("пустой lev" + result.keys[0].value);
		       }
		
		    }catch{ 
		
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.Levt = +_varEmpty[1];
		    
		  }); 
		
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'HeroFace'    
		  ]})
		  .then((result) => { 
		
		    try{   
		
		      _HeroFaceGet = JSON.parse(result.keys[0].value);   
		
		       if(_LevtGet.length != 0){  
		           runtime.globalVars.HeroFace = +_HeroFaceGet; 
		           console.log("непустой HeroFac" + result.keys[0].value);
		       }else{
		           runtime.globalVars.HeroFace = +_varEmpty[0];
		           console.log("пустой HeroFac" + result.keys[0].value);
		       } 
		
		    }catch{ 
		
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.HeroFace = +_varEmpty[0];
		    
		  });
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
