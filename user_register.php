ти<?php
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


    if (!$conn->query("insert into users(tel_num,password) values ('$tel','$pass')")) {
        $error = true;
        $_SESSION["user_signed"] = false;
    }else{
        $_SESSION["user_signed"] = true;
        $_SESSION["user_telephone"] = $tel;
    }

    echo json_encode(array('error'=>$error));

    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");
    mysqli_close($conn);
?>