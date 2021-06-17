<?php
    $servername = "localhost";
    $database = "web_2_2";
    $username = "root";
    $password = "kirilla111";
    // $table_name = "admin_data";
    // $login_field = "login";
    // $password_field = "password";
    // Создаем соединение
    //$mysqli = new mysqli($servername, $username, $password, $database);
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Проверяем соединение
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $conn->set_charset("utf-8");

    //echo "Connected successfully";
    return $conn;

?>