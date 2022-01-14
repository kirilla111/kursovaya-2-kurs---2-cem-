<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    $data = array('error' => false, 'discount' => 0);

    if ($_SESSION["courier_signed"]){
        $conn = include 'get_conn.php';
        $cour_lgn = $_SESSION["courier_login"];

        $sql = $conn->query("select fi.*,bi.title as brand,bi.rating from food_info fi 
        join brands_info bi on bi.id = fi.brand_id  ");
        
        $data = array();
        
        while ($row = $sql->fetch_assoc()){
            array_push($data,$row);
        }

        $result['orders_info'] = $data;

        echo json_encode($result);
        mysqli_close($conn);
    }
?>