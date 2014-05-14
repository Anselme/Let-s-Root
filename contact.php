<?php

//var_dump($_POST);
$mailSent = false ;

$emailTo = 'stephane@letsroot.net';
$name = $_POST['name'];
$courriel = $_POST['email'];
$subject = $_POST['subject']. " ... un message du formulaire de contact de Letsroot !";
$message = wordwrap($_POST['message'], 70, "\r\n");
$spam = $_POST['tel'];

if($spam == ''){

$body = <<<EOD
    Nom: $name \n\n
    Courriel: $courriel \n\n
    Sujet: $subject \n\n
    Message:\n\n $message
EOD;

    $headers = 'From: Let\'s Root <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $courriel;

    $mailSent = mail($emailTo, $subject, $body, $headers);
}

$mailSent ? $result = "ok" : $result = "ko";

echo $result;
