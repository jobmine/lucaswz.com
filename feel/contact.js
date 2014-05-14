function loadContact() {
	$("#index-page-container").append("<div id=\"address\" ></div>");
	$("#index-page-container").append("<div id=\"contact-container\" class=\"disselect\"></div>");
	$("#contact-container").append("<img id='contactbackground' src='mind/contact/contact.jpg' draggable='false'>");
	$("#contact-container").append("<div id=\"contact-item\"></div>");
	$("#contact-item").append("<div id=\"addresstablet\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"skype\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"phone\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"email\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"github\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"facebook\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"linkedin\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"renren\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"wechat\" class=\"contactitem\"></div>");
	$("#contact-item").append("<div id=\"bbm\" class=\"contactitem\"></div>");

	today = new Date();
	randomNum = Math.floor(10000 + (Math.random() * ((99999 - 10000) + 1)));
	$("#skype").append("<img src=\"mind/contact/skype.png\" draggable='false'><a href=\"skype:jobmine?call\">jobmine</a>");
	$("#phone").append("<img src=\"mind/contact/phone.png\" draggable='false'><a href=\"skype:+12266222222?call\">226.622.2222</a>");
	$("#email").append("<img src=\"mind/contact/email.png\" draggable='false'><a href=\"mailto:hello@lucaswz.com?subject=[Contact Lucas No.C" + today.getDate() + today.getMonth() + "-" + randomNum + " Through Lucaswz.com]\"><b>hello</b>@lucaswz.com</a>");
	$("#address").append("<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5791.415095034512!2d-80.54274660728852!3d43.46670243746803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf41d49fc35fd%3A0x24b9e751c534e643!2sMinota+Hagey+Residence!5e0!3m2!1sen!2sca!4v1399987397437\" width=\"100%\" height=\"300\" frameborder=\"0\" style=\"border:0\"></iframe>");
	$("#facebook").append("<img src=\"mind/contact/facbeook.png\" draggable='false'><a href=\"https://www.facebook.com/wangzt\" target=\"_blank\">Fb</a>");
	$("#github").append("<img src=\"mind/contact/github.png\" draggable='false'><a href=\"https://github.com/jobmine\" target=\"_blank\">Git</a>");
	$("#linkedin").append("<img src=\"mind/contact/linkedin.png\" draggable='false'><a href=\"http://www.linkedin.com/profile/view?id=215106146\" target=\"_blank\">LI</a>");
	$("#renren").append("<img src=\"mind/contact/renren.png\" draggable='false'><a href=\"http://www.renren.com/285555417\" target=\"_blank\">RR</a>");
	$("#wechat").append("<img src=\"mind/contact/wechat.png\" draggable='false'><a href='mind/contact/wech.png' data-lightbox='qrcode' title='WeChat QRCode'><img class=\"qrcoder\" src=\"mind/contact/wech.png\" draggable='false'></a>");
	$("#bbm").append("<img src=\"mind/contact/bbm.png\" draggable='false'><a href='mind/contact/bbmcode.png' data-lightbox='qrcode' title='BlackBerry BBM QRCode'><img class=\"qrcoder\" src=\"mind/contact/bbmcode.png\" draggable='false'></a>");
	$("#addresstablet").append("<img src=\"mind/contact/address.png\" draggable='false'><a href='https://goo.gl/maps/wpXRz'>VeloCity, U Waterloo</a>");

}