<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    
    $conn = include 'get_conn.php';

    $error = false;

    $cour_lgn = '';

    if (isset($_GET['cour_lgn'])){
        $cour_lgn = $_GET['cour_lgn'];
    }

    $cour_pwd = '';

    if (isset($_GET['cour_pwd'])){
        $cour_pwd = $_GET['cour_pwd'];
    }

    $query = "SELECT * FROM couriers WHERE login = '$cour_lgn' AND password = '$cour_pwd'";
    $sql = $conn->query("SELECT * FROM couriers WHERE login = '$cour_lgn' AND password = '$cour_pwd'");

    if ($sql->num_rows > 0) {
        $_SESSION["courier_signed"] = true;
        $_SESSION["courier_login"] = $cour_lgn;
    }else{
        $_SESSION["courier_signed"] = false;
        $error = true;
    }

    echo json_encode(array('error'=>$error,$query));

    mysqli_close($conn);
?>