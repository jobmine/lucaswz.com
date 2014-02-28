window.onload = function go() {
    var hash = (window.location.hash).replace('#', '');
    if (hash == "me") act1st();
    else if (hash == "projects") act2nd();
    else if (hash == "activities") act3rd();
    else if (hash == "resume") act4th();
    else if (hash == "contact") act5th();
    parent.location.hash = '';
}

function clearpage(navitemname) {
	document.getElementById('index-page').innerHTML = "";
	$(".index-nav-menu-item").removeClass("actived");
	$("#" + navitemname).addClass("actived");
	parent.location.hash = '';
	$("#index-nav").removeClass();
	$("#index-nav").addClass("smooth1000");
}

function actlogo() {
	clearpage("nav1st");
	$("#" + navitemname).addClass("actived");
}

function act1st() {
	clearpage("nav1st");
	$("#index-page").append("1");
}

function act2nd() {
	clearpage("nav2nd");
	$("#index-page").append("2");
}

function act3rd() {
	clearpage("nav3rd");
	$("#index-page").append("3");
	$("#index-nav").addClass("tedxred");
}

function act4th() {
	clearpage("nav4th");
	$("#index-page").append("4");
}

function act5th() {
	clearpage("nav5th");
	$("#index-page").append("5");
}