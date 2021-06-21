<?php
    session_start();
    $data = array('error' => false, 'discount' => 0);
    if ($_SESSION["user_signed"]){

        $conn = include 'get_conn.php';

        $tel = $_SESSION["user_telephone"];

        $result = $conn->query("select di.discount from (select sum(fi.price * o.food_quantity) as s from orders o
                                join food_info fi on fi.id = o.food_id 
                                    join users u on o.user_id = u.id 
                                        where u.tel_num = '$tel') g
                            join discount_info di on g.s >= di.start_summ and g.s <= di.end_summ");

        $row = $result->fetch_assoc();
        
        if ($row){
           $data['discount'] = $row['discount'];
        }
        else{
            $data['error'] = true;
        }
        mysqli_close($conn);
    }else{
        $data['error'] = true;
    }
    echo json_encode($data);
?>