


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

	async Action_Event12_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
			
			  ysdk.features.GameplayAPI?.start()   
		
		});
	},

	async Action_Event106_Act1(runtime, localVars)
	{
		let ArrayNumber = [
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "0", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"]
		];
		
		const ArrayCellls= runtime.objects.ArrayCells.getFirstInstance();	
		let ArrayFind = [];
		const NumVar = runtime.globalVars.NumVar;
		
		//-------------------------------------------------------------------
		
		
		FindCells();
		FindShow();
		
		//--------------Поиск совпадений--------------------------------------
		
		/* Поиск по горизонтали*/
		
		function FindCells() {
		
		    for (let i = 0; i < ArrayNumber.length; i++) {
		
		        for (let k = 0; k < ArrayNumber[i].length - 1; k += 2) {
		
		            if (ArrayCellls.getAt(i,k) != "n") {
					
					    /* для четных и равной нулю */
		                if (i == 0 || i % 2 == 0) {
		
		                     if (ArrayCellls.getAt(i,k) === ArrayCellls.getAt(i,k + 2)) {
		
		                         ArrayFind.push(i + "-" + k + "-" + ArrayCellls.getAt(i,k));
		                         ArrayFind.push(i + "-" + (k + 2) + "-" + ArrayCellls.getAt(i,k + 2));
								 
		                     }
					   
					    }
		
		            }
		
		        }
		
		    }
				
		    /* для нечетных и равной нулю */
		    for (let i = 0; i < ArrayNumber.length; i++) {
		
		        for (let k = 1; k < ArrayNumber[i].length - 2; k += 2) {
		
		            if (ArrayCellls.getAt(i,k) != "n") {
		
		                /* для четных и равной нулю */
		                if (i != 0 || i % 2 != 0) {
		
		                    if (ArrayCellls.getAt(i,k) === ArrayCellls.getAt(i,k + 2)) {
		
		                        ArrayFind.push(i + "-" + k + "-" + ArrayCellls.getAt(i,k));
		                        ArrayFind.push(i + "-" + (k + 2) + "-" + ArrayCellls.getAt(i,k + 2));
		                    }
		
		                }
		
		
		            }
		
		        }
		
		    }
			
		    FindCellsVertical();
		
		}
		
		/* Поиск по вертикали*/
		
		function FindCellsVertical() {
		
		    for (let i = 0; i < ArrayNumber.length - 1; i++) {
		
		        for (let k = 1; k < ArrayNumber.length + 2; k++) {
		
		            /*для нечетных рядов*/
		            if (i != 0 || i % 2 != 0) {
		
		                if (ArrayCellls.getAt(i,k) != "n") {
		
		                    if (ArrayCellls.getAt(i,k) === ArrayCellls.getAt(i + 1,k - 1)) {
		
		                        ArrayFind.push(i + "-" + k + "-" + ArrayCellls.getAt(i,k));
		                        ArrayFind.push((i + 1) + "-" + (k - 1) + "-" + ArrayCellls.getAt(i + 1,k - 1));
		
		                    } else if (ArrayCellls.getAt(i,k) === ArrayCellls.getAt(i + 1,k + 1)) {
		
		                        ArrayFind.push(i + "-" + k + "-" +ArrayCellls.getAt(i,k));
		                        ArrayFind.push((i + 1) + "-" + (k + 1) + "-" +ArrayCellls.getAt(i + 1,k + 1));
		
		                    }
		
		                }
		
		            }
		
		        }
		
		    }
			
			
		    for (let i = 0; i < ArrayNumber.length - 1; i++) {
		
		        for (let k = 0; k < ArrayNumber.length + 1; k++) {
		
		            /* для четных и равной нулю */
		            if (i == 0 || i % 2 == 0) {
		
		                if (ArrayCellls.getAt(i,k) != "n") {
		
		                    if (ArrayCellls.getAt(i,k) === ArrayCellls.getAt(i + 1,k + 1)) {
		
		                        ArrayFind.push(i + "-" + k + "-" + ArrayCellls.getAt(i,k));
		                        ArrayFind.push((i + 1) + "-" + (k + 1) + "-" + ArrayCellls.getAt(i + 1,k + 1));
		
		                    }
		
		                }
		
		            }
		
		        }
		
		    }
			
			/* для нечетных рядов проверить спереди-снизу */
		    for (let i = 0; i < ArrayNumber.length - 1; i++) {
		
		        for (let k = 1; k < ArrayNumber.length + 3; k++) {
		
		            /*для нечетных рядов*/
		            if (i == 0 || i % 2 == 0) {
		
		                if (ArrayCellls.getAt(i,k) != "n") {
		
		                    if (ArrayCellls.getAt(i,k) === ArrayCellls.getAt(i+1,k-1)) {
		
		                        ArrayFind.push(i + "-" + k + "-" + ArrayCellls.getAt(i,k));
		                        ArrayFind.push((i + 1) + "-" + (k - 1) + "-" + ArrayCellls.getAt(i+1,k-1));
		
		                    }
		
		                }
		
		            }
		
		        }
		
		    }
		
		}
		//--------------------------------------------------------------------
		
		/* Вывод найденых совпадений */
		
		function FindShow() {
		
		    let curfind_x = 0;
		    let curfind_y = 0;
		  
		    let curfindOne_x, curfindOne_y;  
			
		    let set = new Set(ArrayFind);
		    let setarr=[...set];
		   // console.log(setarr);
			
			if (setarr.length > 0){
		
			    for (let i = 0; i < setarr.length; i++){
				
				     let FindBlocksOne = setarr[i].split('-');
					   
					 curfindOne_x = FindBlocksOne[0];
			         curfindOne_y = FindBlocksOne[1]; 	
					     
					 for(let n = 0; n < NumVar; n++){
					 
					     let fr = runtime.objects.Cells.getAllInstances()[n];	
						 let cur_x = fr.instVars.Line;  		 
					     let cur_y = fr.instVars.Row; 
		                
					     if(+cur_x  === +curfindOne_x  && +cur_y === +curfindOne_y){					
						 
					          fr.instVars.ActFind=1;	
						      				  
					     }	
					 
					 }	
				
				
				}
				
				 c3_callFunction("FindYesCells"); 
				  runtime.globalVars.numCombo += 1;
			
			}else if(setarr.length == 0 && NumVar < 44){
			
			   c3_callFunction("FindNullCells"); 
			   runtime.globalVars.numCombo = 0;
			
			}else if(setarr.length == 0 && NumVar == 44){
			
			   c3_callFunction("Lose"); 
			   runtime.globalVars.numCombo = 0;
			
			}  
		
		}
		
		
	},

	async Action_Event205_Act1(runtime, localVars)
	{
		 ysdk.getLeaderboards()
		  .then(lb => {
		    // Без extraData
		    lb.setLeaderboardScore('Best', runtime.globalVars.RecordScore);
		  });
		
		
		
	},

	async Action_Event210_Act1(runtime, localVars)
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

	async Buttons_Event45_Act2(runtime, localVars)
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

	async Start_Event15_Act3(runtime, localVars)
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

	async Start_Event16_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

