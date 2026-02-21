const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.JavaScriptInEvents.Act_Event2_Act1,
		C3.JavaScriptInEvents.Act_Event3_Act1,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Bg: 0},
	{Btn_Set: 0},
	{Text_Btn: 0},
	{Btn_Get: 0},
	{Touch: 0},
	{Text_N: 0},
	{NumGet: 0}
];

self.InstanceType = {
	Bg: class extends self.ISpriteInstance {},
	Btn_Set: class extends self.ISpriteInstance {},
	Text_Btn: class extends self.ITextInstance {},
	Btn_Get: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Text_N: class extends self.ITextInstance {}
}