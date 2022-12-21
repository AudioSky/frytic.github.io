import MainScene from './MainScene.js';
import WinParticles from './WinParticles.js';
import CardTypeDetails from './CardTypeDetails.js';
import Input from './Input.js';
import Card from './Card.js';
import CardStack from './CardStack.js';
import CardDrawer from './CardDrawer.js';
import GamePlayManager from './GamePlayManager.js';
import CardDiscarder from './CardDiscarder.js';
import DiscardCardHolder from './DiscardCardHolder.js';
import TextWithBG from './TextWithBG.js';
import ComboEffect from './ComboEffect.js';


export let scene = null;
export let cardTypeDetails = null;

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	runtime.objects.ComboEffect.setInstanceClass(ComboEffect);
	runtime.objects.DiscardCardHolder.setInstanceClass(DiscardCardHolder);
	runtime.objects.CardDiscarder.setInstanceClass(CardDiscarder);
	runtime.objects.Card.setInstanceClass(Card);
	runtime.objects.CardStack.setInstanceClass(CardStack);
	runtime.objects.CardDrawer.setInstanceClass(CardDrawer);
		runtime.objects.WinParticles.setInstanceClass(WinParticles);
		runtime.objects.GamePlayManager.setInstanceClass(GamePlayManager);
		runtime.objects.TextWithBG.setInstanceClass(TextWithBG);
	runtime.addEventListener("beforeprojectstart",async () => await onBeforeProjectStart(runtime));
	runtime.getLayout("Game").addEventListener("beforelayoutstart",async ()=>{
	
		scene = new MainScene(runtime);
	
	});
});


async function onBeforeProjectStart(runtime)
{
	
	runtime.addEventListener("tick", () => tick(runtime));
	await loadCardTypeDetails(runtime);
}

async function loadCardTypeDetails(runtime)
{
	const url = await runtime.assets.getProjectFileUrl("CardTypeDetails.json");
	const response = await fetch(url);
	const fetchedText = await response.text(); 
	cardTypeDetails = new CardTypeDetails(JSON.parse(fetchedText));
}

function tick(runtime)
{
	if(scene)
	{
		scene.update(runtime);
	}
	
	Input.update(runtime);
}

