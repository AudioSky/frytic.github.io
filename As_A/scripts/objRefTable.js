const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.JavaScriptInEvents.Act_Event2_Act1,
		C3.JavaScriptInEvents.Act_Event2_Act2,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.JavaScriptInEvents.Act_Event4_Act1,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetText,
		C3.JavaScriptInEvents.Act_Event5_Act1
	];
};
self.C3_JsPropNameTable = [
	{Bg: 0},
	{Btn_Set: 0},
	{Text_Btn: 0},
	{ID: 0},
	{Btn_Get: 0},
	{Touch: 0},
	{Text_N: 0},
	{Text_Levt: 0},
	{NumGet: 0},
	{LevtGet: 0}
];

self.InstanceType = {
	Bg: class extends self.ISpriteInstance {},
	Btn_Set: class extends self.ISpriteInstance {},
	Text_Btn: class extends self.ITextInstance {},
	Btn_Get: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Text_N: class extends self.ITextInstance {},
	Text_Levt: class extends self.ITextInstance {}
}