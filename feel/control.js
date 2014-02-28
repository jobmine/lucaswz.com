window.onload = function go() {
    var hash = (window.location.hash).replace('#', '');
    if (hash == "me") gome();
    else if (hash == "projects") goprojects();
    else if (hash == "activities") goactivities();
    else if (hash == "resume") goresume();
    else if (hash == "contact") gocontact();
}

function goept() {
	document.getElementById('index-page-left').innerHTML = "";
	parent.location.hash = ''
}

function goblg() {
	goept();
	window.location.hash = 'blog';
	genBlg();
}

function goabt() {
	goept();
	window.location.hash = 'about';
	$("#index-page-left").append("About of Lucas is under Construction");
}

function goprj() {
	goept();
	window.location.hash = 'projects';
	genPrj();
	initPrj();
}

function goptg() {
	goept();
	window.location.hash = 'photography';
	genPtg();
	initPtg();
}

function gouwat() {
	goept();
	window.location.hash = 'uwaterloo';
	$("#index-page-left").append("U Waterloo page is under Construction. Please check back if you are redirected from University of Waterloo Engineering Ambassador website.");
}

function gotedx() {
	goept();
	window.location.hash = 'tedx';
	$("#index-page-left").append("TEDx page is under Construction. This page is about my TEDx stuff includes TEDxSonghuaRiver, TEDxHarbin, TEDxUW, TEDxWaterloo and TEDxToronto");
}

function golin() {
	goept();
	window.location.hash = 'linkedin';
	$("#index-page-left").append("LinkedIn page is under Construction (but maybe I can just redirect you to my linkedin page: linkedin.com/in/lucaswang)");
}

function goctt() {
	goept();
	window.location.hash = 'contact';
	$("#index-page-left").append("Contact page is under Construction (or just simply send an email to Lucas : hello@lucaswz.com)");
}

