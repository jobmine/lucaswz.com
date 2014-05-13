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
    else if (hash === "visual") act2nd();
    else if (hash === "action") act3rd();
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
	parent.location.hash = 'me';	
	loadMe();
}

function act2nd() {
	clearpage("nav2nd");
	parent.location.hash = 'visual';
	$("#index-page-container").append("<div id=\"visual-projects-container\"</div>");
		

	$("#visual-projects-container").append("<img src='mind/visual/portfolio.jpg'>");
		
	// $.getJSON("mind/visual/projects.json", function(data) {
  	
 //    	$.each(data.myprojects, function(i, projects) {
	// 		num = projects.num;
	// 		desc = projects.desc;
	// 		click = projects.click;
	// 		$("#visual-projects-container").append("<a class='visual-projects' href='mind/visual/images/f" + num + ".jpg' data-lightbox='projects' title='" + desc + "'><img src='mind/visual/images/f" + num + ".jpg'></a>");
	// 	});
 //  }


  // );
}

function act3rd() {
	clearpage("nav3rd");
	$("#index-nav").addClass("tedxred");
	parent.location.hash = 'action';
	$("#index-page-container").append("<div id=\"action-activities-container\"</div>");
		
	$.getJSON("mind/action/activities.json", function(data) {
  	
    	$.each(data.myactivities, function(i, projects) {
			src = projects.src;
			link = projects.link;
			$("#action-activities-container").append("<a class='action-activities' href='" + link + "'><img src='mind/action/images/" + src + "'></a>");
		});
  }
  );

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