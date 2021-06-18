<?php
    $conn = include 'get_conn.php';
    
    
    $sql = $conn->query("SELECT * FROM food_category ");
    
    $data = array();

    while ($row = $sql->fetch_assoc()){
        array_push($data,$row);
    }

    $result['category_info'] = $data;

    echo json_encode($result);

    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");
    mysqli_close($conn);
?>