


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

	async Action_Event57_Act1(runtime, localVars)
	{
		
		let ArrayNumber= [
		  [5, 5, 2, 5, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5]
		];
		
		let num =runtime.objects.Num.getFirstInstance();
		
		const NumVar = runtime.globalVars.NumVar;
		
		runtime.globalVars.Find_Blocks = 0;
		let Find_Blocks= runtime.globalVars.Find_Blocks;
		
		let ArrayFind=[];
		const ArrayNum = runtime.objects.ArrayNumbers.getFirstInstance();	
		
		
		function Find (){
		// поиск по оси X, слева-направо
		outler:for (let i = 0; i < ArrayNumber.length; i++ ) {
		
		   for (let k = 0; k <  ArrayNumber[i].length-1; k++){    
			
		    if(ArrayNum.getAt(i,k) > -1 ){	     
			 
		       if(ArrayNum.getAt(i,k) === ArrayNum.getAt(i,k+1) ){
		 
				   let s = k+1;
				   ArrayFind.push(i + "-" + k);  
				   ArrayFind.push(i + "-" + s);  
				   
				   runtime.globalVars.Find_Blocks +=1; 		   
				  
				   
			       if( s <= 3 ){	
				   
				        if(ArrayNum.getAt(i,k) === ArrayNum.getAt(i,k+2) ){
						  
						   let h= k+2;
					 
					       ArrayFind.push(i + "-" + k);  
				           ArrayFind.push(i + "-" + h);  
				   
				           runtime.globalVars.Find_Blocks +=1; 
						
						   break outler;
						
					   } else{
					   
					       break outler;
						   
					   }     
					
			      }  			
			   
			   }
			   
		     }
			 
		   }  
		   
		}  
		 
		// поиск по оси Y, по сверху-вниз
		outler:for (let i = 0; i < ArrayNumber[i].length; i++ ) {
		
		   for (let k = 0; k <ArrayNumber.length-1; k++){
		
			
		     if(ArrayNum.getAt(i,k) > -1  ){	 
		    
			 
		        if(ArrayNum.getAt(i,k) === ArrayNum.getAt(i+1,k) ){
		   
				   let s = i+1;
				   ArrayFind.push(i + "-" + k);  
				   ArrayFind.push(s + "-" + k);  
				   
				   runtime.globalVars.Find_Blocks +=1;		   
		        
				   
				   if( s <= 4 ){	   
				    
					     
					  if(ArrayNum.getAt(i,k) === ArrayNum.getAt(i+2,k)){
					  
					       let h= i+2;
					 
					       ArrayFind.push(i + "-" + k);  
				           ArrayFind.push(h + "-" + k);  
				   
				           runtime.globalVars.Find_Blocks +=1; 
						
						   break outler;			  
					  
					  }	else{
					  
					       break outler;
					  
					  }		
				   
				  } 		   
				   
		       }    
				
		     }
			 
		   }  
		   
		}
		
		 ActFindBlock();
		 
		}
		
		Find ();
		
		function ActFindBlock(){
		
		  let curfind_x = 0;
		  let curfind_y = 0;
		  
		  let set = new Set(ArrayFind);
		  let setarr=[...set];
		 //console.log(setarr);
		//alert(setarr); 
		 
		 let curfindOne_x, curfindOne_y, curfindTwo_x, curfindTwo_y, curfindThree_x, curfindThree_y;   
		 
		  // если в массиве два блока 
		  if(setarr.length === 2){  
		  
		    runtime.globalVars.numCombo +=1;
			 
			 for (let i = 0; i < 1; i++){
			 
			     let FindBlocksOne = setarr[i].split('-');
			 
			     curfindOne_x = FindBlocksOne[0];
			     curfindOne_y = FindBlocksOne[1]; 		 
				   		  
				  		
				   for(let n=0; n<NumVar; n++){			 
				     
					   let fr = runtime.objects.Number.getAllInstances()[n];			 	
		               let cur_x = fr.instVars.cur_x;  		 
					   let cur_y = fr.instVars.cur_y; 
					   let FindAct = fr.instVars.Act_Find;
						 
					     if(cur_x  === +curfindOne_x  && cur_y === +curfindOne_y){					
						 
					          fr.instVars.Active=1	
						      				  
					     }					
					    	 
		           } 		   
		          
		    }	 
		
			 
			 for (let i = 1; i < 2; i++){
			 
			    let FindBlocksTwo = setarr[i].split('-'); 
				
			    curfindTwo_x =  FindBlocksTwo[0];
			    curfindTwo_y =  FindBlocksTwo[1]; 	
				
				   for(let n=0; n<NumVar; n++){			 
				     
					   let fr = runtime.objects.Number.getAllInstances()[n];			 	
		               let cur_x = fr.instVars.cur_x;  		 
					   let cur_y = fr.instVars.cur_y; 
					   let FindAct = fr.instVars.Act_Find;
						 
					     if(cur_x  === +curfindTwo_x  && cur_y === +curfindTwo_y ){					
						 
					          fr.instVars.Active=1	
						      				  
					     }					
					    	 
		           } 
			 
			 }
			 
			//  console.log(curfindOne_x  +" - "+  curfindOne_y+ " : " +curfindTwo_x +" - "+  curfindTwo_y);
			      // если блоки справа-налево
			     if( curfindOne_x === curfindTwo_x  &&  curfindOne_y != curfindTwo_y ){		      
						  // если блоки с 0-1
				
				     if( +curfindOne_y === 0 && +curfindTwo_y === 1){
					  
					     Block_Act( curfindOne_x, curfindOne_y );	
					  
					   // если блоки с 1-2
					  }else if( +curfindOne_y === 1 && +curfindTwo_y === 2){
					  
					     Block_Act( curfindOne_x, curfindTwo_y );	
					  
					  
					   // если блоки с 2-3
					  }else if( +curfindOne_y === 2 && +curfindTwo_y === 3){
					  
					     Block_Act( curfindOne_x, curfindOne_y );	
					  // если блоки с 3-4
					  }else	 if( +curfindOne_y === 3 && +curfindTwo_y === 4){
					  
					     Block_Act( curfindOne_x, curfindTwo_y );	
					  
					  }
				
					  
					//  Block_Act( curfindOne_x, curfindOne_y );	
					// если блоки сверху-вниз
				  }
				  
				  if( curfindOne_x != curfindTwo_x  &&  curfindOne_y === curfindTwo_y ){
				   
				      Block_Act( curfindTwo_x, curfindTwo_y );
				 
				   }
		  
		  }
		  
		   // если в массиве три блока    	
		  if(setarr.length > 2){        
		
		  runtime.globalVars.numCombo +=1;
		//-------------------------------------------------------------------------------------------	 
			   
		  	 for (let i = 0; i < 1; i++){
			 
			     let FindBlocksOne = setarr[i].split('-');
			 
			     curfindOne_x = FindBlocksOne[0];
			     curfindOne_y = FindBlocksOne[1]; 		 
				   		  
				  		
				   for(let n=0; n<NumVar; n++){			 
				     
					   let fr = runtime.objects.Number.getAllInstances()[n];			 	
		               let cur_x = fr.instVars.cur_x;  		 
					   let cur_y = fr.instVars.cur_y; 
					   let FindAct = fr.instVars.Act_Find;
						 
					     if(cur_x  === +curfindOne_x  && cur_y === +curfindOne_y){					
						 
					          fr.instVars.Active=1	
						      				  
					     }					
					    	 
		           } 		   
		          
		    }	 
		
			 
			 for (let i = 1; i < 2; i++){
			 
			    let FindBlocksTwo = setarr[i].split('-'); 
				
			    curfindTwo_x =  FindBlocksTwo[0];
			    curfindTwo_y =  FindBlocksTwo[1]; 	
				
				   for(let n=0; n<NumVar; n++){			 
				     
					   let fr = runtime.objects.Number.getAllInstances()[n];			 	
		               let cur_x = fr.instVars.cur_x;  		 
					   let cur_y = fr.instVars.cur_y; 
					   let FindAct = fr.instVars.Act_Find;
						 
					     if(cur_x  === +curfindTwo_x  && cur_y === +curfindTwo_y ){					
						 
					          fr.instVars.Active=1	
						      				  
					     }					
					    	 
		           } 
			 
			 }
			 
			 for (let i = 2; i < 3; i++){
			 
			    let FindBlocksTwo = setarr[i].split('-'); 
				
			     curfindThree_x  =  FindBlocksTwo[0];
			     curfindThree_y =  FindBlocksTwo[1]; 	
				
				   for(let n=0; n<NumVar; n++){			 
				     
					   let fr = runtime.objects.Number.getAllInstances()[n];			 	
		               let cur_x = fr.instVars.cur_x;  		 
					   let cur_y = fr.instVars.cur_y; 
					   let FindAct = fr.instVars.Act_Find;
						 
					     if(cur_x  === +curfindThree_x  && cur_y === +curfindThree_y){					
						 
					          fr.instVars.Active=1	
						      				  
					     }					
					    	 
		           } 
			 
			 }
		  
		//-------------------------------------------------------------------------------------------		 
			 
			 // если блоки справа-налево	 
			 if( (curfindOne_x === curfindTwo_x && curfindOne_x === curfindThree_x && curfindTwo_x === curfindThree_x) 
			              && (curfindOne_y != curfindTwo_y && curfindOne_y != curfindThree_y && curfindTwo_y != curfindThree_y ) ){	 
			  
				Block_Act( curfindOne_x, curfindTwo_y );
			 
			 // если блоки сверху-вниз
			 } else if( (curfindOne_x != curfindTwo_x && curfindOne_x != curfindThree_x && curfindTwo_x != curfindThree_x) 
			              && (curfindOne_y === curfindTwo_y && curfindOne_y === curfindThree_y && curfindTwo_y  === curfindThree_y ) ){					  
			  
				let sum = Math.floor( ( +curfindOne_x + +curfindTwo_x + +curfindThree_x ) / 3 );
				Block_Act( sum, curfindOne_y );
			 
			 // если блоки справа-налево сверху(слева) и снизу-верх 
			} else  if ( (curfindOne_x === curfindTwo_x && curfindOne_x != curfindThree_x && curfindTwo_x != curfindThree_x ) 
			            && ( curfindOne_y != curfindTwo_y && curfindOne_y ===  curfindThree_y ) ){
			 
			     Block_Act( curfindOne_x, curfindOne_y );
				 
			 // если блоки справа-налево сверху(слева) и снизу-верх 
			}else if( (curfindOne_x === curfindTwo_x && curfindOne_x != curfindThree_x && curfindTwo_x != curfindThree_x ) 
			            && ( curfindOne_y != curfindTwo_y && curfindTwo_y === curfindThree_y && curfindOne_y != curfindThree_y ) ){
			 
			     Block_Act( curfindOne_x, curfindTwo_y );
				
			 }
		   
		   }
		   
		    // если в массиве нет чисел
		   if(setarr.length === 0){      
			  
			   if( NumVar <= 29 ){
			 
			       runtime.globalVars.ActTouch = 0;	  
			       runtime.globalVars.DelBlockAct = 0;	  
			       runtime.globalVars.numCombo = 0;
			       runtime.globalVars.ActBlockToch = 0;
			     
			   }else{
			   
			       c3_callFunction("EndGame"); 
			   
			   }
		   
		   }  
		
		}
		
		function Block_Act( findcur_x, findcur_y ){
		
		   for(let n=0; n<NumVar; n++){			 
				     
				let blockFind = runtime.objects.Number.getAllInstances()[n];	
				  
		        let cur_x = blockFind.instVars.cur_x;  		 
				let cur_y = blockFind.instVars.cur_y; 
				  
				let FindAct = blockFind.instVars.Act_Find;
					
				
				  if(cur_x  === +findcur_x && cur_y === +findcur_y){					
						 
					    blockFind.instVars.Act_Find=1;		
					     			  
				  }					
						 
		    }
			
			c3_callFunction("Merge_Blocks"); 
		
		}
	},

	async Action_Event83_Act1(runtime, localVars)
	{
		let ArrayNumber= [
		  [5, 5, 2, 5, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5],
		  [0, 0, 2, 6, 5]
		];
		
		let num =runtime.objects.Num.getFirstInstance();
		
		let Find_Blocks= runtime.globalVars.Find_Blocks;
		
		runtime.globalVars.Drop_Afterr=0;
		
		const NumVar = runtime.globalVars.NumVar;
		
		let ArrayFind=[];
		
		const ArrayNum = runtime.objects.ArrayNumbers.getFirstInstance();		 
		 
		 function Find(){
		// поиск по оси Y, по сверху-вниз
		for (let i = 0; i < ArrayNumber[i].length; i++ ) {
		
		   for (let k = 0; k <ArrayNumber.length-1; k++){
		
			
		     if(ArrayNum.getAt(i,k) === -1){        		
				
				   
				    for(let r = i; r < ArrayNumber[i].length+1; r++){	
					
					   if( ArrayNum.getAt(r,k) > -1){	    
					    
						 
					     for(let n=0; n <  NumVar; n++){	
					   
					           let fr = runtime.objects.Number.getAllInstances()[n];			 	
		                       let cur_x = fr.instVars.cur_x;		 
					           let cur_y = fr.instVars.cur_y; 
						  
						       if(cur_x  === r && cur_y === k){					
						 
					               fr.instVars.merge=1;					  
								   runtime.globalVars.Drop_Afterr += 1;		
								  
					           }	 	   
					        
					     } 
					   
					 }    
								
				 }		 
		                  
		     }
		   }  
		}
		Act();
		}
		
		 Find();
		
		 function Act(){
		 
		   //c3_callFunction("drop_block_after"); 
		 
		  if(runtime.globalVars.Drop_Afterr > 0 ){
			
			    c3_callFunction("drop_block_after"); 
				//runtime.globalVars.Drop_Afterr=0;
			//	runtime.globalVars.Drop_Afterr = 222;
			  
			}
			
			  if(runtime.globalVars.Drop_Afterr === 0 ){
			
			    c3_callFunction("Find_Bloks"); 
			
			//runtime.globalVars.Drop_Afterr=0;
			//	runtime.globalVars.Drop_Afterr = 111;
			  
			}
		  
		 }
		 
		// alert( ArrayFind); 
	},

	async Action_Event125_Act4(runtime, localVars)
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

	async Action_Event129_Act7(runtime, localVars)
	{
		console.log(runtime.globalVars.ReklSound);
	},

	async Btn_Event26_Act1(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
		       ysdk.adv.showRewardedVideo({
		       callbacks: {
		          onOpen: () => {
		          console.log('Video ad open.');
		        },
		        onRewarded: () => {
		          console.log('Rewarded!');		  
				  runtime.globalVars.PrizTwo=2;
				  console.log(runtime.globalVars.Priz); 
		        },
				 onClose: () => {
		          console.log('Video ad closed.');
				  runtime.globalVars.Priz=1;
		        },   	        
		        onError: (e) => {
		          console.log('Error while open video ad:', e);
				  runtime.globalVars.Priz=1;
		        }
		     }
		  })
		});
	},

	async Start_Event13_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Дойди До Блока Бесконечности!",
			     	     "attachments": "https://vk.com/app51842114_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Start_Event14_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",   
		       {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

