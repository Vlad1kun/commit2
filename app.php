<?php

//Сбор текста с форм
$name = $_POST['nam'];
$tel = $_POST['phon'];

//Telegram:

//Имя отправителя(бота)
//$from = 'НСК натяжные потолки';

//Токен бота
$token = "6572692881:AAFxEdbVWxM_W6nUTibM_nuYH0Mf4746qvk";

//Айди чата/пользователя
$chat_id = "-4040503588";

$arr = array(
'Новый клиент: ' => $name,
'Телефон: ' => $tel
);

foreach($arr as $key => $value) {
$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
header("Location: index.html");
exit();
?>
