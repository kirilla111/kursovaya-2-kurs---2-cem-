<?php
    session_start();

    $conn = include 'get_conn.php';
    $login = '';
    $password = '';

    if (isset($_GET['login'])){
        $login = $_GET['login'];
    }
    if (isset($_GET['password'])){
        $password = $_GET['password'];
    }

    $sql = $conn->query("SELECT * FROM admin_data WHERE login = '$login' AND password = '$password'");
    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");

    if ($sql->num_rows > 0) {
        $_SESSION["login"] = true;
    }else{
        $_SESSION["login"] = false;
    }

    echo json_encode(array('password'=>$password,'login'=>$login,'session'=> $_SESSION['login']));

    mysqli_close($conn);
?>