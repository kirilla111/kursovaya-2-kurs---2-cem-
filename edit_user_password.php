<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    

    if ($_SESSION['user_signed']){
        $conn = include 'get_conn.php';


        $error = false;

        $pass = '';

        if (isset($_GET['pass'])){
            $pass = $_GET['pass'];
        }
        
        $tel = $_SESSION["user_telephone"];

        $conn->query("UPDATE users SET password = '$pass' WHERE tel_num = '$tel'");

        mysqli_close($conn);
    }
?>