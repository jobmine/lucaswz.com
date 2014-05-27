<?php
$company = $_POST['company'];
$location = $_POST['location'];
$location2 = $_POST['location2'];
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$reply = $_POST['reply'];
$fp = fopen("whoops.txt", "a");
$savestring = $company . " - " . $location . ", " . $location2 . "\n" . $name . " / " . $email . " (" . $reply . ")\n" . $comment . "\n\n------------------------------\n\n";
fwrite($fp, $savestring);
fclose($fp);
$companyurl = ucfirst(strtok($company, " "));
$nameurl = ucfirst(strtolower(strtok($name, " ")));
header("Location: http://lucaswz.com/#thanks&" . $companyurl . "&" . $nameurl);
die();
?>