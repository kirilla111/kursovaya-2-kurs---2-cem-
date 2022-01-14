<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    

    if ($_SESSION['user_signed']){
        $conn = include 'get_conn.php';


        $error = false;

        $tel = '';

        if (isset($_GET['tel'])){
            $tel = $_GET['tel'];
        }
        
        $prev_tel = $_SESSION["user_telephone"];

        $conn->query("UPDATE users SET tel_num = '$tel' WHERE tel_num = '$prev_tel'");
        $_SESSION["user_telephone"] = $tel;
        mysqli_close($conn);
    }
?>