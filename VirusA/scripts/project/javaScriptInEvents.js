

const scriptsInEvents = {

	async Buttons_Event51_Act1(runtime, localVars)
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

	async Start_Event36_Act3(runtime, localVars)
	{
						
		  vkBridge.send('VKWebAppShowStoryBox', {
		  background_type: 'image',
		  url : 'https://vk.com/photo-212537939_457239028?rev=1',
		  attachment: {
		    text: 'book',
		    type: 'photo',
		    owner_id: 212537939,
		    id: 457239028
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

	async Start_Event37_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Inventory_Event1_Act1(runtime, localVars)
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

	async Inventory_Event59_Act1(runtime, localVars)
	{
		let ArryWall_Inv = [1000, 2000, 5000, 12000]; // массив с данными, силы стены
		let ArryWallUpdate_Inv = [0, 1, 2, 3]; // массив, прогресса апгрейда стены
		let ArryWallUpdatePrice_Inv = [60, 150, 300, 450]; // массив, прогресса апгрейда стены
		
		let _StepWithlineWall = 0.0116;
		
		let _WallUpdate_Inv = runtime.globalVars.WallUpdate;
		let _Btn_Up = runtime.objects.Btn_Upgrade.getFirstInstance();
		
		
		WallUpdate_Proverka();
		_WallPriceChanging();
		
		function WallUpdate_Proverka(){
		
		  //console.log("fgdg  "+_Btn_Up.instVars.Act);
		
		   if(+_WallUpdate_Inv === +ArryWallUpdate_Inv.length-1){
		      
		     _Btn_Up.instVars.Act = true;
		
		   }   
		}
		
		/* изменяем стоимости апгрейда стены */
		function _WallPriceChanging(){
		
		    for (let i = 0; i < ArryWallUpdate_Inv.length; i++) {
		
		       if(_WallUpdate_Inv === ArryWallUpdate_Inv[i]){
		
		           _Btn_Up.instVars.Price = ArryWallUpdatePrice_Inv[i];
			    }
		   }
		}
		
	},

	async Inventory_Event69_Act1(runtime, localVars)
	{
		let ArryArrowUpdate_Inv = [0, 1, 2]; // массив, прогресса апгрейда стрелы
		let ArryArrowUpdatePrice_Inv = [75, 150, 300]; // массив, прогресса апгрейда стрелы
		
		let ArrayNameArrayGun = [[50, 110, 350], [100, 190, 350], [125, 250, 350], [210, 275, 350], [320, 450, 450]];// цена апгрейда
		let NameGun = ["Crossbow", "Peaks", "Gun", "Hummer", "Grenade"];// название оружия
		
		let _NameGun_Inv = runtime.globalVars.GunName;// название оружия
		
		let _StepBtnupg = runtime.globalVars.Step_BtnUpg;// название оружия
		
		let _ArrowUpdate_Inv = runtime.globalVars.ArrowUpdate;// апргейрд стрелы
		let PeakUpdate_Inv = runtime.globalVars.PeakUpdate;// апргейрд  пики
		let GunUpdate_Inv = runtime.globalVars.GunUpdate;// апргейрд оружие
		let HummerUpdate_Inv = runtime.globalVars.HummerUpdate;// апргейрд молот
		let GrenadeUpdate_Inv = runtime.globalVars.GrenadeUpdate;// апргейрд гранаты
		
		let _StepYellow = runtime.globalVars.StepYelloOne;// 
		
		/* скорость и сила стрельбы*/
		let ArraySpeedGun = [[1.1, 1.3, 1.6], [0.6, 0.8, 1.2], [1.2, 1.6, 1.9], [0.8, 1.1, 1.5], [0.5, 0.7, 0.8]];
		let ArrayMusleGun = [[5, 7, 12], [7, 10, 15], [7, 10, 15], [10, 15, 20], [15, 20, 40]];
		
		let _InvSpeedGun = runtime.globalVars.Inventare_Speed;
		let _InvMusledGun = runtime.globalVars.Inventare_Musle;
		let _InvNameGun = runtime.globalVars.Inventare_GunName;
		
		let _ArrowSpeedGun = runtime.globalVars.ArrowSpeed_Inv;
		let _ArrowMusleGun = runtime.globalVars.ArrowMusle_Inv;
		
		_ArrowPriceChanging();
		
		/* изменяем стоимости апгрейда стены */
		function _ArrowPriceChanging(){
		
		   if( _NameGun_Inv === NameGun[0]){
		           
		      FindBtnUpgrade(_NameGun_Inv, 0, _ArrowUpdate_Inv);
		      /* скорость и сила */       
		      SpeedMusle_Gun(0, _ArrowUpdate_Inv, _NameGun_Inv);      
		
		   } else if( _NameGun_Inv === NameGun[1]){
		             
		      FindBtnUpgrade(_NameGun_Inv, 1, PeakUpdate_Inv);
		      SpeedMusle_Gun(1, PeakUpdate_Inv, _NameGun_Inv);
		
		   }else if( _NameGun_Inv === NameGun[2]){
		             
		      FindBtnUpgrade(_NameGun_Inv, 2, GunUpdate_Inv);
		      SpeedMusle_Gun(2, GunUpdate_Inv, _NameGun_Inv);
		
		   }else if( _NameGun_Inv === NameGun[3]){
		             
		      FindBtnUpgrade(_NameGun_Inv, 3, HummerUpdate_Inv);
		      SpeedMusle_Gun(3, HummerUpdate_Inv, _NameGun_Inv);
		
		   }else if( _NameGun_Inv === NameGun[4]){
		             
		      FindBtnUpgrade(_NameGun_Inv, 4, GrenadeUpdate_Inv);
		      SpeedMusle_Gun(4, GrenadeUpdate_Inv, _NameGun_Inv);
		   }
		}
		
		/* присваиваем значения кнопкам */
		function FindBtnUpgrade(Name, Step, Upgrade){
		
		   let innerArr = [];
		   innerArr = ArrayNameArrayGun[Step];
		
		   for(let n = 0; n < _StepBtnupg; n++){
		      
		      let fra = runtime.objects.Btn_Upgrade.getAllInstances()[n];	
		
		         if(Name === fra.instVars.NameGun){
		
		            fra.instVars.Price = innerArr[Upgrade];  
		
		               if(Upgrade >= 2){
		                  fra.instVars.Act = true;    
		                  fra.instVars.ActFullupgrade = true; 
		               }
		         }
		   }
		}
		
		/* присваиваем значения скорости и силе оружия */
		
		function SpeedMusle_Gun(NameGun, Step, Gun){
		
		   let invMusle = [];
		   let invSpeed = [];
		   let Num = 0;
		   invMusle = ArrayMusleGun[NameGun];
		   invSpeed = ArraySpeedGun[NameGun];
		
		   runtime.globalVars.Inventare_GunName = _NameGun_Inv;
		   runtime.globalVars.Inventare_Musle = +invMusle[Step];
		   runtime.globalVars.Inventare_Speed = +invSpeed[Step];
		
		   runtime.globalVars.StepYelloOne = Step;
		  //console.log("fgd-=-0=-  "+ runtime.globalVars.Inventare_GunName);
		 
		    Num = +Step + 1;
		   if(Num  < 3){
		
		    // console.log("fgd-=-0=-  "+ invMusle[Step]);
		     runtime.globalVars.Inventare_MusleYellow = +invMusle[Num]
		     runtime.globalVars.Inventare_SpeedYellow = +invSpeed[Num]
		   
		   }  
		
		}
		
	},

	async Action_Event1_Act1(runtime, localVars)
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

	async Action_Event392_Act1(runtime, localVars)
	{
		const ArrayRnd = runtime.objects.ArrayRnd.getFirstInstance();
		const StepRnd = runtime.globalVars.RndBornZombieTwo;
		ArrayRnd.setSize(StepRnd,  1)
		
		let arrAA = [];
		
		function getRanArr(lngth) {
		
		  let arr = [];
		  
		  do {
		  
		    let ran = Math.floor(Math.random() * lngth);
		    arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
		  } while (arr.length < lngth)
		
		  return arr;
		}
		
		const res = getRanArr(StepRnd);
		
		
		function setAert(){
		
		  arrAA.push(...res);
		  //console.log(arrAA);
		  
		  for (let i = 0; i < arrAA.length; i++ ){
		  
		    ArrayRnd.setAt(arrAA[i], i, 0);
		  }  
		  
		}
		
		setAert();
	},

	async Action_Event418_Act1(runtime, localVars)
	{
		let ArryWall = [1000, 2000, 5000, 12000];
		let ArryWallUpdate = [0, 1, 2, 3];
		
		let _WallUpdate = runtime.globalVars.WallUpdate;
		
		WallUpdate();
		
		function WallUpdate(){
		
		  for (let i = 0; i < ArryWallUpdate.length; i++) {
		
		       if(_WallUpdate === ArryWallUpdate[i]){
		
		           runtime.globalVars.WallLife = ArryWall[i];
		           runtime.globalVars.WallDead = ArryWall[i];
		
			   }
		
		  }
		
		}
		
	},

	async Action_Event499_Act42(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			  ysdk.features.GameplayAPI?.start()   
		
		});
	},

	async Action_Event520_Act2(runtime, localVars)
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

	async Action_Event524_Act1(runtime, localVars)
	{

	},

	async Action_Event526_Act1(runtime, localVars)
	{

	},

	async Action_Event527_Act1(runtime, localVars)
	{

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
