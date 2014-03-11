function genPrj() {
	
	$("#main").append("<div id=\"lucas-prj-ct\"</div>");
		
	$.getJSON("prj.json", function(data) {
  	
    	$.each(data.lucaswzprojects, function(i, projects) {
			scr = projects.scr;
			title = projects.title;
			desc = projects.desc;
			click = projects.click;
	
			$("#lucas-prj-ct").append("<a class=\"lucas-prj\" rel=\"lucas-prj\" href=\"projects/" + click + "\" data-description=\"" + desc + "\" data-title=\"" + title + "\" data-largesrc=\"projects/" + scr + "\"><img src='projects/" + scr + "' alt=\"\"/></a>");
			
		});
  }
  );  
}

function initPrj(){
    $(".lucas-prj").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
}