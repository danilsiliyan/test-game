


const scriptsInEvents = {

	async SpisokSobiti_Event139_Act9(runtime, localVars)
	{
		YaGames
		    .init()
		    .then(ysdk => {
		     ysdk.adv.showFullscreenAdv();
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

