<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    
    if ($_SESSION["courier_signed"]){
        $conn = include 'get_conn.php';

        $sql = $conn->query("select order_date,address from orders o where status = 'not delivered' group by order_date");
        $data = array();
        while ($row = $sql->fetch_assoc()){
            array_push($data,$row);
        }
        $result['orders'] = $data;
        
        $courier_login = $_SESSION["courier_login"];
        $sql = $conn->query("select order_date,address from orders o where status = 'delivering' and courier ='$courier_login' group by order_date");
        $data = array();
        while ($row = $sql->fetch_assoc()){
            array_push($data,$row);
        }
        $result['deliveries'] = $data;

        echo json_encode($result);
        mysqli_close($conn);
    }
?>