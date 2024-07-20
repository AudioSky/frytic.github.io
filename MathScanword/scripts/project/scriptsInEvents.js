


const scriptsInEvents = {

	async Action_Event1_Act1(runtime, localVars)
	{
		vkBridge.send('VKWebAppShowBannerAd', {
		
		  banner_location: 'top',
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

	async Action_Event233_Act1(runtime, localVars)
	{
		let ArrayNumber = [
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n","n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
		    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"]
		];
		
		let ArrayFind=[]; 
		let ArrayMathVar = [];
		
		let ArrayFilterNum=[];
		let uniqArray = [];
		let df = [];
		let ArrayTransl = [];
		let ArrayTranslMax = [];
		let ArraySing = ["+", "-", "*", "/"];
		
		let minSing = 0;
		let maxSing = runtime.globalVars.maxSing;
		let numOne = 0, numTwo = 0, sing = "", numVar = "";
		let step = 0;
		let varOne = 0, varSing = "", varTwo = 0;
		
		const min = runtime.globalVars.minRandom;
		const max=runtime.globalVars.maxRandom;
		const stepSing=runtime.globalVars.stepSing;
		const ArrayNum = runtime.objects.ArrayNumbers.getFirstInstance();
		let stepSingMultip = runtime.globalVars.stepSingMultip;
		let multiplyMin = runtime.globalVars.multiplyMin;
		let multiplyMax = runtime.globalVars.multiplyMax;
		let divMin = runtime.globalVars.divMin; 
		let divMax = runtime.globalVars.divMах;
		
		let varDelNumOne = 0;
		let varDelNumTwo = 0;
		let varDelMumSing = "";
		
		cellZapolneny();
		num();				  
		numTransleat();
		AppVar();
		
		function cellZapolneny(){
		
		 const CellAll = runtime.globalVars.CellAll;
		
		  for(let n=0; n < CellAll; n++){	
					
			let Cell = runtime.objects.Cell.getAllInstances()[n];			 	
		    let cellRow = Cell.instVars.Row; 
			let cellCol = Cell.instVars.Col; 
			let cellMath = Cell.instVars.Math; 	
			
			  for (let  i=0; i < ArrayNumber.length; i++){
			
			//   ArrayFind[i] = new Array(5);
			   
			     for (let j=0; j < ArrayNumber[i].length; j++){
				 		   
			          if(i == cellRow && j == cellCol){
			    
			             ArrayNumber[j][i] =  cellMath;
		
			          }  
				 }
			  }
			
		  } 
		
		
		//console.log(cellRow);
		
		//console.log(ArrayNumber);
		
		}
		
		//перезапись массива из мат. вырожений и замена числен на букву f
		function num() {
		
		    ArrayMathVar = [];
		
		    for (let i = 0; i < ArrayNumber.length; i++) {
		
		        ArrayMathVar[i] = new Array(0);
		
		        for (let j = 0; j < ArrayNumber[i].length; j++) {
		
		            if (ArrayNumber[i][j] != "n") {
		
		                ArrayMathVar[i][j] = "f";
		
		            } else {
		
		                ArrayMathVar[i][j] = "n";
		
		            }//end if(ArrayNumber[i][j] !="n")                            
		
		        }//end   for (let j=0; j < ArrayNumber[i].length; j++)
		
		    }//end  for (let i=0; i < ArrayNumber.length; i++)
		
		   //console.log( ArrayMathVar );
		
		}
		
		//CC- заполнение словоря 
		function numTransleat() {
		
		    ArrayTransl = [];
		    ArrayTranslMax = [];
		    let ArrayRan = [];
		    let varOne, varTwo, varSing, numVar, step, stepmax;
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        varOne = varTwo = numVar = 0;
		        varSing = "";
		        step = stepmax = 0;
		        step = min;
		        stepmax = multiplyMin;
		
		        for (let j = min; j < (max + 1); j++) {
		
		            if (i != 2 && i != 3) {
		
		                for (let s = min; s < (max + 1); s++) {
		
		                    varOne = s;
		                    varTwo = step;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRan[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTransl.push(ArrayRan[j]);
		
		                    }
		
		                }
		
		                step++;
		
		            }
		
		        }//end for (let i=minSing; i < maxSing+1; i++)  
		
		        if (i == 2) {
		
		            for (let j = min; j < (max + 1); j++) {
		
		                for (let k = multiplyMin; k < multiplyMax + 1; k++) {
		
		                    varOne = j;
		                    varTwo = k;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRan[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTransl.push(ArrayRan[j]);
		
		                    }
		
		                }
		
		                for (let k = multiplyMin; k < multiplyMax + 1; k++) {
		
		                    varOne = k;
		                    varTwo = j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRan[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTransl.push(ArrayRan[j]);
		
		                    }
		
		                }
		
		            }
		
		        }//end if (i == 2)
		
		        if (i == 3) {
		
		            for (let j = min; j < (max + 1); j++) {
		
		                for (let k = divMin; k < divMax; k++) {
		
		                    varOne = j;
		                    varTwo = k;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRan[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTransl.push(ArrayRan[j]);
		
		                    }
		
		                }
		
		            }
		
		        }
		
		    }//end for (let i=minSing; i < maxSing+1; i++)
		
		    console.log(ArrayTransl);
		
		}
		    
		// заполнение массива по горизонтали
		function AppVar() {
		
		    for (let i = 0; i < ArrayMathVar.length; i++) {
		
		        for (let j = 0; j < ArrayMathVar[i].length - 4; j++) {
		
		            if (i >= 0 && i < 2) {
		
		                if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f"
		                    && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f" && ArrayMathVar[i][j + 4] == "f") {
		
		                    let radNum = getRandomNumber(0, ArrayTransl.length);
		                    const str = ArrayTransl[radNum];
		                    let fr = Array.from(str[0]);
		                    let fgss = str.split(",");                   
		
		                    for (let s = 0; s < 5; s++) {
		
		                        ArrayMathVar[i][j + s] = fgss[s];
		
		                        if (s == 1 && fgss[1] == "+" || s == 1 && fgss[1] == "*") {
		
		                            varDelNumOne = fgss[2];
		                            varDelNumTwo = fgss[0];
		                            varDelMumSing = fgss[1];
		
		                        }
		
		                    } //end for(let s=0; s<5; s++)  
		
		                    delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);                 
				
						    ArrayTransl.splice(radNum, 1);  
							
						    ReadNumVer(i, j);				 
						  
		                }else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "n") {   
		
		                    if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i + 1][j] == "f"
		                        && ArrayMathVar[i + 2][j] == "f" && ArrayMathVar[i + 3][j] == "f" && ArrayMathVar[i + 4][j] == "f") {
		
		                        let radNum = getRandomNumber(0, ArrayTransl.length);
		                        const str = ArrayTransl[radNum];
		                        let fgss = str.split(",");                 
		
		                         for (let s = 0; s < 5; s++) {
		
		                            ArrayMathVar[i + s][j] = fgss[s];
		
		                            if (s == 1 && fgss[1] == "+" || s == 1 && fgss[1] == "*") {
		
		                                varDelNumOne = fgss[2];
		                                varDelNumTwo = fgss[0];
		                                varDelMumSing = fgss[1];
		
		                            }
		
		                        } //end for(let s=0; s<5; s++)   
		
		                        delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);
								
		                          ArrayTransl.splice(radNum, 1);
		                    }
		                    
		                } 
		
		                if (j == 6) {
		
		                    for (let k = ArrayNumber.length - 4; k < ArrayNumber.length; k++) {
		
		                        varOne = 0;
		                        varSing = "";
		                        varTwo = 0;
		                        let stepj = 0;
		
		                        if ((ArrayMathVar[i][k] == "f")
		                            && (ArrayMathVar[i + 1][k] == "f") && (ArrayMathVar[i + 2][k] == "f")
		                            && (ArrayMathVar[i + 3][k] == "f") && (ArrayMathVar[i + 4][k] == "f")) {
		
		                            let radNum = getRandomNumber(0, ArrayTransl.length);
		                            const str = ArrayTransl[radNum];
		                            let fr = Array.from(str[0]);
		                            let fgss = str.split(",");
		                            
		                            for (let s = 0; s < 5; s++) {
		
		                                ArrayMathVar[i + s][k] = fgss[s];
		
		                                if (s == 1 && fgss[1] == "+" || s == 1 && fgss[1] == "*") {
		
		                                    varDelNumOne = fgss[2];
		                                    varDelNumTwo = fgss[0];
		                                    varDelMumSing = fgss[1];
		        
		                                }
		
		                            } //end for(let s=0; s<5; s++)   
		
		                            delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);
									
		                              ArrayTransl.splice(radNum, 1);
		
		                        }//end if( (ArrayMathVar[varI][varJ] !="f" && ArrayMathVar[varI][varJ] !="n")
		
		                    }
		
		                }
		
		            }//end  if (i == 0)    
		
		            if (i > 1 && i <= 7) {
		
		                if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f"
		                    && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f" && ArrayMathVar[i][j + 4] == "f") {
		
		                    let radNum = getRandomNumber(0, ArrayTransl.length);
		                    const str = ArrayTransl[radNum];
		                    let fgss = str.split(",");                    
		                    for (let s = 0; s < 5; s++) {
		
		                        ArrayMathVar[i][j + s] = fgss[s];
		
		                        if (s == 1 && fgss[1] == "+" || s == 1 && fgss[1] == "*") {
		
		                            varDelNumOne = fgss[2];
		                            varDelNumTwo = fgss[0];
		                            varDelMumSing = fgss[1];
		
		                        }
		
		                    } //end for(let s=0; s<5; s++) 
		
		                    delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);
							  ArrayTransl.splice(radNum, 1);
		
		                    // если первый элемент число 
		                } else if ((ArrayMathVar[i][j] != "f" && ArrayMathVar[i][j] != "n" && ArrayMathVar[i][j] != "+"
		                    && ArrayMathVar[i][j] != "-" && ArrayMathVar[i][j] != "*" && ArrayMathVar[i][j] != "/") && ArrayMathVar[i][j + 1] == "f"
		                    && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f"
		                    && ArrayMathVar[i][j + 4] == "f") {
		
		                    let _sVarOne = ArrayMathVar[i][j];
		                    let _VarOneTwo = _sVarOne * 2;
		
		                    addHorTwo(i, j, _sVarOne, _VarOneTwo);
		
		                } else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f"
		                    && (ArrayMathVar[i][j + 2] != "f" && ArrayMathVar[i][j + 2] != "n" && ArrayMathVar[i][j + 2] != "+"
		                        && ArrayMathVar[i][j + 2] != "-" && ArrayMathVar[i][j + 2] != "*" && ArrayMathVar[i][j + 2] != "/") && ArrayMathVar[i][j + 3] == "f"
		                    && ArrayMathVar[i][j + 4] == "f") {
		
		                     let _sVarOne = 1;
		                     let _VarOneTwo = ArrayMathVar[i][j + 2];
		                    let _varNum;
		                    _varNum = ArrayMathVar[i][j + 2]
		                    let step = 0;
		                    step = 2;
		
		                    addHorThree(i, j, _sVarOne, _VarOneTwo, step, _varNum);
		
		
		                } else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f" && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f"
		                    && (ArrayMathVar[i][j + 4] != "f" && ArrayMathVar[i][j + 4] != "n" && ArrayMathVar[i][j + 4] != "+"
		                        && ArrayMathVar[i][j + 4] != "-" && ArrayMathVar[i][j + 4] != "*" && ArrayMathVar[i][j + 4] != "/")) {
		
		                     let _sVarOne = 1;
		                     let _VarOneTwo = ArrayMathVar[i][j + 4];
		                    let _varNum;
		                    _varNum = ArrayMathVar[i][j + 4]
		                    let step = 0;
		                    step = 4;
		
		                    aadHorRavno(i, j, _sVarOne, _VarOneTwo, step, _varNum);
		
		
		                } else if ((ArrayMathVar[i][j] != "f" && ArrayMathVar[i][j] != "n" && ArrayMathVar[i][j] != "+" && ArrayMathVar[i][j] != "-"
		                    && ArrayMathVar[i][j] != "*" && ArrayMathVar[i][j] != "/") && ArrayMathVar[i][j + 1] == "f" && (ArrayMathVar[i][j + 2] != "f" && ArrayMathVar[i][j + 2] != "n"
		                        && ArrayMathVar[i][j + 2] != "+" && ArrayMathVar[i][j + 2] != "-" && ArrayMathVar[i][j + 2] != "*" && ArrayMathVar[i][j + 2] != "/")
		                    && ArrayMathVar[i][j + 3] == "f" && ArrayMathVar[i][j + 4] == "f") {
		
		                    let varOneNum = ArrayMathVar[i][j];
		                    let varTwoNum = ArrayMathVar[i][j + 2];
		
		                    addHorOneTwo(varOneNum, varTwoNum, i, j);
		
		
		                } else if ((ArrayMathVar[i][j] != "f" && ArrayMathVar[i][j] != "n" && ArrayMathVar[i][j] != "+" && ArrayMathVar[i][j] != "-"
		                    && ArrayMathVar[i][j] != "*" && ArrayMathVar[i][j] != "/") && ArrayMathVar[i][j + 1] == "f" && ArrayMathVar[i][j + 2] == "f"
		                    && ArrayMathVar[i][j + 3] == "f" && (ArrayMathVar[i][j + 4] != "f" && ArrayMathVar[i][j + 4] != "n" && ArrayMathVar[i][j + 4] != "+"
		                        && ArrayMathVar[i][j + 4] != "-" && ArrayMathVar[i][j + 4] != "*" && ArrayMathVar[i][j + 4] != "/")) {
		
		                    let varOneNum = ArrayMathVar[i][j];
		                    let varTwoNum = ArrayMathVar[i][j + 4];
		
		                    addHorNumsRavenstvo(varOneNum, varTwoNum, i, j);
		
		
		                } else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f" && (ArrayMathVar[i][j + 2] != "f" && ArrayMathVar[i][j + 2] != "n"
		                    && ArrayMathVar[i][j + 2] != "+" && ArrayMathVar[i][j + 2] != "-" && ArrayMathVar[i][j + 2] != "*" && ArrayMathVar[i][j + 2] != "/")
		                    && ArrayMathVar[i][j + 3] == "f" && (ArrayMathVar[i][j + 4] != "f" && ArrayMathVar[i][j + 4] != "n" && ArrayMathVar[i][j + 4] != "+"
		                        && ArrayMathVar[i][j + 4] != "-" && ArrayMathVar[i][j + 4] != "*" && ArrayMathVar[i][j + 4] != "/")) {
		
		                    let varOneNum = ArrayMathVar[i][j + 2];
		                    let varTwoNum = ArrayMathVar[i][j + 4];
		
		                    addHornRavTwo(varOneNum, varTwoNum, i, j);
		
		                }
		
		                if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f"
		                    && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f" && ArrayMathVar[i][j + 4] == "f") {
		
		                    ReadNumVer(i, j);
		
		                } else if ((ArrayMathVar[i][j] != "f" && ArrayMathVar[i][j] != "n") && (ArrayMathVar[i][j + 1] != "f" && ArrayMathVar[i][j + 1] != "n")
		                    && (ArrayMathVar[i][j + 2] != "f" && ArrayMathVar[i][j + 2] != "n") && (ArrayMathVar[i][j + 3] != "f" && ArrayMathVar[i][j + 3] != "n")
		                    && (ArrayMathVar[i][j + 4] != "f" && ArrayMathVar[i][j + 4] != "n")) {
		
		                    ReadNumVer(i, j);
							 
		
		                } else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "n" ) {    
		
		                    if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i+1][j ] == "f"
		                        && ArrayMathVar[i+2][j] == "f" && ArrayMathVar[i+3][j] == "f" && ArrayMathVar[i+4][j] == "f") {
		    
		                        let radNum = getRandomNumber(0, ArrayTransl.length);
		                        const str = ArrayTransl[radNum];
		                        let fgss = str.split(",");
		                      
		                         for (let s = 0; s < 5; s++) {
		
		                            ArrayMathVar[i + s][j] = fgss[s];
		
		                            if (s == 1 && fgss[1] == "+" || s == 1 && fgss[1] == "*") {
		
		                                varDelNumOne = fgss[2];
		                                varDelNumTwo = fgss[0];
		                                varDelMumSing = fgss[1];
		    
		                            }
		
		                        } //end for(let s=0; s<5; s++)  
		
		                        delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing); 
		                        
								ArrayTransl.splice(radNum, 1);
		                    }  
		
		                }
		
		                if (j == 6) {
		
		                    for (let k = ArrayNumber.length - 4; k < ArrayNumber.length; k++) {
		
		                        varOne = 0;
		                        varSing = "";
		                        varTwo = 0;
		
		                        if ((ArrayMathVar[i][k] == "f")
		                            && (ArrayMathVar[i + 1][k] == "f") && (ArrayMathVar[i + 2][k] == "f")
		                            && (ArrayMathVar[i + 3][k] == "f") && (ArrayMathVar[i + 4][k] == "f")) {
		
		                            let radNum = getRandomNumber(0, ArrayTransl.length);
		                            const str = ArrayTransl[radNum];
		                            let fr = Array.from(str[0]);
		                            let fgss = str.split(",");                            
		                           
		                            for (let s = 0; s < 5; s++) {
		
		                                ArrayMathVar[i + s][k] = fgss[s];
		
		                                if (s == 1 && fgss[1] == "+" || s == 1 && fgss[1] == "*") {
		
		                                    varDelNumOne = fgss[2];
		                                    varDelNumTwo = fgss[0];
		                                    varDelMumSing = fgss[1];
		
		                                }
		
		                            } //end for(let s=0; s<5; s++)   
		
		                            delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);  
									
									ArrayTransl.splice(radNum, 1);
		
		                        }//end if( (ArrayMathVar[varI][varJ] !="f" && ArrayMathVar[varI][varJ] !="n")
		
		                    }
		
		                }
		
		            }//end  if (i > 0 && i <= 7)
		
		            if (i > 7) {
		                if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f"
		                    && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f" && ArrayMathVar[i][j + 4] == "f") {
		
		                    let radNum = getRandomNumber(0, ArrayTransl.length);
		                    const str = ArrayTransl[radNum];
		                    let fgss = str.split(",");                    
		
		                    for (let s = 0; s < 5; s++) {
		
		                        ArrayMathVar[i][j + s] = fgss[s];
		
		                        if (s == 1 && fgss[1] == "+" || s == 1 && fgss[1] == "*") {
		
		                            varDelNumOne = fgss[2];
		                            varDelNumTwo = fgss[0];
		                            varDelMumSing = fgss[1];
		
		                        }
		
		                    } //end for(let s=0; s<5; s++)  
		
		                    delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);  
							
							ArrayTransl.splice(radNum, 1);
		
		                    // если первый элемент число 
		                } else if ((ArrayMathVar[i][j] != "f" && ArrayMathVar[i][j] != "n" && ArrayMathVar[i][j] != "+"
		                    && ArrayMathVar[i][j] != "-" && ArrayMathVar[i][j] != "*" && ArrayMathVar[i][j] != "/") && ArrayMathVar[i][j + 1] == "f"
		                    && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f"
		                    && ArrayMathVar[i][j + 4] == "f") {
		
		                    let _sVarOne = ArrayMathVar[i][j];
		                    let _VarOneTwo = _sVarOne * 2;
		
		                    addHorTwo(i, j, _sVarOne, _VarOneTwo);
		
		                } else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f"
		                    && (ArrayMathVar[i][j + 2] != "f" && ArrayMathVar[i][j + 2] != "n" && ArrayMathVar[i][j + 2] != "+"
		                        && ArrayMathVar[i][j + 2] != "-" && ArrayMathVar[i][j + 2] != "*" && ArrayMathVar[i][j + 2] != "/") && ArrayMathVar[i][j + 3] == "f"
		                    && ArrayMathVar[i][j + 4] == "f") {
		
		                    let _sVarOne = 1;
		                    let _VarOneTwo = ArrayMathVar[i][j + 2];
		                    let _varNum;
		                    _varNum = ArrayMathVar[i][j + 2]
		                    let step = 0;
		                    step = 2;
		
		                    addHorThree(i, j, _sVarOne, _VarOneTwo, step, _varNum);
		
		                } else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f" && ArrayMathVar[i][j + 2] == "f" && ArrayMathVar[i][j + 3] == "f"
		                    && (ArrayMathVar[i][j + 4] != "f" && ArrayMathVar[i][j + 4] != "n" && ArrayMathVar[i][j + 4] != "+"
		                        && ArrayMathVar[i][j + 4] != "-" && ArrayMathVar[i][j + 4] != "*" && ArrayMathVar[i][j + 4] != "/")) {
		
		                    let _sVarOne = 1;
		                    let _VarOneTwo = ArrayMathVar[i][j + 4];
		                    let _varNum;
		                    _varNum = ArrayMathVar[i][j + 4]
		                    let step = 0;
		                    step = 4;
		
		                    aadHorRavno(i, j, _sVarOne, _VarOneTwo, step, _varNum);
		
		                } else if ((ArrayMathVar[i][j] != "f" && ArrayMathVar[i][j] != "n" && ArrayMathVar[i][j] != "+" && ArrayMathVar[i][j] != "-"
		                    && ArrayMathVar[i][j] != "*" && ArrayMathVar[i][j] != "/") && ArrayMathVar[i][j + 1] == "f" && (ArrayMathVar[i][j + 2] != "f" && ArrayMathVar[i][j + 2] != "n"
		                        && ArrayMathVar[i][j + 2] != "+" && ArrayMathVar[i][j + 2] != "-" && ArrayMathVar[i][j + 2] != "*" && ArrayMathVar[i][j + 2] != "/")
		                    && ArrayMathVar[i][j + 3] == "f" && ArrayMathVar[i][j + 4] == "f") {
		
		                    let varOneNum = ArrayMathVar[i][j];
		                    let varTwoNum = ArrayMathVar[i][j + 2];
		
		                    addHorOneTwo(varOneNum, varTwoNum, i, j);
		
		                } else if ((ArrayMathVar[i][j] != "f" && ArrayMathVar[i][j] != "n" && ArrayMathVar[i][j] != "+" && ArrayMathVar[i][j] != "-"
		                    && ArrayMathVar[i][j] != "*" && ArrayMathVar[i][j] != "/") && ArrayMathVar[i][j + 1] == "f" && ArrayMathVar[i][j + 2] == "f"
		                    && ArrayMathVar[i][j + 3] == "f" && (ArrayMathVar[i][j + 4] != "f" && ArrayMathVar[i][j + 4] != "n" && ArrayMathVar[i][j + 4] != "+"
		                        && ArrayMathVar[i][j + 4] != "-" && ArrayMathVar[i][j + 4] != "*" && ArrayMathVar[i][j + 4] != "/")) {
		
		                    let varOneNum = ArrayMathVar[i][j];
		                    let varTwoNum = ArrayMathVar[i][j + 4];
		
		                    addHorNumsRavenstvo(varOneNum, varTwoNum, i, j);
		
		                } else if (ArrayMathVar[i][j] == "f" && ArrayMathVar[i][j + 1] == "f" && (ArrayMathVar[i][j + 2] != "f" && ArrayMathVar[i][j + 2] != "n"
		                    && ArrayMathVar[i][j + 2] != "+" && ArrayMathVar[i][j + 2] != "-" && ArrayMathVar[i][j + 2] != "*" && ArrayMathVar[i][j + 2] != "/")
		                    && ArrayMathVar[i][j + 3] == "f" && (ArrayMathVar[i][j + 4] != "f" && ArrayMathVar[i][j + 4] != "n" && ArrayMathVar[i][j + 4] != "+"
		                        && ArrayMathVar[i][j + 4] != "-" && ArrayMathVar[i][j + 4] != "*" && ArrayMathVar[i][j + 4] != "/")) {
		
		                    let varOneNum = ArrayMathVar[i][j + 2];
		                    let varTwoNum = ArrayMathVar[i][j + 4];
		
		                    addHornRavTwo(varOneNum, varTwoNum, i, j);
		
		                }
		            }
		
		        } //end if(i == 0)    
		
		    } //end  for (let i=0; i < ArrayMathVar.length; i++)
		
		    //console.log(uniqArray);
		   //console.log(ArrayMathVar);
		    //    console.log(df);                  
		  ArrayNumberFinal();
		
		}
		
		// рандом чисел
		function getRandomNumber(min, max) {
		
		    return Math.floor(min + Math.random() * (max - min) );
			// return Math.floor(Math.random() * max) + min;
			
		}// заполнение массива по вертикали новое
		
		function ReadNumVer(varI, varJ) {
		
		    varOne = 0;
		    varSing = "";
		    varTwo = 0;
		    let stepj = 0;
		
		    if ((ArrayMathVar[varI][varJ] != "f" && ArrayMathVar[varI][varJ] != "n")
		        && (ArrayMathVar[varI + 1][varJ] == "f") && (ArrayMathVar[varI + 2][varJ] == "f")
		        && (ArrayMathVar[varI + 3][varJ] == "f") && (ArrayMathVar[varI + 4][varJ] == "f")) {
		
		       
		        let _stepj = 0;		
		        let _VarOne = ArrayMathVar[varI][varJ];
		        addVerOne(varI, varJ, _VarOne, _stepj);
		
		    }//end if( (ArrayMathVar[varI][varJ] !="f" && ArrayMathVar[varI][varJ] !="n")
		
		    if ((ArrayMathVar[varI][varJ + 2] != "f" && ArrayMathVar[varI][varJ + 2] != "n")
		        && (ArrayMathVar[varI + 1][varJ + 2] == "f") && (ArrayMathVar[varI + 2][varJ + 2] == "f")
		        && (ArrayMathVar[varI + 3][varJ + 2] == "f") && (ArrayMathVar[varI + 4][varJ + 2] == "f")) {
		
		        varOne = 0;
		        stepj = 2;
		        let _VarOne  = ArrayMathVar[varI][varJ + 2];
		        addVerOne(varI, varJ, _VarOne, stepj);
		
		    } //end  if( (ArrayMathVar[varI][varJ+2] !="f" && ArrayMathVar[varI][varJ+2] !="n")  
		
		    if ((ArrayMathVar[varI][varJ + 4] != "f" && ArrayMathVar[varI][varJ + 2] != "n")
		        && (ArrayMathVar[varI + 1][varJ + 4] == "f") && (ArrayMathVar[varI + 2][varJ + 4] == "f")
		        && (ArrayMathVar[varI + 3][varJ + 4] == "f") && (ArrayMathVar[varI + 4][varJ + 4] == "f")) {
		
		        // console.log( "5" );
		        varOne = 0;
		        stepj = 4;
		        let _VarOne=+ArrayMathVar[varI][varJ + 4];
		        let _VarOneTwo = +_VarOne * 2;
		        // addVerOne(varI, varJ, VarOne, stepj); 
		        AppVarWertEqual(varI, varJ,_VarOne, _VarOneTwo);
		
		    } //end  if( (ArrayMathVar[varI][varJ+2] !="f" && ArrayMathVar[varI][varJ+2] !="n")     
		
		    if (ArrayMathVar[varI][varJ] == "f" && ArrayMathVar[varI + 1][varJ] == "f" && ArrayMathVar[varI + 2][varJ] == "f"
		        && ArrayMathVar[varI + 3][varJ] == "f" && ArrayMathVar[varI + 4][varJ] == "f") {
		
		        varOne = 0;
		        stepj = 0;
		        let _VarOne = ArrayMathVar[varI][varJ];
		        addVerOne(varI, varJ, _VarOne, stepj);
		
		    }//end if( (ArrayMathVar[varI][varJ] !="f" && ArrayMathVar[varI][varJ] !="n")
		
		
		}
		
		// заполнение массива по вертикали если совпало только первое число
		function addVerOne(varI, varJ, sVarOne, u) {
		
		    let ArrayRf = [];
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    let ArrsStep = [];
		    let ster = 0;
		    let radNum = 0;
		    let vrtre = ArrayTransl.length % 2;
		
		    // sVarOne=ArrayMathVar[varI][varJ];    
		
		    // преобразуем многомерный массив  в одномерный
		    for (let k = 0; k < ArrayTransl.length; k++) {
		
		        const strty = ArrayTransl[k];
		
		        // console.log( str );                                 
		
		        let fgssE = strty.split(",");
		
		        if (sVarOne === fgssE[0]) {
		            ster = k;
		            Arrsdfsdn.push(ArrayTransl[ster]);
		            ArrsStep.push(k);
		
		        }//end if( VarOne === fgssE[0]) 
		
		    } //end  for (let k=0; k < ArrayTransl.length; k++)   
		
		    // проверяем пустой массив Arrsdfsdn или нет
		    if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length) {
		
		        // console.log("пустой");
		        let VarOneTwo = +sVarOne * 2;
		
		        numTransASdsaDCAS(sVarOne, VarOneTwo);
		
		        radNum = getRandomNumber(0, ArrayTranslMax.length);
		        ArrRaan = ArrayTranslMax[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 1; l < 5; l++) {
		
		            ArrayMathVar[varI + l][varJ + u] = fgss[l];
		
		        }//end for (let l=1; l < 5; l++)          
		
		    } else {
		
		        // console.log("не пустой");
		        radNum = getRandomNumber(0, Arrsdfsdn.length);
		        ArrRaan = Arrsdfsdn[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 1; l < 5; l++) {
		
		            ArrayMathVar[varI + l][varJ + u] = fgss[l];
		
		            if (l == 1 && fgss[1] == "+" || l == 1 && fgss[1] == "*") {
		
		                varDelNumOne = fgss[2];
		                varDelNumTwo = fgss[0];
		                varDelMumSing = fgss[1];
		
		            }
		
		        }//end for (let l=1; l < 5; l++)   
		
		        delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);
		
		        ArrayTransl.splice(ster, 1);
		
		        //  console.log("не пустой");
		
		    }//end  if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length)   
		
		    ArrayTransl.splice(ster, 1);
		    // console.log(  Arrsdfsdn );    
		}
		// заполнение массива по вертикали если первый элемент после равно
		function AppVarWertEqual(varI, varJ, sVarOne, sVarOneTwo) {
		
		    let ArrayRf = [];
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ArrsStep = [];
		    let ster = 0;
		    let radNum = 0;
		
		    // преобразуем многомерный массив  в одномерный
		    for (let k = 0; k < ArrayTransl.length; k++) {
		
		        const strty = ArrayTransl[k];
		        // console.log( str );                                 
		
		        let fgssE = strty.split(",");
		
		        if (sVarOne === fgssE[0]) {
		
		            ster = k;
		            Arrsdfsdn.push(ArrayTransl[ster]);
		            ArrsStep.push(k);
		
		        }//end if( VarOne === fgssE[0]) 
		
		    } //end  for (let k=0; k < ArrayTransl.length; k++) 
		
		    // проверяем пустой массив Arrsdfsdn или нет
		    if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length) {
		
		        //console.log("пустой");
		
		        numTransASdsaDCAS(sVarOne, sVarOneTwo);
		
		        radNum = getRandomNumber(0, ArrayTranslMax.length);
		        ArrRaan = ArrayTranslMax[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 1; l < 5; l++) {
		
		            ArrayMathVar[varI + l][varJ + 4] = fgss[l];
		
		        }//end for (let l=1; l < 5; l++)          
		
		    } else {
			        radNum = getRandomNumber(0, Arrsdfsdn.length);
		        ArrRaan = Arrsdfsdn[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 1; l < 5; l++) {
		
		            ArrayMathVar[varI + l][varJ + 4] = fgss[l];
		
		            if (l == 1 && fgss[1] == "+" || l == 1 && fgss[1] == "*") {
		
		                varDelNumOne = fgss[2];
		                varDelNumTwo = fgss[0];
		                varDelMumSing = fgss[1];
		
		            }
		
		        }//end for (let l=1; l < 5; l++)   
		
		        delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);
		
		        ArrayTransl.splice(ster, 1);
		
		        //  console.log("не пустой");
		
		    }//end  if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length)
		
		}
			
		// A - заполнение массива по горизонтали если совпало первое 
		function addHorTwo(varI, varJ, sVarOne, sVarOneTwo) {
		
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ArrsStep = [];
		    let ster = 0;
		    let radNum = 0;
		
		    // преобразуем многомерный массив  в одномерный
		    for (let k = 0; k < ArrayTransl.length; k++) {
		
		        const strty = ArrayTransl[k];
		        // console.log( str );                                 
		
		        let fgssE = strty.split(",");
		
		        if (sVarOne === fgssE[0]) {
		
		            ster = k;
		            Arrsdfsdn.push(ArrayTransl[ster]);
		            ArrsStep.push(k);
		
		        }//end if( VarOne === fgssE[0]) 
		
		    } //end  for (let k=0; k < ArrayTransl.length; k++) 
		
		    // проверяем пустой массив Arrsdfsdn или нет
		    if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length) {
		
		      //  console.log("пустой 1");
		
		        //numTransOneVarOne(sVarOne, sVarOneTwo);
		        numTransASdsaDCAS(sVarOne, sVarOneTwo);
		
		        radNum = getRandomNumber(0, ArrayTranslMax.length);
		        ArrRaan = ArrayTranslMax[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 1; l < 5; l++) {
		
		            ArrayMathVar[varI][varJ + l] = fgss[l];
		
		        }//end for (let l=1; l < 5; l++)          
		
		    } else {
		
		      //  console.log("не пустой");
		        radNum = getRandomNumber(0, Arrsdfsdn.length);
		        ArrRaan = Arrsdfsdn[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 1; l < 5; l++) {
		
		            ArrayMathVar[varI][varJ + l] = fgss[l];
		            
		            if (l == 1 && fgss[1] == "+" || l == 1 && fgss[1] == "*") {
		
		                varDelNumOne = fgss[2];
		                varDelNumTwo = fgss[0];
		                varDelMumSing = fgss[1];
		
		            }
		
		        }//end for (let l=1; l < 5; l++)  
		
		        delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing); 
		
		        ArrayTransl.splice(ster, 1);
		
		        //  console.log("не пустой");
		
		    }//end  if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length)   
			
		//console.log(ArrayTranslMax);
		}
		
		//CC + заполнения словаря для исключений для заполнения двух чисел
		function numTransASdsaDCAS(sVarOne, sVarOneTwo) {
		
		    ArrayTranslMax = [];
		    ArrayTranslMax.length = 0
		    let ArrayRanMax = [];
		    let varOne, varTwo, numVar, stepmax;
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        varOne = varTwo = numVar = 0;
		        varSing = "";
		        stepmax = 0;
		        varOne = sVarOne;
		        let varDelenie = 2;
		
		        for (let j = min; j < max + 1; j++) {
		
		            if (i == 0) {
		
		                varTwo = min + stepmax;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if (Number.isInteger(numVar) && numVar > 0) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		
		                }
		
		            } else if (i == 2) {
		
		                varTwo = stepmax + 1;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if (stepmax < stepSingMultip) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		
		                }
		
		            } else if (i == 3) {
		
		                for (let k = divMin; k < divMax; k++) {
		
		                    varTwo = k;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		                }
		                
		            }
		
		
		            stepmax++;
		
		        }//end for (let j = 0; j < min + 1; j++)
		
		        if (i == 1) {
		
		            let varZnach;
		
		            if (varOne >= 25 && varOne < 45) {
		
		                varZnach = 5;
		
		                for (let j = 0; j < 11; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 45 && varOne < 80) {
		
		                varZnach = 18;
		
		                for (let j = 0; j < 16; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 80 && varOne < 120) {
		
		                varZnach = 43;
		
		                for (let j = 0; j < 26; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 120 && varOne < 200) {
		
		                varZnach = 75;
		
		                for (let j = 0; j < 36; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 200 && varOne < 300) {
		
		                varZnach = 148;
		
		                for (let j = 0; j < 41; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 300 && varOne < 450) {
		
		                varZnach = 238;
		
		                for (let j = 0; j < 51; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 600 && varOne < 800) {
		
		                varZnach = 540;
		
		                for (let j = 0; j < 51; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 800 && varOne < 1100) {
		
		                varZnach = 730;
		
		                for (let j = 0; j < 61; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 1100 && varOne < 1400) {
		
		                varZnach = 990;
		
		                for (let j = 0; j < 101; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 1400 && varOne < 2000) {
		
		                varZnach = 1290;
		
		                for (let j = 0; j < 101; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 2000 && varOne < 2900) {
		
		                varZnach = 1890;
		
		                for (let j = 0; j < 101; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 2900 && varOne < 3900) {
		
		                varZnach = 2890;
		
		                for (let j = 0; j < 101; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 3900 && varOne < 5000) {
		
		                varZnach = 3890;
		
		                for (let j = 0; j < 101; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 5000 && varOne < 7000) {
		
		                varZnach = 4890;
		
		                for (let j = 0; j < 101; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            } else if (varOne >= 7000) {
		
		                varZnach = 6890;
		
		                for (let j = 0; j < 101; j++) {
		
		                    varTwo = varZnach + j;
		                    numVar = eval(varOne + singRan + varTwo);
		
		                    if (Number.isInteger(numVar) && numVar > 0) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                }
		
		            }
		
		        }//end if (i == 1)
		
		    }//end for (let j = 0; j < min + 1; j++)
		
		    // console.log(ArrayTranslMax);
		}
		
		//A + заполнение массива по горизонтали если совпало первое и второе числа
		function addHorOneTwo(_varOne, _varTwo, varI, varJ) {
		
		    ArrayTranslMax = [];
		    ArrayTranslMax.length = 0;
		    let ArrayRanMax = [];
		    let varOneA, varTwoA, numVarA;
		
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ArrsStep = [];
		    let ster = 0;
		    let radNum = 0;
		
		    // console.log(_varTwo);
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        varOneA = varTwoA = numVarA = 0;
		        varSing = "";
		
		        varOneA = +_varOne;
		        varTwoA = +_varTwo;
		
		        numVarA = eval(varOneA + singRan + varTwoA);
		
		        if (i == 0) {
		
		            if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                ArrayRanMax[i] = varOneA + "," + singRan + "," + varTwoA + "," + "=" + "," + numVarA;
		                ArrayTranslMax.push(ArrayRanMax[i]);
		
		            }
		
		        } else if (i == 1) {
		
		            if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                ArrayRanMax[i] = varOneA + "," + singRan + "," + varTwoA + "," + "=" + "," + numVarA;
		                ArrayTranslMax.push(ArrayRanMax[i]);
		
		            }
		
		        } else if (i == 2) {
		
		            if (varOneA < stepSingMultip || varTwoA < stepSingMultip) {
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    ArrayRanMax[i] = varOneA + "," + singRan + "," + varTwoA + "," + "=" + "," + numVarA;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		            }
		
		        }else if (i == 3) {
		
		            if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                ArrayRanMax[i] = varOneA + "," + singRan + "," + varTwoA + "," + "=" + "," + numVarA;
		                ArrayTranslMax.push(ArrayRanMax[i]);
		
		            }
		            
		        }
		
		    }
		
		    radNum = getRandomNumber(0, ArrayTranslMax.length);
		    ArrRaan = ArrayTranslMax[radNum];
		    let fgss = ArrRaan.split(",");
		
		    for (let l = 0; l < 5; l++) {
		
		        ArrayMathVar[varI][varJ + l] = fgss[l];
		
		    }//end for (let l=1; l < 5; l++)  
		
		  // console.log(ArrayTranslMax);
		
		}
		
		// +заполнение массива по горизонтали если совпало второе 
		function addHorThree(varI, varJ, sVarOne, sVarOneTwo, _step, varNum) {
		
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ArrsStep = [];
		    let ster = 0;
		    let radNum = 0;
		
		    // преобразуем многомерный массив  в одномерный
		    for (let k = 0; k < ArrayTransl.length; k++) {
		
		        const strty = ArrayTransl[k];
		        // console.log( str );                                 
		
		        let fgssE = strty.split(",");
		
		        if (varNum === fgssE[_step]) {
		
		            ster = k;
		            Arrsdfsdn.push(ArrayTransl[ster]);
		            ArrsStep.push(k);
		
		        }//end if( VarOne === fgssE[0]) 
		
		    } //end  for (let k=0; k < ArrayTransl.length; k++) 
		
		    // проверяем пустой массив Arrsdfsdn или нет
		    if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length) {
		
		        // console.log("пустой11");
		
		        numTransOneVar(sVarOne, sVarOneTwo);
		
		        radNum = getRandomNumber(0, ArrayTranslMax.length);
		        ArrRaan = ArrayTranslMax[radNum];
		        let fgss = ArrRaan.split(",");
		
		        //console.log(ArrayTranslMax);
		
		
		        for (let l = 0; l < 5; l++) {
		
		            ArrayMathVar[varI][varJ + l] = fgss[l];
		
		        }//end for (let l=1; l < 5; l++)          
		
		    } else {
		
		        // console.log("не пустой");
		        radNum = getRandomNumber(0, Arrsdfsdn.length);
		        ArrRaan = Arrsdfsdn[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 0; l < 5; l++) {
		
		            ArrayMathVar[varI][varJ + l] = fgss[l];
		
		            if (l == 1 && fgss[1] == "+" || l == 1 && fgss[1] == "*") {
		
		                varDelNumOne = fgss[2];
		                varDelNumTwo = fgss[0];
		                varDelMumSing = fgss[1];
		
		            }
		
		        }//end for (let l=1; l < 5; l++)   
		        
		        delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing);
		
		        ArrayTransl.splice(ster, 1);
		
		        //  console.log("не пустой");
		
		    }//end  if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length)   
		
		}
		
		// заполнение массива по горизонтали если после равно
		function aadHorRavno(varI, varJ, sVarOne, sVarOneTwo, _step, varNum) {
		
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ArrsStep = [];
		    let ster = 0;
		    let radNum = 0;
		
		    // преобразуем многомерный массив  в одномерный
		    for (let k = 0; k < ArrayTransl.length; k++) {
		
		        const strty = ArrayTransl[k];
		        // console.log( str );                                 
		
		        let fgssE = strty.split(",");
		
		        if (varNum === fgssE[_step]) {
		
		            ster = k;
		            Arrsdfsdn.push(ArrayTransl[ster]);
		            ArrsStep.push(k);
		
		        }//end if( VarOne === fgssE[0]) 
		
		    } //end  for (let k=0; k < ArrayTransl.length; k++) 
		
		    // проверяем пустой массив Arrsdfsdn или нет
		    if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length) {
		
		        // console.log("пустой");
		
		        numTransRavno(varNum, sVarOneTwo);
		
		        radNum = getRandomNumber(0, ArrayTranslMax.length);
		        ArrRaan = ArrayTranslMax[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 0; l < 5; l++) {
		
		            ArrayMathVar[varI][varJ + l] = fgss[l];
		
		        }//end for (let l=1; l < 5; l++)   
		
		    } else {
		        numTransRavno(sVarOne, sVarOneTwo);
		
		        radNum = getRandomNumber(0, Arrsdfsdn.length);
		        ArrRaan = Arrsdfsdn[radNum];
		        let fgss = ArrRaan.split(",");
		
		        for (let l = 0; l < 5; l++) {
		
		            ArrayMathVar[varI][varJ + l] = fgss[l];
		
		            if (l == 1 && fgss[1] == "+" || l == 1 && fgss[1] == "*") {
		
		                varDelNumOne = fgss[2];
		                varDelNumTwo = fgss[0];
		                varDelMumSing = fgss[1];
		
		            }
		
		        }//end for (let l=1; l < 5; l++)   
		
		        delNumbers(varDelNumOne, varDelNumTwo, varDelMumSing); 
		
		        ArrayTransl.splice(ster, 1);
		
		        //  console.log("не пустой");
		
		    }//end  if (!Array.isArray(Arrsdfsdn) || !Arrsdfsdn.length)   
		
		}
		
		//D -заполнение массива по горизонтали если совпало первое и равенстов числа
		function addHorNumsRavenstvo(_varOne, _varTwo, varI, varJ) {
		
		    ArrayTranslMax = [];
		    ArrayTranslMax.length = 0;
		    let ArrayRanMax = [];
		    let varOneA, varTwoA, numVarA;
		
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ster = 0;
		    let radNum = 0;
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        let varOnePer, varTwoPer;
		        varOneA = varTwoA = numVarA = 0;
		        varOneA = +_varOne;
		        varTwoA = +_varTwo;
		
		        numVarA = 0;
		        varOnePer = varTwoPer = 0;
		        varSing = "";
		
		        if (i == 0) {
		
		            if (varOneA < varTwoA) {
		
		                numVarA = varTwoA - varOneA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = _varOne + "," + singRan + "," + numVarA + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            }else if (varOneA === varTwoA) {
		
		                numVarA = varTwoA / varOneA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = _varOne + "," + "*" + "," + numVarA + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            }
		
		        } else if (i == 1) {
		
		            if (varOneA > varTwoA) {
		
		                numVarA = varOneA - varTwoA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = _varOne + "," + singRan + "," + numVarA + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            }else if (varOneA === varTwoA) {
		
		                numVarA = varTwoA / varOneA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = _varOne + "," + "/" + "," + numVarA + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            }
		
		
		        } else if (i == 2) {
		
		            if (varOneA < varTwoA) {
		
		                numVarA = varTwoA / varOneA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = _varOne + "," + singRan + "," + numVarA + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            } 
		
		        } else if (i == 3) {
		
		            if (varOneA > varTwoA) {
		
		                numVarA = varOneA /varTwoA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = _varOne + "," + singRan + "," + numVarA + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            } 
		
		        }
		
		    }//end for (let i = minSing; i < maxSing + 1; i++)
		
		    radNum = getRandomNumber(0, ArrayTranslMax.length);
		    ArrRaan = ArrayTranslMax[radNum];
		    let fgss = ArrRaan.split(",");
		
		    for (let l = 0; l < 5; l++) {
		
		        ArrayMathVar[varI][varJ + l] = fgss[l];
		
		    }//end for (let l=1; l < 5; l++)
		
		   // console.log(ArrayTranslMax);
		}     
		
		//С + заполнение массива по горизонтали если совпало второе и равенстов числа
		function addHornRavTwo(_varOne, _varTwo, varI, varJ) {
		
		    ArrayTranslMax = [];
		    ArrayTranslMax.length = 0;
		    let ArrayRanMax = [];
		    let varOneA, varTwoA, numVarA;
		
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ster = 0;
		    let radNum = 0;
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        let varOnePer, varTwoPer;
		        varOneA = varTwoA = numVarA = 0;
		        varOneA = +_varOne;
		        varTwoA = +_varTwo;
		
		        numVarA = 0;
		        varOnePer = varTwoPer = 0;
		        varSing = "";
		
		        if (i == 0) {
		
		            if (varOneA < varTwoA) {
		
		                numVarA = varTwoA - varOneA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = numVarA + "," + singRan + "," + _varOne + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            }
		
		        } else if (i == 1) {
		
		            numVarA = varOneA + varTwoA;
		
		            if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                // numVarA = eval(varOnePer + "+" + _varOne);
		                ArrayRanMax[i] = numVarA + "," + singRan + "," + _varOne + "," + "=" + "," + _varTwo;
		                ArrayTranslMax.push(ArrayRanMax[i]);
		
		            }
		
		        } else if (i == 2) {
		
		            if (varOneA < varTwoA) {
		
		                numVarA = varTwoA / varOneA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = numVarA + "," + singRan + "," + _varOne + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            } else if (varOneA === varTwoA) {
		
		                numVarA = varOneA / varTwoA;
		
		                if (Number.isInteger(numVarA) && numVarA > 0) {
		
		                    // numVarA = eval(varOnePer + "+" + _varOne);
		                    ArrayRanMax[i] = numVarA + "," + singRan + "," + _varOne + "," + "=" + "," + _varTwo;
		                    ArrayTranslMax.push(ArrayRanMax[i]);
		
		                }
		
		            }
		
		        } 
		
		    }//end for (let i = minSing; i < maxSing + 1; i++)
		
		    radNum = getRandomNumber(0, ArrayTranslMax.length);
		    ArrRaan = ArrayTranslMax[radNum];
		    let fgss = ArrRaan.split(",");
		
		    for (let l = 0; l < 5; l++) {
		
		        ArrayMathVar[varI][varJ + l] = fgss[l];
		
		    }//end for (let l=1; l < 5; l++)*/
		
		 //   console.log(ArrayTranslMax);
		
		}
		//A +заполнения словаря для исключений для заполнения после равно одно число
		function numTransRavno(varNum, sVarOneTwo) {
		
		    ArrayTranslMax = [];
		    ArrayTranslMax.length = 0;
		    let ArrayRanMax = [];
		    let varOne, varTwo, numVar, stepmax, stepmaxtwo, stepmaxA, stepmaxtwoA;
		    stepmax = stepmaxA = 1;
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        varOne = varTwo = numVar = 0;
		        varSing = "";
		        stepmax = 1;
		        stepmaxA = 1;
		        let numberVar = 0;
		        let numberVarMinus = 0;
		        numberVar = +varNum - +min;
		        numberVarMinus = +varNum + +min;
		
		        for (let j = min; j < max + 1; j++) {
		
		            if (i == 0) {
		
		                varOne = +numberVar - stepmax;
		                varTwo = +min + stepmax;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if ((Number.isInteger(varOne) && varOne > 0) && (Number.isInteger(varTwo) && varTwo > 0) && +numVar === +varNum) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		                }
		
		            } else if (i == 1) {
		
		                varOne = +numberVarMinus + stepmax;
		                varTwo = +min + stepmax;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if ((Number.isInteger(varOne) && varOne > 0) && (Number.isInteger(varTwo) && varTwo > 0) && +numVar === +varNum) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		                }
		
		            } else if (i == 2) {
		
		                varOne = +varNum / stepmax;
		                varTwo = stepmax;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if (stepmax < stepSingMultip) {
		
		                    if ((Number.isInteger(varOne) && varOne > 0) && +numVar === +varNum) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		                    }
		                }
		
		            }
		
		            stepmax++;
		
		        }
		
		        for (let j = min; j < max + 1; j++) {
		
		            if (i == 0) {
		
		                varTwo = +numberVar - stepmaxA;
		                varOne = +min + stepmaxA;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if ((Number.isInteger(varOne) && varOne > 0) && (Number.isInteger(varTwo) && varTwo > 0) && +numVar === +varNum) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		                }
		
		            } else if (i == 2) {
		
		                varTwo = +varNum / stepmaxA;
		                varOne = stepmaxA;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if (stepmaxA < stepSingMultip) {
		
		                    if ((Number.isInteger(varTwo) && varTwo > 0) && +numVar === +varNum) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		                    }
		                }
		
		            }
		
		            stepmaxA++;
		
		        }
		
		    }//end for (let i=minSing; i < maxSing+1; i++)
		
		  //  console.log(ArrayTranslMax);
		}
		
		
		//A + заполнения словаря для исключений для заполнения одного числа перед равно
		function numTransOneVar(sVarOne, sVarTwo) {
		
		    ArrayTranslMax = [];
		    ArrayTranslMax.length = 0
		    let ArrayRanMax = [];
		    let varOne, varTwo, numVar, stepmax;
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        varOne = varTwo = numVar = 0;
		        varSing = "";
		        stepmax = 0;
		        let varTwoA = +sVarTwo + 10;
		
		        for (let j = min; j < max + 1; j++) {
		
		            if (i == 0) {
		
		                varOne = min + stepmax;
		                varTwo = sVarTwo;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if (Number.isInteger(numVar) && numVar > 0) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		
		                }
		
		            } else if (i == 1) {
		
		                varTwo = sVarTwo;
		                varOne = varTwoA + stepmax;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if (Number.isInteger(numVar) && numVar > 0) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		
		                }
		
		            } else if (i == 2) {
		
		                varOne = stepmax + 1;
		                varTwo = sVarTwo;
		                numVar = eval(varOne + singRan + varTwo);
		
		                if (stepmax < stepSingMultip) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		
		                }
		
		            }
		
		            stepmax++;
		
		        }
		
		    }//end for (let i=minSing; i < maxSing+1; i++)
		
		   // console.log(ArrayTranslMax);
		
		}
		
		// + заполнения словаря для исключений для заполнения одного числа
		function numTransOneVarOne(sVarOne, sVarOneTwo) {
		
		    ArrayTranslMax = [];
		    ArrayTranslMax.length = 0
		    let ArrayRanMax = [];
		    let varOne, varTwo, numVar, stepmax;
		
		    for (let i = minSing; i < maxSing + 1; i++) {
		
		        let singRan = ArraySing[i];
		        varOne = varTwo = numVar = 0;
		        varSing = "";
		        stepmax = 0;
		
		        ottwo: for (j = 0; j < sVarOne; j++) {
		
		            varOne = sVarOne;
		            varTwo = stepmax + 1;
		            numVar = eval(varOne + singRan + varTwo);
		
		            if (Number.isInteger(numVar) && numVar > 0) {
		
		                if (i <= 1) {
		
		                    if (stepmax <= max) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    }
		
		                    //end if (i <= 1)
		                } else if (i == 3) {
		
		                    ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                    ArrayTranslMax.push(ArrayRanMax[j]);
		
		                } else if (i == 2) {
		
		                    if (stepmax < stepSingMultip) {
		
		                        ArrayRanMax[j] = varOne + "," + singRan + "," + varTwo + "," + "=" + "," + numVar;
		                        ArrayTranslMax.push(ArrayRanMax[j]);
		
		                    } else {
		
		                        break ottwo;
		
		                    }
		
		                }
		
		                stepmax++;
		            }
		
		            //  stepmax++;
		
		        }
		
		    }//end for (let i=minSing; i < maxSing+1; i++)
		
		    //console.log(ArrayTranslMax);
		
		}
		
		// удаление одинаковых вырожений
		function delNumbers(_numOne, _numTwo, _sing) {
		
		    let ArrRaan = 0;
		    let Arrsdfsdn = [];
		    Arrsdfsdn.length = 0;
		    let ArrsStep = [];
		    let ster = 0;   
		
		    // преобразуем многомерный массив  в одномерный
		    for (let k = 0; k < ArrayTransl.length; k++) {
		
		        const strty = ArrayTransl[k];
		        // console.log( str );                                 
		
		        let fgssE = strty.split(",");
		
		        if (_numOne === fgssE[0] && _numTwo === fgssE[2] && _sing === fgssE[1]) {
		
		            ster = k;
		            Arrsdfsdn.push(ArrayTransl[ster]);    
		            ArrayTransl.splice(ster, 1);
		
		        }//end if( VarOne === fgssE[0]) 
		
		    } //end  for (let k=0; k < ArrayTransl.length; k++) 
		
		    //console.log(Arrsdfsdn);
		    //console.log(ArrayTransl);
		}
		
		//  функция заполнения массива финального
		function ArrayNumberFinal(){	
		
		  for(let i = 0; i <  ArrayNumber.length; i++){
		
		    for (let k = 0; k <   ArrayNumber[i].length; k++){
		  
		     ArrayNum.setAt(ArrayMathVar[i][k], i,k);
		  
		    }
		 
		  }
		
		}
		
	},

	async Butons_Event31_Act3(runtime, localVars)
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

	async Start_Event27_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Решай примеры каждый день!",
			     	     "attachments": "https://vk.com/app52017181"})
						  .then(data => {
						     console.log(data);});	
	},

	async Start_Event28_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

