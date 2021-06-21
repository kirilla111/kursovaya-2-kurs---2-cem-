<?php
    session_start();
    
    $conn = include 'get_conn.php';
    $params;

    if (isset($_GET)){
        $params = $_GET;
    }

    $user_id = 3;
    $isSignUp = $params["info"];

    if ($isSignUp){
        $telephone = $_SESSION['user_telephone'];
        $result =  $conn->query("SELECT id from users where tel_num = '$telephone'");
        $row = $result->fetch_assoc();
        $user_id = $row['id'];
    }

    $arr = $params["items"];
    
    foreach($arr as $key => $item)
    {
        $json = json_decode($item,true);
        $count = $json['count'];
        $id = $json['id'];
        $date = date('Y-m-d H:i:s');
        $stmt = $conn->prepare("INSERT INTO orders(order_date,user_id,food_id,food_quantity) 
        values ('$date',$user_id,$id,$count)");
        $stmt->execute();
    }

     mysqli_close($conn);
?>