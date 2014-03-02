var browserHeight = window.innerHeight;


function initial(){
	$("#index-show").css("height",browserHeight);
	$("#index-page").css("min-height",browserHeight);
    if (browserHeight > 400) {
    	$("#index-show-content").css({"padding-top": browserHeight / 2 - 180, "font-size": "500%"});
    }
    else if (browserHeight < 400) {
    	$("#index-show-content").css({"padding-top": browserHeight / 2 + 5, "font-size": "150%"});
    }
    var hash = (window.location.hash).replace('#', '');
    if (hash === "me") act1st();
    else if (hash === "projects") act2nd();
    else if (hash === "activities") act3rd();
    else if (hash === "resume") act4th();
    else if (hash === "contact") act5th();
}

function clearpage(navitemname) {
	document.getElementById('index-page-container').innerHTML = "";
	$(".index-nav-menu-item").removeClass("actived");
	$("#" + navitemname).addClass("actived");
	$("#index-nav").removeClass();
	$("#index-nav").addClass("smooth1000");
}

function actlogo() {
	clearpage("nav1st");
	$("#" + navitemname).addClass("actived");
}

function act1st() {
	clearpage("nav1st");
	$("#index-page-container").append("1");
	parent.location.hash = 'me';	
}

function act2nd() {
	clearpage("nav2nd");
	$("#index-page-container").append("2");
	parent.location.hash = 'projects';
}

function act3rd() {
	clearpage("nav3rd");
	$("#index-page-container").append("3");
	$("#index-nav").addClass("tedxred");
	parent.location.hash = 'activities';
}
	
function act4th() {
	parent.location.hash = '';
	clearpage("nav4th");
	window.setTimeout('location.reload()', 1000);
}

function act5th() {
	clearpage("nav5th");
	loadContact();
	parent.location.hash = 'contact';
}