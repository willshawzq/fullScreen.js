;(function(w, undefined) {

  w.requestFullscreen = function(el) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  }

  w.exitFullscreen = function() {
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
  }
  w.addFullScreenListener = function(event, fn) {
    var events = {
      'change': [
          'webkitfullscreenchange',
          'mozfullscreenchange',
          'MSFullscreenChange',
          'fullscreenchange'
        ],
      'error': [
        'webkitfullscreenerror',
        'mozfullscreenerror',
        'MSFullscreenError',
        'fullscreenerror'
      ]
    }
    events[event].forEach(function(ev) {
      document.addEventListener(ev, function () {
    	  fn && fn();
    	}, false);
    });
  }

  w.fullScreenEnabled = function() {
    return document.fullscreenEnabled
      || document.msFullscreenEnabled
      || document.mozFullScreenEnabled
      || document.webkitFullscreenEnabled ;
  }

  w.fullScreenElement = function() {
    return document.fullscreenElement
  		|| document.msFullscreenElement
  		|| document.mozFullScreenElement
  		|| document.webkitFullscreenElement ;
  }

})(window, undefined)
