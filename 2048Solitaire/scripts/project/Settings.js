const cardColorHexs = [
	"CCC767",
	"EE8045",
	"EE454C",
	"EE4592",
	"A745EE",
	"6C45EE",
	"457AEE",
	"45AEEE",
	"45EBEE",
	"45EEA4",
	"95EE45"
];

const comboEffectColorHexs = [
"F78823",
"F50E14",
"8FE24E",
"F7239B",
"23BDF7"
];

export let cardColors = cardColorHexs.map(h=>hEXToVBColor(h));
export let defaultBombCardColor = [1,1,1];
export let comboEffectColors = comboEffectColorHexs.map(h=>hEXToVBColor(h));
// //speed vs level linear graph
// export const speedAndLevels = 
// [
// 	{speed:500,level:0},
// 	{speed:600,level:10},
// 	{speed:700,level:20}
// ];



function hEXToVBColor(rrggbb) {
    const b = rrggbb.substr(4, 2);
	const g = rrggbb.substr(2,2);
	const r = rrggbb.substr(0,2);
	
	
    return [parseInt(r, 16)/255,parseInt(g,16)/255,parseInt(b,16)/255];
}