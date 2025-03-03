const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.PlatformInfo,
		C3.Behaviors.Tween,
		C3.Behaviors.Rotate,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.bound,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Browser.Acts.GoBack,
		C3.Plugins.Browser.Acts.GoToURLWindow,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.PlatformInfo.Cnds.IsOnMobile,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.PlatformInfo.Cnds.IsOnAndroid,
		C3.Plugins.Browser.Cnds.IsPortraitLandscape,
		C3.Plugins.Audio.Acts.SetPlaybackRate,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{ur1: 0},
	{ur2: 0},
	{ur3: 0},
	{fonM: 0},
	{vMenu: 0},
	{vixod: 0},
	{v_menu: 0},
	{raz: 0},
	{sver: 0},
	{Touch: 0},
	{Browser: 0},
	{audio: 0},
	{obYsroistve: 0},
	{predyprezdenie: 0},
	{vkl: 0},
	{vakl: 0},
	{zvyki: 0},
	{Твинанимация: 0},
	{miska: 0},
	{prosto_logoped: 0},
	{load: 0},
	{Поворот: 0},
	{lod: 0},
	{fon_uroven: 0},
	{kamen: 0},
	{podlozka: 0},
	{sarf: 0},
	{saman: 0},
	{syt: 0},
	{smel: 0},
	{syt_dec: 0},
	{smel_dec: 0},
	{sarf_dec: 0},
	{saman_dec: 0},
	{ykaz_saman: 0},
	{ykaz_syt: 0},
	{ykaz_sarf: 0},
	{ykaz_smel: 0},
	{restsrt: 0},
	{Перетаскивание: 0},
	{ОграничитьСценой: 0},
	{kartinki: 0},
	{kartuPertamaTerisi: 0},
	{kartu1: 0},
	{kartu2: 0},
	{Benar: 0},
	{Suara: 0},
	{zekran: 0},
	{pobeda: 0},
	{zvyk: 0}
];

self.InstanceType = {
	ur1: class extends self.ISpriteInstance {},
	ur2: class extends self.ISpriteInstance {},
	ur3: class extends self.ISpriteInstance {},
	fonM: class extends self.ISpriteInstance {},
	vMenu: class extends self.ISpriteInstance {},
	vixod: class extends self.ISpriteInstance {},
	v_menu: class extends self.ISpriteInstance {},
	raz: class extends self.ISpriteInstance {},
	sver: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	audio: class extends self.IInstance {},
	obYsroistve: class extends self.IInstance {},
	predyprezdenie: class extends self.ISpriteInstance {},
	vkl: class extends self.ISpriteInstance {},
	vakl: class extends self.ISpriteInstance {},
	zvyki: class extends self.ISpriteInstance {},
	miska: class extends self.ISpriteInstance {},
	prosto_logoped: class extends self.ISpriteInstance {},
	load: class extends self.ISpriteInstance {},
	lod: class extends self.ISpriteInstance {},
	fon_uroven: class extends self.ISpriteInstance {},
	kamen: class extends self.ISpriteInstance {},
	podlozka: class extends self.ISpriteInstance {},
	sarf: class extends self.ISpriteInstance {},
	saman: class extends self.ISpriteInstance {},
	syt: class extends self.ISpriteInstance {},
	smel: class extends self.ISpriteInstance {},
	syt_dec: class extends self.ISpriteInstance {},
	smel_dec: class extends self.ISpriteInstance {},
	sarf_dec: class extends self.ISpriteInstance {},
	saman_dec: class extends self.ISpriteInstance {},
	ykaz_saman: class extends self.ISpriteInstance {},
	ykaz_syt: class extends self.ISpriteInstance {},
	ykaz_sarf: class extends self.ISpriteInstance {},
	ykaz_smel: class extends self.ISpriteInstance {},
	restsrt: class extends self.ISpriteInstance {},
	kartinki: class extends self.ISpriteInstance {}
}