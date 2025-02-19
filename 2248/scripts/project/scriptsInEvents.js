


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

	async Action_Event45_Act1(runtime, localVars)
	{
		let ArrayNumber = [
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"]
		];
		
		let ArrayNumberFind = [
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"]
		];
		
		//-------------------Данные-----------------------------------------
		
		let ArrayFindHoriz = [];//найденные элементы по строке
		let ArrayFindVert = [];//найденные элементы по вертикали
		
		let findNumRow = 0;// переменная для поиска ряд
		let findNumLine = 0;// переменная для поиска строка
		let findNumVar = 0;// переменная для поиска строка
		
		findNumRow = runtime.globalVars.NumRow;// переменная для поиска ряд
		findNumLine = runtime.globalVars.NumLine;// переменная для поиска строка
		
		const ArrayNum= runtime.objects.ArrayNum.getFirstInstance();	
		
		//----------------- Вызов функций -----------------------------------
		
		RecordArrayNumber();
		//StartFind();
		//ShowArrayFind();
		FindNum(findNumLine, findNumRow);
		
		OverlapNum();
		
		function ShowArrayFind() {
		
		    console.log(ArrayNumberFind);
		    // console.log(ArrayFindVert);
		}
		
		//-------------------------------------------------------------------
		
		/* заполняем массив ArrayNumber,  */
		
		function RecordArrayNumber(){
		
		   for (let i = 0; i <  ArrayNumber.length; i++) {
		  
		        for (let k = 0; k < ArrayNumber[i].length; k++) {
		    
		            ArrayNumber[i][k] = ArrayNum.getAt(i,k);        
		   
		         }  
		  
		   }
		   
		   //console.log(ArrayNumber);
		
		}
		
		//-------------------------------------------------------------------
		
		//--------------Вызываем Начало, проверяем----------------------------
		
		function FindNum(fndLine, fndRow) {
		
		    ArrayFindHoriz = [];// обнуляем массив
		
		    for (let i = 0; i < ArrayNumber.length; i++) {
		
		        for (let k = 0; k < ArrayNumber[i].length; k++) {
		
		      //      console.log(ArrayNumber[fndLine][fndRow]);
		
		            if (ArrayNumber[i][k] === ArrayNumber[fndLine][fndRow]) {
		
		                ArrayNumberFind[i][k] = ArrayNumber[i][k];
		
		                ArrayFindHoriz.push(i + "-" + k + "-" + ArrayNumber[i][k]);
		
		            }
		
		        }
		
		    }
		
		}
		
		
		//--------------Поиск совпадений--------------------------------------
		
		/* функция проверяет есть ли совпадения  */
		
		function OverlapNum(){
		
		  let NumFind = 0;// есть ли совпадения в массиве
		  
		  for (let i = 0; i <  ArrayNumberFind.length; i++) {
		  
		       for (let k = 0; k < ArrayNumberFind[i].length; k++){
			   
			        if (ArrayNumberFind[i][k] != "n"){
					
					    NumFind += 1;						     			
					
					}	   
			   
			   }
		  
		  }
		  
		  if(NumFind > 1){
		 
		    AssignNumAct();
		  
		  }else{
		  
		     c3_callFunction("FindNull"); 
			
		  }
		  
		}
		
		/* присваиваем значения ActFind = true Номерам на поле */
		
		function AssignNumAct(){
		
		  for (let i = 0; i <  ArrayNumberFind.length; i++) {
		  
		       for (let k = 0; k < ArrayNumberFind[i].length; k++){
			   
			        if (ArrayNumberFind[i][k] != "n"){
					
					     for(let n = 0; n < 35; n++){
					 
					          let fr = runtime.objects.Number.getAllInstances()[n];	
						      let cur_x = fr.instVars.line;  		 
					          let cur_y = fr.instVars.row;                     
							  
					          if(+cur_x  === i  && +cur_y === k){					
					 	 
					             fr.instVars.ActFind=1;	
						      				  
					          }	
					 
					    }	 					     			
					
					}	   
			   
			   }
		  
		  }		
		  
		   c3_callFunction("FindYesNum");  
		
		}
	},

	async Action_Event58_Act1(runtime, localVars)
	{
		let ArrayNumbers = [
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"]
		];
		
		let ArrayNumberFinds = [
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"]
		];
		
		//-------------------Данные-----------------------------------------
		
		const NumVar = runtime.globalVars.NumVar;
		const ArrayNums= runtime.objects.ArrayNum.getFirstInstance();	
		
		let CurrY = runtime.globalVars.CurY;
		 let findN = 0;
		
		//----------------- Вызов функций -----------------------------------
		
		RecordArrayNumbers();
		//ShowArrayFinds();
		 FindNumN();
		//-------------------------------------------------------------------
		
		/* заполняем массив ArrayNumber,  */
		
		function RecordArrayNumbers(){
		
		   for (let i = 0; i <  ArrayNumbers.length; i++) {
		  
		        for (let k = 0; k < ArrayNumbers[i].length; k++) {
		    
		            ArrayNumbers[i][k] = ArrayNums.getAt(i,k);        
		   
		         }  
		  
		   }
		   
		  // console.log(ArrayNumbers);
		
		}
		
		/* показываем что нашли  */
		function ShowArrayFinds() {
		
		    console.log(ArrayNumberFinds);
			
		}
		//-------------------------------------------------------------------
		
		/* поиск n элементов в массиве */
		
		function FindNumN() {
		
		  // console.log("dsfY" );
		 
		   for (let i = 0; i < 5; i++) {
		   
		        findN = 0;
		
		        for (let k = 6; k >= 0; k--) {
						  
				   
				     if (ArrayNumbers[k][i] == "n") {
					 
					     findN += 1;
						 
					 }
					 
					 if (ArrayNumbers[k][i] != "n") {
					 
					     if(findN > 0){	
				
						     ArrayNumberFinds[k + findN][i] = ArrayNumbers[k][i];					 
						     	
							 for(let n = 0; n < NumVar; n++){
					 
					            let frs = runtime.objects.Number.getAllInstances()[n];	
						        let cur_x = frs.instVars.line;  		 
					            let cur_y = frs.instVars.row; 		
								
								if(+cur_x  === k   && +cur_y === i){					
						 
					               frs.instVars.ActDown=1;	
								   frs.instVars.NumDown = findN;
						       				  
					            }
					 		  
							 }					  
				 
					    }	
					   
					  }else{
						 
						ArrayNumberFinds[k][i] = ArrayNumbers[k][i];					
						   
					 }  
					 
			   }
			   
			    if(findN > 0){			
		            
					let ner = 1;
					 
					 for(let s = findN; s > 0; s--){
					 
					      BornNum(s, i, findN);
						  ner++;
					 
					 }
				
				}
				   
		  }
		  
		    c3_callFunction("DownNum"); 
		
		}
		//-------------------------------------------------------------------
		
		/* создание блоков */
		
		function BornNum(NmDown, crX, NumDf){
		
		  let ArrayX = 144;// + 197
		  let ArrayY = 308;// + 198
		  
		  runtime.globalVars.NumDown = NumDf;
		  runtime.globalVars.CurX = +ArrayX + (+crX * 197);
		  runtime.globalVars.CurY =  +ArrayY - (+NmDown * 198);  
		
		  c3_callFunction("BornNum"); 
		
		}
	},

	async Action_Event66_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event68_Act1(runtime, localVars)
	{
		 ysdk.getLeaderboards()
		  .then(lb => {
		    // Без extraData
		    lb.setLeaderboardScore('Best', runtime.globalVars.RecordScore);
		  });
		
		
		
	},

	async Action_Event73_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event78_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event83_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event88_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event93_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event98_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event103_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event108_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event113_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event118_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event123_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event128_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event133_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event138_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event143_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			 ysdk.features.GameplayAPI?.stop();   
		
		});
	},

	async Action_Event151_Act1(runtime, localVars)
	{
		let ArrayNumberlose = [
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"]
		];
		
		let ArrayNumberFindlose = [
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n"]
		];
		
		//-------------------Данные-----------------------------------------
		
		let ArrayFindHoriz = [];//найденные элементы по строке
		let ArrayFindVert = [];//найденные элементы по вертикали
		
		let findNumRow = 0;// переменная для поиска ряд
		let findNumLine = 0;// переменная для поиска строка
		let findNumVar = 0;// переменная для поиска строка
		
		findNumRow = runtime.globalVars.NumRow;// переменная для поиска ряд
		findNumLine = runtime.globalVars.NumLine;// переменная для поиска строка
		
		const ArrayNum= runtime.objects.ArrayNum.getFirstInstance();	
		
		//----------------- Вызов функций -----------------------------------
		
		RecordArrayNumberLose();
		//ShowArrayFindLose();
		FindNumLose();
		
		function ShowArrayFindLose() {
		
		    console.log(ArrayNumberlose);
		    // console.log(ArrayFindVert);
		}
		
		//-------------------------------------------------------------------
		
		/* заполняем массив ArrayNumber,  */
		
		function RecordArrayNumberLose(){
		
		   for (let i = 0; i < ArrayNumberlose.length; i++) {
		  
		        for (let k = 0; k <  ArrayNumberlose[i].length; k++) {
		    
		             ArrayNumberlose[i][k] = ArrayNum.getAt(i,k);        
		   
		         }  
		  
		   }
		   
		   //console.log(ArrayNumber);
		
		}
		//-------------------------------------------------------------------
		
		/* есть ли совпадения номеров */
		
		function FindNumLose(){
		
		let numFindL = 0;
		let ArraNumk = [];
		 for (let i = 0; i < ArrayNumberlose.length; i++) {
		  
		      for (let k = 0; k < ArrayNumberlose[i].length; k++) {	  
						   
		           for(let s = 0; s < ArrayNumberlose.length; s++){ 
				   
			    	let currentNumber = ArrayNumberlose[i][k]; 
					
			         for(let h = 0; h < ArrayNumberlose[s].length; h++){ 
					   
			          if(s != i || h != k){ 
						   
			          if(ArrayNumberlose[s][h] === currentNumber){ 			  
		
						
						   if(ArrayNumberFindlose[s][h] == "n"){
							
						 	ArrayNumberFindlose[s][h] = ArrayNumberlose[s][h];	
						   
						    numFindL +=1;
						  
						  }
			  
					 }				    
					   
					  }	     
					   
			      }	  
			  
		       } 
				 
			 }
					
		}  
		
		
			  
		
		 
		
		 
		 if(numFindL > 0){ 
		     
		   c3_callFunction("CheckLose"); 
		   console.log("CheckLose" +numFindL);
			
			console.log(ArrayNumberFindlose);
		 
		 }else{
		 
		  c3_callFunction("Lose");   
		  
			console.log(ArrayNumberFindlose);
		  
		 }   
		
		}
		
		
		
		//-------------------------------------------------------------------
	},

	async Action_Event158_Act1(runtime, localVars)
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

	async Buttons_Event43_Act2(runtime, localVars)
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

	async Start_Event13_Act3(runtime, localVars)
	{
		 /*console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Дойди До Блока Бесконечности!",
			     	     "attachments": "https://vk.com/app52896396"})
						  .then(data => {
						     console.log(data);});	*/
							 
							 
		  vkBridge.send('VKWebAppShowStoryBox', {
		  background_type: 'image',
		  url : 'https://vk.com/photo-212537939_457239023?rev=1',
		  attachment: {
		    text: 'book',
		    type: 'photo',
		    owner_id: 212537939,
		    id: 457239023
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

	async Start_Event14_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

