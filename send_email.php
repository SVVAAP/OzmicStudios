<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "workwithsen10games@gmail.com";
    $headers = "From: $email";

    $email_body = "You have received a new message from $name.\n\n" .
        "Email: $email\n" .
        "Subject: $subject\n" .
        "Message:\n$message";

    mail($to, $subject, $email_body, $headers);
}
?>
