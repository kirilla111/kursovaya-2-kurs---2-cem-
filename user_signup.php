<?php
    session_start();
    
    $conn = include 'get_conn.php';

    $error = false;

    $tel = '';

    if (isset($_GET['tel'])){
        $tel = $_GET['tel'];
    }

    $pass = '';

    if (isset($_GET['pass'])){
        $pass = $_GET['pass'];
    }


    $sql = $conn->query("SELECT * FROM users WHERE tel_num = '$tel' AND password = '$pass'");
    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");

    if ($sql->num_rows > 0) {
        $_SESSION["user_signed"] = true;
        $_SESSION["user_telephone"] = $tel;
    }else{
        $_SESSION["user_signed"] = false;
        $error = true;
    }

    echo json_encode(array('error'=>$error));

    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");
    mysqli_close($conn);
?>