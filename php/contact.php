<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
    $company = trim($_POST["company"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Lo sentimos, ha ocurido un error. Por favor intenta nuevamente.";
        exit;
    }

    $recipient = "jramondiaz96@gmail.com";

    $subject = "Alguien intenta contactarte desde la página web ProstaCenter";

    $email_content = "Nombre: $name\n";
    $email_content .= "Empresa: $company\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    $email_headers = "De: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "¡Gracias! El equipo de ProstaCenter te contactará pronto.";
    } else {
        http_response_code(500);
        echo "Lo sentimos, ha ocurido un error. Por favor intenta nuevamente.";
    }

} else {
    http_response_code(403);
    echo "Lo sentimos, ha ocurido un error. Por favor intenta nuevamente.";
    http_response_code(405);
    echo 'Method Not Allowed';
}
error_reporting(E_ALL);
ini_set('display_errors', 1);
