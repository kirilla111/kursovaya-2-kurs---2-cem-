<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    
    if ($_SESSION["courier_signed"]){
        $conn = include 'get_conn.php';
        
        $action = '';
        if (isset($_GET['action'])){
            $action = $_GET['action'];
        }

        $courier_login =  $_SESSION["courier_login"]; 

        if ($action == 'diagramm_info'){
            $sql = $conn->query("select CONCAT( month(order_date), '.' ,year(order_date)) \"date\" ,count(order_date) \"count\" from orders o where status = 'delivered' and courier = '$courier_login' group BY month(order_date) order by (order_date)");
            //$sql = $conn->query("select order_date,count(order_date) from orders o where status = 'delivered' and courier = '$courier_login' group BY month(order_date)");
            
            $data = array();
            while ($row = $sql->fetch_assoc()){
            array_push($data,$row);
            }
            $result['diagramm_info'] = $data;
            echo json_encode($result);
            return;
        }

        $date = $_GET['date'];
        $address = $_GET['address'];
      
        


        if ($action == 'more_info'){
            $sql = $conn->query("select o.food_quantity,fi.food_name,bi.title from orders o
                                    join food_info fi on fi.id  = o.food_id
                                        join brands_info bi on bi.id  = fi.brand_id 
                                    where order_date = '$date' and address = '$address'");
            
            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            $result['more_info'] = $data;
            echo json_encode($result);
        }

        else if ($action == 'confirm'){
            $sql = $conn->query("update orders set  status = 'delivering', courier = '$courier_login' where order_date='$date' and address = '$address'");
            
            echo json_encode($sql);
        }
        
        else if ($action == 'drop'){
            $sql = $conn->query("update orders set  status = 'not delivered', courier = NULL where order_date='$date' and address = '$address'"); 
            echo json_encode($sql);
        }
        else if ($action == 'delivered'){
            $sql = $conn->query("update orders set  status = 'delivered' where order_date='$date' and address = '$address'"); 
            echo json_encode($sql);
        }
        
        mysqli_close($conn);
    }
?>