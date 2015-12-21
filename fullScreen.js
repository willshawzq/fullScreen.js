;(function(w, undefined) {

  var requestFullscreen = function(el) {
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

  var exitFullscreen = function() {
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
  var addFullScreenListener = function(event, fn) {
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

  var fullScreenEnabled = function() {
    return document.fullscreenEnabled
      || document.msFullscreenEnabled
      || document.mozFullScreenEnabled
      || document.webkitFullscreenEnabled ;
  }

  var fullScreenElement = function() {
    return document.fullscreenElement
  		|| document.msFullscreenElement
  		|| document.mozFullScreenElement
  		|| document.webkitFullscreenElement ;
  }

  w.fullScreen = {
    open: requestFullscreen,
    exit: exitFullscreen,
    enabled: fullScreenElement,
    element: fullScreenElement,
    addListener: addFullScreenListener
  }
})(window, undefined)
