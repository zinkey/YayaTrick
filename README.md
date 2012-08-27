Yaya Trick 页面按键秘笈


## 介绍

让页面拥有像魂斗罗一样的按键trick效果！
支持： 0-9, a-z, numpad0-numpad9, F1-F12, BackSpace, Tab, Enter, Shift, Ctrl, Alt, Pause, Caps Lock, Esc, PageUp, PageDown, End, Home, Left Arrow(←), Up Arrow(↑), Right Arrow(→), Down Arrow(↓), Insert, Delete

## 方法

	Trick.start();//开始
	Trick.stop();//结束

## 例子

比如以下这个trick就是需要在一秒内按键：↑ ↓ ← → ↑

	var Trick =  new YayaTrick(["↑","↓","←" ,"→", "↑"],function(){
		document.getElementById("result").innerHTML+= "success! ";
	},1000);
	Trick.start();


© uloveit.com.cn 