<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    $servername = "localhost";
    $database = "web_2_2";
    $username = "root";
    $password = "kirilla111";

    $conn = mysqli_connect($servername, $username, $password, $database);
    //$conn = $connection->query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

    // Проверяем соединение
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $conn->set_charset("utf-8");

    //echo "Connected successfully";
    return $conn;

?>