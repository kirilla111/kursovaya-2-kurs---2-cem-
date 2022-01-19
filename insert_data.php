<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    
    $conn = include 'get_conn.php';
    $params;

    if (isset($_GET)){
        $params = $_GET;
    }
    if (!isset($_SESSION["user_signed"])){
        $_SESSION["user_signed"] = false;
    }
    $user_id = 3;
    $isSignUp = $params["info"];
    $address = $params["address"];

    if ($_SESSION["user_signed"]){
        $telephone = $_SESSION['user_telephone'];
        $result =  $conn->query("SELECT id from users where tel_num = '$telephone'");
        $row = $result->fetch_assoc();
        $user_id = $row['id'];
    }

    $arr = $params["items"];
    $strings = array();
    foreach($arr as $key => $item)
    { 
        $json = json_decode($item,true);
        $count = $json['count'];
        $id = $json['id'];
        $date = $params["order_date"];
        $stmt = $conn->prepare("INSERT INTO orders(order_date,user_id,food_id,food_quantity,address) 
        values ('$date',$user_id,$id,$count,'$address')");

        array_push($strings,"INSERT INTO orders(order_date,user_id,food_id,food_quantity) 
        values ('$date',$user_id,$id,$count)");
        $stmt->execute();
    }
    mysqli_close($conn);
?>