

const scriptsInEvents = {

	async Start_Event24_Act3(runtime, localVars)
	{
		 /*console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Дойди До Блока Бесконечности!",
			     	     "attachments": "https://vk.com/app52896396"})
						  .then(data => {
						     console.log(data);});	*/
							 
							 
		  vkBridge.send('VKWebAppShowStoryBox', {
		  background_type: 'image',
		  url : 'https://vk.com/photo-212537939_457239025',
		  attachment: {
		    text: 'book',
		    type: 'photo',
		    owner_id: 212537939,
		    id: 457239025
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

	async Start_Event25_Act3(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
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

	async Action_Event92_Act1(runtime, localVars)
	{
		let ArrayNumber = [
		    ["0", "0", "5", "2", "2", "2", "2"],
		    ["0", "2", "5", "2", "2", "2", "2"],
		    ["1", "1", "1", "2", "4", "2", "2"],
		    ["1", "1", "1", "1", "4", "2", "2"],
		    ["4", "4", "5", "5", "5", "2", "2"],
		    ["4", "3", "5", "3", "0", "2", "2"],
		    ["4", "4", "5", "5", "0", "2", "2"]
		];
		
		let ArrayNumSimilar = [
		    ["0", "0", "5", "2", "2", "2", "2"],
		    ["0", "2", "5", "2", "2", "2", "2"],
		    ["1", "1", "1", "2", "4", "2", "2"],
		    ["1", "1", "1", "1", "4", "2", "2"],
		    ["4", "4", "5", "5", "5", "2", "2"],
		    ["4", "3", "5", "3", "0", "2", "2"],
		    ["4", "4", "5", "5", "0", "2", "2"]
		];
		/* ----------------------------------------------------------------- */
		
		let NumMin = runtime.globalVars.RndStart; // начальное число
		let NumMax = runtime.globalVars.RndEnd;   // конечное число
		
		let rndNum = 0;
		const ArrayNum = runtime.objects.ArrayNum.getFirstInstance();
		
		SameNumArry();
		DellNumSimilar();
		DellNumSimilarVer();
		SetArrayNum();
		
		//console.log(ArrayNumSimilar);
		/* Функция заполнения массива */
		function SameNumArry() {
		
		    for (let i = 0; i < ArrayNumber.length; i++) {
		
		        for (let j = 0; j < ArrayNumber[i].length; j++) {
		
		            ArrayNumber[i][j] = ArrayNumSimilar[i][j] = Math.floor(Math.random() * ((NumMax ) - NumMin)) + NumMin;
		
		        }
		    }
		
		}
		
		/* Функция ищет и убирает однотипные цифры, если их больше трех по горизонтали*/
		function DellNumSimilar() {
		
		    for (let i = 0; i < ArrayNumber.length; i++) {
		
		        for (let j = 2; j < ArrayNumber[i].length; j++) {
		
		            if (ArrayNumSimilar[i][j] == ArrayNumSimilar[i][j - 1] && ArrayNumSimilar[i][j] == ArrayNumSimilar[i][j - 2]) {
		
		                ArrayNumSimilar[i][j] = RndNumSimilar(+ArrayNumSimilar[i][j]);
		              
		            }
		        }
		    }
		
		}
		
		/* Функция ищет и убирает однотипные цифры, если их больше трех по вертикали*/
		
		function DellNumSimilarVer() {
		
		    for (let i = 2; i < ArrayNumber.length; i++) {
		
		        for (let j = 0; j < ArrayNumber[i].length; j++) {
		
		            if (ArrayNumSimilar[i][j] == ArrayNumSimilar[i - 1][j] && ArrayNumSimilar[i - 2][j] == ArrayNumSimilar[i][j]) {
		
		                ArrayNumSimilar[i][j] = NumMax;
		
		            }
		
		        }
		    }
		
		}
		
		/* функция рандома цифр */
		
		function RndNumSimilar(num) {
		
		    let rndNumA;
		
		    do {   
		
		        rndNumA = Math.floor(Math.random() * (+NumMax  - +NumMin)) + +NumMin;
		
		    } while (+num === +rndNumA);
		
		    return rndNumA;
		}
		
		/* функция заполнения массива уже готовыми числами */
		
		function SetArrayNum(){
		    
		    for (let i = 0; i < ArrayNumber.length; i++) {
		
		        for (let j = 0; j < ArrayNumber[i].length; j++) {
		
		            ArrayNum.setAt(ArrayNumSimilar[i][j], i, j);
		            ///ArrayRnd.setAt(arrAA[i], i, 0);
		        }
		    }
		
		}
		
	},

	async Action_Event96_Act1(runtime, localVars)
	{
		let ArrayNumberF = [
		    ["0", "0", "0", "2", "2", "2", "2"],
		    ["0", "2", "5", "2", "2", "1", "2"],
		    ["1", "1", "1", "2", "4", "2", "1"],
		    ["1", "1", "1", "1", "4", "2", "4"],
		    ["4", "4", "5", "5", "5", "2", "2"],
		    ["4", "3", "5", "3", "0", "2", "3"],
		    ["4", "4", "5", "5", "0", "2", "2"]
		];
		let ArrayNumberFind = [
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"]
		];
		
		//-------------------Данные-----------------------------------------
		const ArrayNumF= runtime.objects.ArrayNum.getFirstInstance();	
		let _FindNum = 0; // если мы нашли совпадения
		
		RecordArrayNumber();
		
		console.log(ArrayNumberF);
		
		FindHor();
		
		//console.log(ArrayNumberFind);
		
		
		/* заполняем массив ArrayNumber,  */
		
		function RecordArrayNumber(){
		
		   for (let i = 0; i <  ArrayNumberF.length; i++) {
		  
		        for (let k = 0; k < ArrayNumberF[i].length; k++) {
		    
		            ArrayNumberF[i][k] = ArrayNumF.getAt(i,k);   
		   
		         }  
		  
		   }  
		
		}
		
		/* Поиск по горизонтали*/
		
		function FindHor() {
		
		    CliningArrayNumberFind();
		
		    for (let i = 0; i < ArrayNumberF.length; i++) {
		
		        for (let k = 0; k < ArrayNumberF[i].length - 2; k++) {
		
		            if (ArrayNumberF[i][k] === ArrayNumberF[i][k + 1] && ArrayNumberF[i][k] === ArrayNumberF[i][k + 2] && ArrayNumberF[i][k] != "n") {
		                
		                ArrayNumberFind[i][k] = ArrayNumberF[i][k];
		                ArrayNumberFind[i][k + 1] = ArrayNumberF[i][k + 1];
		                ArrayNumberFind[i][k + 2] = ArrayNumberF[i][k + 2];
		
		                _FindNum += 1;   
		            }
		
		        }
		
		    }
		
		    FindVer();
		
		}
		
		/* Поиск по вертикали */
		function FindVer() {  
		
		    for (let i = 0; i < ArrayNumberF.length - 2; i++) {
		
		        for (let k = 0; k < ArrayNumberF[i].length; k++) {
		
		            if (ArrayNumberF[i][k] === ArrayNumberF[i + 1][k] && ArrayNumberF[i][k] === ArrayNumberF[i + 2][k] && ArrayNumberF[i][k] != "n") {
		
		                ArrayNumberFind[i][k] = ArrayNumberF[i][k];
		                ArrayNumberFind[i + 1][k] = ArrayNumberF[i + 1][k];
		                ArrayNumberFind[i + 2][k] = ArrayNumberF[i + 2][k];
		
		                _FindNum += 1;    
		            }
		
		        }
		    }
		
		    ChekingFindNum();
		
		}
		
		/* функция очистки массива ArrayNumberFind*/
		
		function CliningArrayNumberFind() {
		
		    _FindNum = 0;
		
		    for (let i = 0; i < ArrayNumberFind.length; i++) {
		
		        for (let k = 0; k < ArrayNumberFind[i].length - 2; k++) {
		
		            ArrayNumberFind[i][k] = "n";
		
		        }
		
		    }
		
		}
		
		/* функция проверки найдены совпадения или нет */
		
		function ChekingFindNum(){ 
		
		   if(_FindNum > 0){
		      
		      AssignNumAct();
		
		   } else if (_FindNum == 0){
		
		      let NumVolA = runtime.globalVars.BeBlocks; // кол-во блоков на поле
		      
		
		      if(NumVolA < 49){
		
		         c3_callFunction("BloksBorn");  
		
		      }else if(NumVolA == 49) {
		       
		       runtime.globalVars.numCombo = 0; 
		       c3_callFunction("EndDown");  
		   
		      }
		
		   }
		  
		}
		
		/* присваиваем значения ActFind = true Номерам на поле */
		
		function AssignNumAct(){
		
		  runtime.globalVars.ScorePlus = _FindNum; 
		  runtime.globalVars.numCombo += 1;
		  
		  let NumVol = runtime.globalVars.BeBlocks; // кол-во блоков на поле
		
		  for (let i = 0; i <  ArrayNumberFind.length; i++) {
		  
		       for (let k = 0; k < ArrayNumberFind[i].length; k++){
			   
			        if (ArrayNumberFind[i][k] != "n"){
					
					     for(let n = 0; n < NumVol; n++){
					 
					          let fr = runtime.objects.Blocks.getAllInstances()[n];	
						      let cur_x = fr.instVars.Line;  		 
					          let cur_y = fr.instVars.Row;                     
							  
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

	async Action_Event122_Act1(runtime, localVars)
	{
		let ArrayNumbers = [
		    ["0", "0", "0", "2", "2", "2", "2"],
		    ["0", "2", "5", "2", "2", "1", "2"],
		    ["1", "1", "1", "2", "4", "2", "1"],
		    ["1", "1", "1", "1", "4", "2", "4"],
		    ["4", "4", "5", "5", "5", "2", "2"],
		    ["4", "3", "5", "3", "0", "2", "3"],
		    ["4", "4", "5", "5", "0", "2", "2"]
		];
		
		let ArrayNumberFindsA = [
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"]
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
		    //console.log("dsfY");
		    console.log(ArrayNumbers);
			
		}
		//-------------------------------------------------------------------
		
		/* поиск n элементов в массиве */
		
		function FindNumN() {
		
		  // console.log("dsfY" );
		 
		   for (let i = 0; i < 7; i++) {
		   
		        findN = 0;
		
		        for (let k = 6; k >= 0; k--) {				  
				   		   
				     if (ArrayNumbers[k][i] == "n") {
					 
					     findN += 1;				 
					 }
					 
				     if (ArrayNumbers[k][i] == "n") {
					 
					    // findN += 1;
		                for (let j = k; j >= 0; j--){
		
		                    for(let n = 0; n < NumVar; n++){
		
					            let frs = runtime.objects.Blocks.getAllInstances()[n];	
						        let cur_x = frs.instVars.Line;  		 
					            let cur_y = frs.instVars.Row; 
		                          
								if(+cur_x  === j   && +cur_y === i){	
						         
					                frs.instVars.ActDown=1;	
		                            frs.instVars.NumDown = findN;
		                           // frs.instVars.CurY += frs.instVars.CurY * findN;
						       				  
					            }                          
		                    } 
		                }				 
					 }			 
			   }		   
		  }
		  
		  c3_callFunction("DownNum"); 
		
		}
		
	},

	async Action_Event134_Act1(runtime, localVars)
	{
		let ArrayNumberBorn = [
		    ["1", "1", "n", "n", "n", "0", "2"],
		    ["n", "2", "n", "2", "2", "1", "2"],
		    ["n", "5", "n", "2", "1", "n", "1"],
		    ["n", "1", "n", "1", "4", "n", "4"],
		    ["4", "4", "2", "n", "1", "0", "2"],
		    ["n", "2", "2", "n", "0", "2", "3"],
		    ["4", "4", "5", "0", "0", "2", "2"]
		];
		let ArrayNumberFindBorn = [
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n"]
		];
		
		//-------------------Данные-----------------------------------------
		
		let NumMin = runtime.globalVars.RndStart; // начальное число
		let NumMax = runtime.globalVars.RndEnd;   // конечное число
		
		let findN = 0;
		let crX = 0;
		
		const ArrayNumBorn = runtime.objects.ArrayNum.getFirstInstance();
		
		
		RecordArrayNumbersBorn();
		CliningArrayNumberFindBorn();
		SameNumArryBorn();
		FindNhor();
		AssignmentNum();
		
		console.log(ArrayNumberFindBorn);
		//-------------------------------------------------------------------
		
		/* заполняем массив ArrayNumber,  */
		
		function RecordArrayNumbersBorn(){
		
		   for (let i = 0; i <  ArrayNumberBorn.length; i++) {
		  
		        for (let k = 0; k < ArrayNumberBorn[i].length; k++) {
		    
		            ArrayNumberBorn[i][k] = ArrayNumBorn.getAt(i,k);        
		   
		         }    
		   }
		   
		  // console.log(ArrayNumbers);
		
		}
		
		/* функция очистки массива ArrayNumberFind*/
		
		function CliningArrayNumberFindBorn() {    
		
		    for (let i = 0; i < ArrayNumberFindBorn.length; i++) {
		
		        for (let k = 0; k < ArrayNumberFindBorn[i].length; k++) {
		
		           ArrayNumberFindBorn[i][k] = "n";
		
		        }
		
		    }
		
		}
		function SameNumArryBorn() {
		
		    for (let i = 0; i < ArrayNumberBorn.length; i++) {
		
		        for (let j = 0; j < ArrayNumberBorn[i].length; j++) {
		
		            if (ArrayNumberBorn[i][j] == "n") {
		
		                ArrayNumberFindBorn[i][j] = ArrayNumberFindBorn[i][j] = Math.floor(Math.random() * ((NumMax - 1) - NumMin)) + NumMin;
		
		            }
		        }
		    }
		
		}
		
		/* функция поиска по горизонтали */
		
		function FindNhor() {
		
		    for (let i = 0; i < ArrayNumberBorn.length; i++) {
		
		        for (let j = 2; j < ArrayNumberBorn[i].length; j++) {
		
		            // если только во втором массиве
		            if (ArrayNumberFindBorn[i][j] != "n" && ArrayNumberFindBorn[i][j - 1] != "n" && ArrayNumberFindBorn[i][j - 2] != "n") {
		
		                if (ArrayNumberFindBorn[i][j] === ArrayNumberFindBorn[i][j - 1] && ArrayNumberFindBorn[i][j] === ArrayNumberFindBorn[i][j - 2]) {
		
		                    ArrayNumberFindBorn[i][j] = RndNumSimilar(+ArrayNumberFindBorn[i][j]);
		
		                }
		            }
		        }
		    }
		
		    FindNumHorOne();
		}
		/* функция поиска по вертикали */
		function FindNVer() {
		
		    for (let i = 2; i < ArrayNumberBorn.length; i++) {
		
		        for (let j = 0; j < ArrayNumberBorn[i].length; j++) {
		
		            if (ArrayNumberFindBorn[i][j] != "n" && ArrayNumberFindBorn[i - 1][j] != "n" && ArrayNumberFindBorn[i - 2][j] != "n") {
		
		                if (ArrayNumberFindBorn[i][j] == ArrayNumberFindBorn[i - 1][j] && ArrayNumberFindBorn[i - 2][j] == ArrayNumberFindBorn[i][j]) {
		
		                       ArrayNumberFindBorn[i][j] = NumMax;
		
		                }
		            }
		        }
		    }
		    FindNVerTwo();
		}
		
		/*++ функция поиска по горизонтали и сравнение с уже существующими цифрами в массиве ArrayNumberBorn ++*/
		
		/* слева на право, если первая цифра, а вторая две n */
		
		function FindNumHorOne() {
		
		    for (let i = 0; i < ArrayNumberBorn.length; i++) {
		
		        for (let j = 2; j < ArrayNumberBorn[i].length; j++) {
		
		            if (ArrayNumberFindBorn[i][j] != "n" && ArrayNumberFindBorn[i][j - 1] == "n" && ArrayNumberFindBorn[i][j - 2] == "n") {
		
		                if (+ArrayNumberFindBorn[i][j] === +ArrayNumberBorn[i][j - 1] && +ArrayNumberFindBorn[i][j] === +ArrayNumberBorn[i][j - 2]) {
		
		                  //  console.log("ArrayNumberFindBorn");
		                    ArrayNumberFindBorn[i][j] = RndNumSimilar(+ArrayNumberFindBorn[i][j]);
		
		                }
		            }
		        }
		    }
		
		    FindNumHorTwo();
		}
		
		/* слева на право, если первая цифра, а вторая n и перед то же n */
		function FindNumHorTwo() {
		
		    for (let i = 0; i < ArrayNumberBorn.length; i++) {
		
		        for (let j = 1; j < ArrayNumberBorn[i].length - 1; j++) {
		
		            if (ArrayNumberFindBorn[i][j] != "n" && ArrayNumberFindBorn[i][j + 1] == "n" && ArrayNumberFindBorn[i][j - 1] == "n") {
		
		                if (+ArrayNumberFindBorn[i][j] === +ArrayNumberBorn[i][j + 1] && +ArrayNumberFindBorn[i][j] === +ArrayNumberBorn[i][j - 1]) {
		
		                    ArrayNumberFindBorn[i][j] = RndNumSimilar(+ArrayNumberFindBorn[i][j]);
		                   // console.log("FindNumHorTwo" + ArrayNumberFindBorn[i][j]);
		
		                }
		            }
		        }
		    }
		
		    FindNumHorThree();
		}
		
		/* если n в первом ряду */
		function FindNumHorThree() {
		
		    for (let i = 0; i < ArrayNumberBorn.length; i++) {
		
		        for (let j = 0; j < 1; j++) {
		
		            if (ArrayNumberFindBorn[i][j] != "n" && ArrayNumberFindBorn[i][j + 1] == "n" && ArrayNumberFindBorn[i][j + 2] == "n") {
		
		                if (+ArrayNumberFindBorn[i][j] === +ArrayNumberBorn[i][j + 1] && +ArrayNumberFindBorn[i][j] === +ArrayNumberBorn[i][j + 2]) {
		
		                    ArrayNumberFindBorn[i][j] = RndNumSimilar(+ArrayNumberFindBorn[i][j]);
		                   // console.log("FindNumHorThree" + ArrayNumberFindBorn[i][j]);
		
		                }
		            }
		        }
		    }
		
		    FindNVer();
		}
		
		/* По вертикали, сравниваем имеющееся число и с созданным */
		function FindNVerTwo() {
		
		    for (let i = 4; i >= 0; i--) {
		
		        for (let j = 6; j >= 0; j--) {
		
		            if (ArrayNumberFindBorn[i][j] != "n" && ArrayNumberFindBorn[i + 1][j] != "n" && ArrayNumberFindBorn[i + 2][j] != "n") {
		
		                if (ArrayNumberFindBorn[i][j] == ArrayNumberFindBorn[i + 1][j] && ArrayNumberFindBorn[i + 2][j] == ArrayNumberFindBorn[i][j]) {                  
		                
		                    ArrayNumberFindBorn[i][j] = NumMax;
		
		                   // console.log("FindNVerTwo = " + ArrayNumberFindBorn[i][j]);
		                }
		            }
		
		        }
		    }
		
		  
		}
		/* функция рандома цифр */
		
		function RndNumSimilar(num) {
		
		    let rndNumA;
		
		    do {
		
		        rndNumA = Math.floor(Math.random() * (+NumMax - +NumMin)) + +NumMin;
		
		    } while (+num == +rndNumA);
		
		   // console.log("rndNum " + rndNumA);
		
		    return rndNumA;
		}
		
		/* функция присвоения блокам значений */
		function AssignmentNum(){
		
		    let ActcrX = false;
		  
		    crX = 0;
		
		    for (let i = 6; i >= 0; i--) {
		        
		        findN = 0;  
		        ActcrX = true;      
		
		        for (let j = 0; j < 7; j++) {          
		           
		            if (ArrayNumberFindBorn[i][j] != "n") {
		                
		                if(ActcrX == true){
		
		                    ActcrX = false;
		                    crX +=1;   
		                }
		 
		              //  console.log( "i = " + crX + "j = " + j );             
		                BornBloks(j, crX, ArrayNumberFindBorn[i][j], i , j);
		                findN += 1;
		            }
		
		        }
				   
		    }
		
		   c3_callFunction("NextDownBornBlock"); 
		}
		
		/* функция создания блоков */
		function BornBloks(crX, crY, NumVar, Line, Row){
		 
		  let ArrayX = 90;// + 197
		  let ArrayY = 510;// + 198  
		
		  runtime.globalVars.CurX = +ArrayX + (+crX * 150);
		  runtime.globalVars.CurY =  +ArrayY - (+crY * 150);  
		  
		  runtime.globalVars.NumVarBlock = NumVar; 
		
		  runtime.globalVars.LineBlocks = Line;  
		  runtime.globalVars.RowBlocks = Row; 
		  //console.log("CurX = " + runtime.globalVars.CurX );
		  //console.log("CurY = " + runtime.globalVars.CurY );
		
		  c3_callFunction("BornNumDown"); 
		
		}
	},

	async Action_Event157_Act1(runtime, localVars)
	{
		 ysdk.getLeaderboards()
		  .then(lb => {
		    // Без extraData
		    lb.setLeaderboardScore('Best', runtime.globalVars.RecordScore);
		  });
		
		
		
	},

	async Action_Event216_Act1(runtime, localVars)
	{

	},

	async Action_Event218_Act1(runtime, localVars)
	{

	},

	async Action_Event219_Act1(runtime, localVars)
	{

	},

	async Buttons_Event41_Act1(runtime, localVars)
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

	async Action_Event209_Act3(runtime, localVars)
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
