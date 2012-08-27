/*yaya trick 1.0.0 under MIT License 2011.5.19*/
YayaTrick = function(trick,fn,time){
	var enable = true,evt,steplen=trick.length-1,type = "keyup";
	function addEvt(listener){
		if (document.addEventListener) {
			document.addEventListener(type,listener, false);
		} else if (document.attachEvent) {
			document.attachEvent("on"+type,listener);
		}
	}
	function removeEvt(listener){
		if (document.removeEventListener) {
			document.removeEventListener(type,listener, false);
		} else if (document.detachEvent) {
			document.detachEvent("on"+type,listener);
		}
	}
	var charmap = {
		"backspace":8,
		"tab":9,
		"enter":13,
		"shift":16,
		"ctrl":17,
		"alt":18,
		"pause":19,
		"capslock":20,
		"esc":27,
		"pageup":33,
		"pagedown":34,
		"end":35,
		"home":36,
		"leftarrow":37,
		"uparrow":38,
		"rightarrow":39,
		"downarrow":40,
		"←":37,
		"↑":38,
		"→":39,
		"↓":40,
		"insert":45,
		"delete":46
	};
	//a-z
	for (var i=65;i<90;i++ )
	{
		charmap[String.fromCharCode(i).toLowerCase()]=i;
	}
	//0-9
	for (i=48;i<=57;i++)
	{
		charmap[String.fromCharCode(i)]=i;
	}
	//numpad0-numpad9
	for (i=96;i<=105;i++)
	{
		charmap["numpad"+(i-96)]=i;
	}	
	//f1-f12
	for (i=112;i<=123;i++)
	{
		charmap["f"+(i-111)]=i;
	}
	for (var i=0;i<trick.length;i++)
	{
		trick[i] = charmap[trick[i].toLowerCase().replace(/ /g,"")];
	}
	this.start = function(){
		var startgame = false,
		      nextkey = 0,
		      starttime,
			  timer;
		addEvt(evt=function(e){
			e = e ? e :window.event; 
			var key=e.keyCode || e.which;
			if (!startgame)
			{
					if (key ==trick[nextkey])
					{
							starttime = new Date;
							nextkey++;
							startgame = true;
							if (timer)
							{
								clearTimeout(timer);
							}
							timer = setTimeout(function(){
								startgame = false;
								nextkey = 0;
							},time);
					}
			}
			else{
					if (key ==trick[nextkey])
					{
							if (nextkey==steplen)
							{
								if (new Date*1-starttime*1<time)
								{
									fn();
								}
								startgame = false;
								nextkey = 0;
							}
							else{
								nextkey++;
							}
					}
					else{
						startgame = false;
						nextkey = 0;
					}
			}
		});
	};
	this.stop = function(){
		removeEvt(evt);
	};
};