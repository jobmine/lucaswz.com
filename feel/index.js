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