window.onload = function go() {
	generateNav();
    var hash = (window.location.hash).replace('#', '');
    if (hash.length == 0) {
    	goblg();
    }
    else {
        if (hash == "blog") goblg();
        else if (hash == "about") goabt();
        else if (hash == "projects") goprj();
        else if (hash == "photography") goptg();
        else if (hash == "uwaterloo") gouwat();
        else if (hash == "tedx") gotedx();
        else if (hash == "linkedin") golin();
        else if (hash == "contact") goctt();
        else {
	        goblg();
        }
    }		
}

function goept() {
	document.getElementById('main').innerHTML = "";
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
	$("#main").append("About of Lucas is under Construction");
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
	$("#main").append("U Waterloo page is under Construction. Please check back if you are redirected from University of Waterloo Engineering Ambassador website.");
}

function gotedx() {
	goept();
	window.location.hash = 'tedx';
	$("#main").append("TEDx page is under Construction. This page is about my TEDx stuff includes TEDxSonghuaRiver, TEDxHarbin, TEDxUW, TEDxWaterloo and TEDxToronto");
}

function golin() {
	goept();
	window.location.hash = 'linkedin';
	$("#main").append("LinkedIn page is under Construction (but maybe I can just redirect you to my linkedin page: linkedin.com/in/lucaswang)");
}

function goctt() {
	goept();
	window.location.hash = 'contact';
	$("#main").append("Contact page is under Construction (or just simply send an email to Lucas : hello@lucaswz.com)");
}
