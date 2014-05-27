var browserHeight = window.innerHeight;


function initial(){
	$("#index-show").css("height",browserHeight);
	$("#index-page").css("min-height",browserHeight);
    if (browserHeight > 700) {
    	$("#index-show-content").css({"padding-top": browserHeight / 2 - 180, "font-size": "80px"});
    }
    else if (browserHeight > 400 && browserHeight <= 700) {
    	$("#index-show-content").css({"padding-top": browserHeight / 2 - browserHeight/4, "font-size": browserHeight/10 + 10});
    }
    else if (browserHeight < 400 && browserHeight >= 300) {
    	$("#index-show-content").css({"padding-top": browserHeight / 2 - 40, "font-size": "30px"});
    }
    else if (browserHeight < 300) {
    	$("#index-show-content").css({"padding-top": "110px", "font-size": "30px"});
    }
    var hash = (window.location.hash).replace('#', '');
    if (hash === "me") act1st();
    else if (hash === "portfolio") act2nd();
    else if (hash === "activity") act3rd();
    else if (hash === "resume") act4th();
    else if (hash === "contact") act5th();
    else if (hash === "thanks") thanksfeedback();
}

function clearpage(navitemname) {
	document.getElementById('index-page-container').innerHTML = "";
	$(".index-nav-menu-item").removeClass("actived");
	$("#" + navitemname).addClass("actived");
	$("#index-nav").removeClass();
	$("#index-nav").addClass("smooth1000");
}

function actlogo() {
	clearpage("");
	parent.location.hash = 'welcome';	
	$("#" + navitemname).addClass("actived");
}

function act1st() {
	clearpage("nav1st");
	parent.location.hash = 'me';	
	loadMe();
}

function act2nd() {
	clearpage("nav2nd");
	parent.location.hash = 'portfolio';
	$("#index-page-container").append("<div id=\"visual-projects-container\" class=\"disselect\"></div>");
		

	$("#visual-projects-container").append("<img src='mind/visual/portfolio.jpg' draggable='false'>");
		
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
	parent.location.hash = 'activity';
	$("#index-page-container").append("<div id=\"action-activities-container\"</div>").show('slow');
		
	$.getJSON("mind/action/activities.json", function(data) {
  	
    	$.each(data.myactivities, function(i, projects) {
			src = projects.src;
			link = projects.link;
			$("#action-activities-container").append("<a target=\"_blank\" class='action-activities' href='" + link + "'><img src='mind/action/images/" + src + "' draggable='false'></a>");
		});
  }
  );

}
	
function act4th() {
	clearpage("nav4th");
	parent.location.hash = 'resume';
	// window.setTimeout('location.reload()', 1000);
	loadResume();
}

function act5th() {
	clearpage("nav5th");
	$("#index-nav").addClass("contactgreen");
	loadContact();
	parent.location.hash = 'contact';
}


function thanksfeedback() {
	$("index-show-content").replaceWith("<p>\"</p><p>Gotcha. Thanks!</p><p>\"</p>");
}