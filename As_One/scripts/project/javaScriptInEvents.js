

const scriptsInEvents = {

	async Act_Event2_Act1(runtime, localVars)
	{
		
		let ty = 10;
		
		let tyd = ty.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'Coins',
		   value: tyd 
		  });
	},

	async Act_Event2_Act2(runtime, localVars)
	{
		
		let Levty = 55;
		
		let Levtyd = Levty.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'Levt',
		   value: Levtyd 
		  });
	},

	async Act_Event4_Act1(runtime, localVars)
	{
		let _c, _lev, _rud;
		
		vkBridge.send('VKWebAppStorageGet', {
		  keys: [
		    'Coins',
		    'Levt',
		    'Rud'    
		  ]})
		  .then((result) => { 
		    //  runtime.globalVars.NumGet = result.keys[0].value;
		     // runtime.globalVars.LevtGet = result.keys[1].value;
		      _c = JSON.parse(result.keys[0].value);
		      _lev = JSON.parse(result.keys[1].value);
		      _rud = JSON.parse(result.keys[2].value);
		      if(_c.length != 0){
		         runtime.globalVars.NumGet = result.keys[0].value;
		      }else{
		        runtime.globalVars.NumGet = 12;
		      }
		
		      if( _lev.length != 0){
		         runtime.globalVars.LevtGet = result.keys[1].value;
		      }else{
		         runtime.globalVars.LevtGet = 15;
		      }
		
		      if(_rud.length != 0){
		         runtime.globalVars.RudtGet = result.keys[2].value;
		      }else{
		         runtime.globalVars.RudtGet = 20;
		      }
		
		  })
		  .catch((error) => {
		    // Ошибка
		    console.log(error);
		  });
	},

	async Act_Event5_Act1(runtime, localVars)
	{
		
		let coin_a ;
		let let_a;
		  vkBridge.send('VKWebAppStorageGet', {
		  keys: [
		    'Coins',
		    'Levt'
		  ]})
		  .then((data) => { 
		    if (data.keys) {
		       coin_a = JSON.parse(data.keys[0].value);
		       runtime.globalVars.NumGet = +coin_a;
		       console.log("получили - " + coin_a);  
		
		       runtime.globalVars.NumGet = data.keys[Coins].value;
		       console.log("получили_dnjf - " +  runtime.globalVars.NumGet); 
		
		       let_a = JSON.parse(data.keys[1].value);
		       runtime.globalVars.LevtGet = +let_a;
		       console.log("получилиLev - " + coin_a);  
		
		        runtime.globalVars.LevtGet = data.keys[Levt].value;
		       console.log("получили_Lev - " +   runtime.globalVars.LevtGet); 
		
		     
		    }
		  })
		  .catch((error) => {
		    // Ошибка
		    console.log(error);
		  });
	},

	async Act_Event2_Act3(runtime, localVars)
	{
		
		let RudtGety = 75;
		
		let RudtGetyd = RudtGety.toString();
		
		  vkBridge.send('VKWebAppStorageSet', {
		   key: 'RudtGet',
		   value: RudtGetyd
		  });
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
