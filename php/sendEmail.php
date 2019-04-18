<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, origin");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


  $email = $_POST['userInfo']['email'];
	$headers.= "From: no-reply@chubbykitchen.com ";
  $to      = $email;
  $subject = 'event Info';
  $message = $email;
  mail($to, $subject, $message, $headers);

  
  echo $_POST['eventInfo']['title'];
  echo "\n";
  echo $email;

?>
