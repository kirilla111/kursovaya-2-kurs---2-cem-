<?php
    session_start();
    //echo "Connected successfully";
      
    if ($_SESSION["login"]){
        
        $conn = include 'get_conn.php';
        //mysqli_set_charset("utf8");
        
        $result = array('error'=>false);
        $action = '';
        
        if (isset($_GET['action'])){
            $action = $_GET['action'];
        }
        
        if ($action == 'read'){
            $sql = $conn->query("SELECT f1.id,food_name,f1.description,price,bi.title brand,f2.title category,image_url as image,false as updated FROM food_info f1
                                    JOIN food_category f2 on f1.category_id = f2.id
                                        join brands_info bi on bi.id = f1.brand_id ");
            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            $result['food_info'] = $data;
        }
        echo json_encode($result);
        //echo json_fix_cyr(json_encode(array("собака","кошка"))); 
        mysqli_close($conn);
        
    }else{
        echo  "CONNECTION ERROR..";
    }

?>