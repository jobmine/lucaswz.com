function genPtg() {
	
	$("#main").append("<div id=\"lucas-ptg-ct\"</div>");
		
	$.getJSON("ptg.json", function(data) {
  	
    	$.each(data.lucaswzphotography, function(i, photos) {
			scr = photos.scr;
			title = photos.title;
			desc = photos.desc;
			click = photos.click;
	
			$("#lucas-ptg-ct").append("<a class=\"lucas-ptg\" rel=\"lucas-ptg\" href=\"photography/" + click + "\" data-description=\"" + desc + "\" data-title=\"" + title + "\" data-largesrc=\"photography/" + scr + "\"><img src='photography/" + scr + "' alt=\"\"/></a>");
			
		});
  }
  );  
}

function initPtg(){
    $(".lucas-ptg").fancybox({
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