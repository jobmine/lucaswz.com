<!DOCTYPE html>
<html>
	<head>
		<!-- title -->
		<title>Lucas Says "Whoops" &#9829;</title>
		<link rel="icon" type="image/png" href="favicon.png">

		<!-- meta tags -->
		<meta charset="UTF-8">
		<meta name="Description" content="A website about Lucas Wang" />
		<meta name="Keywords" content="Zitian, wangzitian, Lucas, lucaswang, Personal, Website, Wang" />
		<meta name="author" content="Lucas Wang, hello@lucaswz.com" />
        <meta name="robots" content="NOODP, noarchive">

		<!-- Stylesheet Library -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Gafata|Ruda:400,700,900'>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.4.2/pure-min.css">
        <link rel="stylesheet" href="../look/lightbox.css">

        <!-- Customized Stylesheet -->
		<link rel="stylesheet" href="whoops.css">

        <!-- JavaScript Library -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
		<script src="jquery.autosize.min.js"></script>
        <script src="../feel/lightbox-2.6.min.js"></script>


        <!-- Customized JavaScript -->
        <script>$(document).ready(function(){$('textarea').autosize();});</script>
        <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44410117-3', 'lucaswz.com');
  ga('send', 'pageview');

    </script>

	</head>	
	<body>
		<div class="content">
        <h2 class="content-head is-center">Please help Lucas to improve himself!</h2>


        <div class="pure-g">
            <div class="l-box-lrg pure-u-1 pure-u-med-2-5">
            	<form class="pure-form pure-form-stacked" method="post" action="whoops-post.php">
                    <fieldset>

                        <label for="company">Company Name</label>
                        <input id="company" type="text" name="company" placeholder="Company Inc">

                        <label for="location">Location</label>
                        <input id="location" name="location"  type="text" placeholder="City, State">
                        <input id="us-location" type="radio" name="location2" value="USD" checked>USA
                        <input id="ca-location" type="radio" name="location2" value="Canada">Canada


                        <label for="name">Your Name</label>
                        <input id="name" type="text" name="name" placeholder="Jony Ive">

                        <label for="email">Your Email</label>
                        <input id="email" type="email" name="email" placeholder="sample@lucaswz.com">

                        <label for="comment">Feedback</label>
                        <textarea id="comment" name="comment"></textarea>

                        <p id="reply">
                            <input id="replyable" type="checkbox" name="reply" value="OK" checked>
                            Ok Lucas, you may email me back.
                        </p>
                        <button type="submit" value="submit" class="pure-button">Tell Lucas!</button>
                    </fieldset>
                </form>

            </div>

            <div class="l-box-lrg pure-u-1 pure-u-med-3-5">
                <h4>Yay Waterloo!</h4>
                <p>
                    First of all, I want to thank you for your consideration! <br>
                    Two years ago, I chose Waterloo Engineering for its co-op program - students get real experiences through hacking with you, all awesome companies in the world. 
                </p>

                <h4>Tell Lucas</h4>
                <p>
                    When we are not selected, the application will just disappear silently. However, I believe a suggestion from hire managers will be really helpful! Please tell me anything may make you decide to (not) select me - you expect low level code monkeys / my resume is too playful / different design style / ...
                </p>

                <h4>Appreciation</h4>
                <p>
                    Your feedback is way more valuable than anything can be purchased. To show my appreciation, a photo of my hug, a chosen $5 gift card or a Waterloo famous <a href='gooseplush.jpg' data-lightbox='gooseplush' title='The Amazing Goose Plush'>Goose Plush</a> will be sent to you.
                </p>

                
            </div>
        </div>

    </div>
		
	</body>
</html>        
</html>