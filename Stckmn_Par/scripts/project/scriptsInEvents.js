


const scriptsInEvents = {

	async Action_Event7_Act10(runtime, localVars)
	{
		console.log("dfdf");
	},

	async Action_Event97_Act1(runtime, localVars)
	{
		/*YaGames
		    .init()
		    .then(ysdk => {
		        ysdk.adv.showFullscreenAdv({
		    callbacks: {
			    onOpen: () => {
		          console.log('showFullscreenAdv.');
				  runtime.globalVars.ReklSound=2;
				  console.log(runtime.globalVars.ReklSound);
		        },
				onClose: function(wasShown) {
		           console.log('close.');
				  runtime.globalVars.ReklSound=1;
		        },	
		        onError: function(error) {
		            console.log('erro.');
				  runtime.globalVars.ReklSound=1;
		        }
		    }
		   })
		});
		*/
		   vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
						 
		function MyAdd(){
		 vkBridge.send('VKWebAppShowNativeAds',{ad_format:"interstitial"}).then(data => {
		 
		    if (data.result) { 
		      // Предзагруженные материалы есть
			  runtime.globalVars.ReklSound=1;	
				console.log(data.result);
				 console.log(runtime.globalVars.ReklSound);
			  
		    } 
		  
					 console.log(data);});	
		}
		MyAdd();
	},

	async Action_Event101_Act6(runtime, localVars)
	{
		console.log(runtime.globalVars.ReklSound);
	},

	async Bttn_action_Event36_Act2(runtime, localVars)
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
				 runtime.globalVars.Priz=1;
				  console.log(runtime.globalVars.Priz); 
		      }else{ // Ошибка 
		        console.log('Ошибка при показе');
				}
		    })
		    .catch((error) => { console.log(error); /* Ошибка */ });
		}
	},

	async Bttn_action_Event39_Act4(runtime, localVars)
	{
		console.log(runtime.globalVars.Priz);
	},

	async Bttn_action_Event48_Act5(runtime, localVars)
	{
		console.log(runtime.globalVars.Priz);
	},

	async Start_Event25_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Давай быстрее к нам, паркурить!",
			     	     "attachments": "https://vk.com/app51675015_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Start_Event27_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	},

	async Choice_Event9_Act2(runtime, localVars)
	{
		 console.log("MySocial");
		  vkBridge.send('VKWebAppShowWallPostBox',
					   {"message": "Давай быстрее к нам, паркурить!",
			     	     "attachments": "https://vk.com/app51675015_587856911"})
						  .then(data => {
						     console.log(data);});	
	},

	async Choice_Event11_Act2(runtime, localVars)
	{
		 vkBridge.send("VKWebAppShowInviteBox",                  {"method":"VKWebAppShowInviteBox","params":{}})
		         .then(data => console.log(data.success))  
		        .catch(error => console.log(error));	
						console.log("tMyFrend");	
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

