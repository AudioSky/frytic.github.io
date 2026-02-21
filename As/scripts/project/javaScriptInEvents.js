

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

	async Act_Event3_Act1(runtime, localVars)
	{
		vkBridge.send('VKWebAppStorageGet', {
		  keys: [
		    'Coins'
		  ]})
		  .then((result) => { 
		      runtime.globalVars.NumGet = result.keys[0].value;
		  })
		  .catch((error) => {
		    // Ошибка
		    console.log(error);
		  });
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
