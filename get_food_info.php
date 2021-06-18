<?php
    $conn = include 'get_conn.php';
    
    $data = array();
    
    $category_id;
    
    if (isset($_GET['category'])){
        $category_id = $_GET['category'];
    }
    
    $sql = $conn->query("SELECT * FROM food_info fi 
                                where category_id = $category_id  ");

    while ($row = $sql->fetch_assoc()){
        array_push($data,$row);
    }
    $result['food_info'] = $data;
    echo json_encode($result);

    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");
    mysqli_close($conn);
?>