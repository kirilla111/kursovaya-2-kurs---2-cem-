<?php
    $conn = include 'get_conn.php';

    $sql = $conn->query("select fi.*,bi.title as brand,bi.rating from food_info fi 
	join brands_info bi on bi.id = fi.brand_id  ");
    
    $data = array();
    
    while ($row = $sql->fetch_assoc()){
    
        array_push($data,$row);
    
    }
    $result['food_info'] = $data;
    echo json_encode($result);

    //$sql = $conn->query("SELECT * FROM :table_name WHERE :field1 = :var1 AND :field2 = :var2");
    mysqli_close($conn);
?>