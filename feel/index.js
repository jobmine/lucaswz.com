window.onload = function scroll(){
	$(".index-nav-menu-item").click(function (e) {
	    e.preventDefault();
	    $('html,body').animate({
	        scrollTop: $("#index-page").offset().top - 100
	    }, 'slow');
	});

	$("#index-nav-logo").click(function (e) {
	    e.preventDefault();
	    $('html,body').animate({
	        scrollTop: $("#top").offset().top
	    }, 'fast');
	});
}

function detectBroswer() {
	if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}