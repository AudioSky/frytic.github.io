

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
		
		    }catch{  }
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
		      runtime.globalVars.levt = +_varEmpty[1];
		      console.log("пустой lev" + result.keys[0].value); 
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.Levt = +_varEmpty[1];
		    
		  }); 
		/* Герои внешний вид */
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'HeroFace'    
		  ]})
		  .then((result) => { 
		
		    try{  
		      _HeroFaceGet = JSON.parse(result.keys[0].value);   
		
		       if( _HeroFaceGet.length != 0){  
		           runtime.globalVars.HeroFace = +_HeroFaceGet; 
		           console.log("непустой HeroFac" + result.keys[0].value);
		       }else{
		           runtime.globalVars.HeroFace = +_varEmpty[0];
		          console.log("пустой HeroFac" + result.keys[0].value);
		       } 
		
		    }catch{
		       runtime.globalVars.HeroFace = +_varEmpty[0];
		       console.log("пустой HeroFac" + result.keys[0].value);
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.HeroFace = +_varEmpty[0];    
		  });
		
		    /* викинг*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'FaceViking'    
		  ]})
		  .then((result) => { 
		
		    try{ 
		      _FaceVikingGet = JSON.parse(result.keys[0].value);   
		
		       if(_FaceVikingGet.length != 0){  
		           runtime.globalVars.FaceViking = +_FaceVikingGet; 
		           console.log("непустой FaceViking" + result.keys[0].value);  
		       }else{
		           runtime.globalVars.FaceViking = +_varEmpty[0];
		           console.log("пустой FaceViking" + result.keys[0].value);
		       } 
		
		    }catch{ 
		         runtime.globalVars.FaceViking = +_varEmpty[0];
		         console.log("пустой FaceViking сat" + result.keys[0].value);
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.FaceViking = +_varEmpty[0];    
		  });
		
		  /* солдат */
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'FaceSoldier'    
		  ]})
		  .then((result) => { 
		
		    try{ 
		      _FaceSoldierGet = JSON.parse(result.keys[0].value); 
		
		       if(_FaceSoldierGet.length != 0){  
		            runtime.globalVars.FaceSoldier = +_FaceSoldierGet;   
		       }else{
		           runtime.globalVars.FaceSoldier = +_varEmpty[0];
		       } 
		
		    }catch{ 
		        runtime.globalVars.FaceSoldier = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.FaceSoldier = +_varEmpty[0];    
		  });
		
		  /* пирта */
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'FacePirate'    
		  ]})
		  .then((result) => { 
		
		    try{ 
		       _FacePirateGet = JSON.parse(result.keys[0].value);   
		
		       if(_FacePirateGet.length != 0){  
		           runtime.globalVars.FacePirate = +_FacePirateGet;    
		       }else{
		           runtime.globalVars.FacePirate = +_varEmpty[0];
		       } 
		
		    }catch{ 
		        runtime.globalVars.FacePirate = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		      runtime.globalVars.FacePirate = +_varEmpty[0];    
		  });
		
		  /* гладиатор*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'FaceGladiator'    
		  ]})
		  .then((result) => { 
		
		    try{   
		       _FaceGladiator = JSON.parse(result.keys[0].value);  
		
		       if(_FaceGladiator.length != 0){  
		           runtime.globalVars.FaceGladiator = +_FaceGladiator;    
		       }else{
		          runtime.globalVars.FaceGladiator = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.FaceGladiator = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		       runtime.globalVars.FaceGladiator = +_varEmpty[0];   
		  });
		   
		  /* оружие первого*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunOneTwo'    
		  ]})
		  .then((result) => { 
		
		    try{
		      _GunOneTwo = JSON.parse(result.keys[0].value);              
		
		       if(_GunOneTwo.length != 0){  
		          runtime.globalVars.GunOneTwo = +_GunOneTwo;    
		       }else{
		          runtime.globalVars.GunOneTwo = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunOneTwo = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		       runtime.globalVars.GunOneTwo = +_varEmpty[0];   
		  });
		
		  /* оружие первого-2*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunOneThree'    
		  ]})
		  .then((result) => { 
		
		    try{
		        _GunOneThree = JSON.parse(result.keys[0].value);                       
		
		       if(_GunOneThree.length != 0){  
		          runtime.globalVars.GunOneThree = +_GunOneThree;    
		       }else{
		          runtime.globalVars.GunOneThree = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunOneThree = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunOneThree = +_varEmpty[0];;   
		  });
		
		    /* оружие 2-1*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunVikingTwo'    
		  ]})
		  .then((result) => { 
		
		    try{
		       _GunVikingTwo = JSON.parse(result.keys[0].value);                                    
		
		       if(_GunVikingTwo.length != 0){  
		          runtime.globalVars.GunVikingTwo = +_GunVikingTwo;      
		       }else{
		          runtime.globalVars.GunVikingTwo = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunVikingTwo = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunVikingTwo = +_varEmpty[0];  
		  });
		
		      /* оружие 2-2*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunVikingThree'    
		  ]})
		  .then((result) => { 
		
		    try{
		        _GunVikingThree = JSON.parse(result.keys[0].value);                                   
		
		       if(_GunVikingThree.length != 0){  
		          runtime.globalVars.GunOneThree = +_GunVikingThree;       
		       }else{
		          runtime.globalVars.GunOneThree = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunOneThree = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunOneThree = +_varEmpty[0];  
		  });
		
		    /* оружие 3-1*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunSoldierTwo'    
		  ]})
		  .then((result) => { 
		
		    try{
		         _GunSoldierTwo = JSON.parse(result.keys[0].value);                                  
		
		       if(_GunSoldierTwo.length != 0){  
		          runtime.globalVars.GunSoldierTwo = +_GunSoldierTwo;        
		       }else{
		          runtime.globalVars.GunSoldierTwo = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunSoldierTwo = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunSoldierTwo = +_varEmpty[0];  
		  });
		
		     /* оружие 3-2*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunSoldierThree'    
		  ]})
		  .then((result) => { 
		
		    try{
		         _GunSoldierThree = JSON.parse(result.keys[0].value);                                          
		
		       if(_GunSoldierThree.length != 0){  
		          runtime.globalVars.GunSoldierThree = +_GunSoldierThree;          
		       }else{
		          runtime.globalVars.GunSoldierThree = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunSoldierThree = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunSoldierThree = +_varEmpty[0];  
		  });
		
		       /* оружие 4-1*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunPirateTwo'    
		  ]})
		  .then((result) => { 
		
		    try{
		          _GunPirateTwo = JSON.parse(result.keys[0].value);                                                        
		
		       if(_GunPirateTwo.length != 0){  
		          runtime.globalVars.GunPirateTwo = +_GunPirateTwo;          
		       }else{
		          runtime.globalVars.GunPirateTwo = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunPirateTwo = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunPirateTwo = +_varEmpty[0];  
		  });
		
		      /* оружие 4-2*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunPirateThree'    
		  ]})
		  .then((result) => { 
		
		    try{
		        _GunPirateThree = JSON.parse(result.keys[0].value);                                                                  
		
		       if(_GunPirateThree.length != 0){  
		          runtime.globalVars.GunPirateThree = +_GunPirateThree;              
		       }else{
		          runtime.globalVars.GunPirateThree = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunPirateThree = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunPirateThree = +_varEmpty[0]; 
		  });
		
		        /* оружие 5-1*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunGladiatorTwo'    
		  ]})
		  .then((result) => { 
		
		    try{
		        _GunGladiatorTwo = JSON.parse(result.keys[0].value);                                                                                
		
		       if(_GunGladiatorTwo.length != 0){  
		          runtime.globalVars.GunGladiatorTwo = +_GunGladiatorTwo;               
		       }else{
		          runtime.globalVars.GunGladiatorTwo = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunGladiatorTwo = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunGladiatorTwo = +_varEmpty[0]; 
		  });
		
		    /* оружие 5-2*/
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [   
		    'GunGladiatorThree'    
		  ]})
		  .then((result) => { 
		
		    try{
		        _GunGladiatorThree = JSON.parse(result.keys[0].value);                                                                                               
		
		       if(_GunGladiatorThree.length != 0){  
		          runtime.globalVars.GunGladiatorThree = +_GunGladiatorThree;                
		       }else{
		          runtime.globalVars.GunGladiatorThree = +_varEmpty[0];
		       } 
		
		    }catch{ 
		       runtime.globalVars.GunGladiatorThree = +_varEmpty[0];
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		     console.log(error);  
		     runtime.globalVars.GunGladiatorThree = +_varEmpty[0];
		  });
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
