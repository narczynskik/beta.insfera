<?php
$to      = 'krzysztof.narczynski@lucatel.pl';
$subject = $_POST['subject'];
$message = $_POST['message'];

$headers = 'From: ' . $_POST['email'] . "\r\n" .
    'Content-type: text/html; charset=utf-8';

$sukces = mail($to, $subject, $message, $headers);
if($sukces){
  print "Wiadomość została wysłana poprawnie <meta http-equiv=\"refresh\" content=\"1;URL=index.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"2;URL=error.html\">";
}

?>
