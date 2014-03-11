function genBlg () {
	$.getJSON('http://wangzitian.tumblr.com/api/read/json?num=17&callback=?', function(data) {
		$.each(data['posts'], function(i, posts) {
			post = data['posts'][i];
			type = post['type'];
			date = post['date'];
			id = post['id'];
					
			if (type === 'photo') {
			   img = post['photo-url-500'];
			   $("#main").append("<div id=\"lucasblog" + id + "\" class=\"blog\"><blog_date>" + date + "</blog_date><br>" + "<img src='" + img + "'><br></div>");
			}
			
			if (type === 'link') {
			   linktext = post['link-text'];
			   linkurl = post['link-url'];
			   $("#main").append("<div id=\"lucasblog" + id + "\" class=\"blog\"><blog_date>" + date + "</blog_date><br>" + linktext + "<br>" + linkurl + "<br></div>");
			}

			
			if (type === 'regular') {
			   body = post['regular-body'];	
			   $("#main").append("<div id=\"lucasblog" + id + "\" class=\"blog\"><blog_date>" + date + "</blog_date><br>" + body + "<br></div>");
			}
			
		});
	
	});

}