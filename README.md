## requestFullscreen ##
如果想让一个元素全屏显示，可以调用该元素的`requestFullscreen`方法，目前该方法还逃不开各个浏览器的私有前缀，比如让一个`video`标签全屏显示：

    var el = document.querySeletor("video");
	if (el.requestFullscreen) {
	  el.requestFullscreen();
	} el if (el.msRequestFullscreen) {
	  el.msRequestFullscreen();
	} else if (el.mozRequestFullScreen) {
	  el.mozRequestFullScreen();
	} else if (el.webkitRequestFullscreen) {
	  el.webkitRequestFullscreen();
	}//T_T私有前缀就是这么麻烦

在这里有一点需要注意的是，FireFox会自动给元素加上`width: 100%; height: 100%`样式，让元素填满屏幕。然而Chrome会将元素按原尺寸居中显示在屏幕中，其他区域用黑色填充。所以为了保持一致性，需要给全屏元素加上：

    video:-webkit-full-screen {
		width: 100%;
		hieght: 100%;
	}
当然现在Chrome用的多，所以如果让FireFox模拟Chrome下的显示，就需要让元素放在一个容器中，调用容器的`requestFullscreen`方法，让元素在容器中居中显示即可。

## exitFullscreen ##
进入了全屏，必然就要让人能够退出，`exitFullscreen`方法可以退出全屏，但需要注意该方法的调用方不再是全屏的元素，而是`document`：

	if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
	  //需注意FireFox下是cancelFullScreen
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

## fullscreenElement  ##
要想获得当前全屏元素，可以调用`fullscreenElement`:

	   document.fullscreenElement
			|| document.msFullscreenElement
			|| document.mozFullScreenElement
			|| document.webkitFullscreenElement ;

如果当前没有元素处于全屏模式返回`null`，否则返回全屏元素。

## fullscreenEnabled ##
该属性用于判断当前是否有元素处于全屏模式：

	 document.fullscreenEnabled
	    || document.msFullscreenEnabled
	    || document.mozFullScreenEnabled
	    || document.webkitFullscreenEnabled ;

## fullscreenchange ##
当浏览器切换全屏模式时将会触发这个事件：

	  [
        'webkitfullscreenchange',
        'mozfullscreenchange',
        'MSFullscreenChange',
        'fullscreenchange'
      ].forEach(function(ev) {
	    document.addEventListener(ev, function () {
	  	  fn && fn();
	  	}, false);
	  });

## fullscreenerror ##
该事件是当浏览器切换到全屏模式失败时触发：

	  [
       	'webkitfullscreenerror',
      	'mozfullscreenerror',
     	'MSFullscreenError',
      	'fullscreenerror'
      ].forEach(function(ev) {
	    document.addEventListener(ev, function () {
	  	  fn && fn();
	  	}, false);
	  });

## 浏览器兼容性 ##
根据
[caniuse](http://caniuse.com/#search=full "full screen")
的数据显示，目前`IE10及以下`、`IOS Safari`、`Opear Mini` 和`Android Browser`均不支持该API，其余浏览器支持程度也仍有欠缺。
