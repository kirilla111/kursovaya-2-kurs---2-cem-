<?php
    session_start();

    $servername = "localhost";
    $database = "test";
    $username = "root";
    $password = "kirilla111";
    // $table_name = "admin_data";
    // $login_field = "login";
    // $password_field = "password";

    // Создаем соединение
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Проверяем соединение
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    //echo "Connected successfully";
    
    $login = '';
    $password = '';
    $result = '';

    if (isset($_GET['login'])){
        $login = $_GET['login'];
    }
    if (isset($_GET['password'])){
        $password = $_GET['password'];
    }

    $sql = $conn->query("SELECT * FROM admin_data WHERE login = '$login' AND password = '$password'");
    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");

    if ($sql->num_rows > 0) {
        $result = true;
    }else{
        $result = false;
    }
    
    $_SESSION['login'] = true;
    echo json_encode(array('password'=>$password,'login'=>$login,'result'=>$result));

    mysqli_close($conn);
?>