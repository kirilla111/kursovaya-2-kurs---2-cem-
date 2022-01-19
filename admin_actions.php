<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    //echo "Connected successfully";
      
    if ($_SESSION["login"]){
        
        $table_name = 'food_info';

        $conn = include 'get_conn.php';
        //mysqli_set_charset("utf8");
        
        $result = array('error'=>false);
        $action = '';
        
        if (isset($_GET['action'])){
            $action = $_GET['action'];
        }
        

        if ($action == 'diagramm_info'){
            $sql = $conn->query("select bi.title , count(brand_id) revenue from food_info fi 
                                    join brands_info bi on bi.id = fi.brand_id 
                                        group by brand_id ");
            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            $result['brand_revenue'] = $data;

           
            $sql = $conn->query("select fc.title , count(brand_id) revenue from food_info fi 
                                    join food_category fc on fc.id = fi.category_id 
                                        group by category_id  ");
            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            $result['category_revenue'] = $data;
            

            $sql = $conn->query("select title,rating rating from brands_info bi ");
            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            $result['brand_rating'] = $data;

            $sql = $conn->query(" select CONCAT( month(order_date), '.' ,year(order_date)) \"date\" ,count(order_date) \"count\" from orders o 
                                        where status = 'delivered' group BY month(order_date) ");
            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            $result['order_info'] = $data;

            echo json_encode($result);
            return;
           
            // brand_revenue: [],
            // brand_rating: [],
            // category_revenue: [],
        }

        if ($action == 'read'){
            $sql = $conn->query("SELECT f1.id,food_name,f1.description,price,bi.title brand,f2.title category,f1.image_url as image,false as updated FROM $table_name f1
                                    JOIN food_category f2 on f1.category_id = f2.id
                                        join brands_info bi on bi.id = f1.brand_id ");
            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            $result['food_info'] = $data;


            $sql = $conn->query("select * from couriers ");

            $data = array();
            while ($row = $sql->fetch_assoc()){
                array_push($data,$row);
            }
            
            $result['courier_info'] = $data;


            echo json_encode($result);

        }else if ($action == 'write'){
            $params = $_GET;

            $params = $params['table'];
            
            //$file = 'people.txt';

            //$current = file_get_contents($file);
            $errors = 0;
            $updates = 0;
            
            $brand_id;
            $category_id;
            
            foreach($params as $key => $item)
            {
                $json = json_decode($item,true);
                $updated = $json['updated'];
                $id = $json['id'];
                $food_name = $json['food_name'];
                $brand = $json['brand'];
                $category = $json['category'];
                $description = $json['description'];
                $image = $json['image'];
                $price = $json['price'];
                


                // Procedure 1 ---->
                if ($updated != 0){
                    if (!$conn->multi_query("CALL admin_update_category('$category');")){
                        $errors++;
                    }else{
                        do {
                            if ($result = $conn->store_result()) { 
                                while( $row = $result->fetch_row() ) {
                                    $category_id = $row[0];
                                    //echo $category_id;
                                }
                                $result->close();
                            }
                          } while( $conn->next_result() );
                    }
    
    
                    // Procedure 2 ---->
                    if (!$conn->multi_query("CALL admin_update_brand('$brand')")){
                        $errors++;
                    }else{
                        do {
                            if ($result = $conn->store_result()) { 
                                while( $row = $result->fetch_row() ) {
                                    $brand_id = $row[0];
                                    //echo $brand_id;
                                }
                                $result->close();
                            }
                          } while( $conn->next_result() );
                    }
    
    
                    if ($updated == 1){
                        if (!$conn->query("update $table_name set food_name = '$food_name', price =$price, 
                                            description ='$description', category_id =  $category_id ,
                                                brand_id =$brand_id, image_url='$image' where id = $id ")){
                                                    $errors++;   
                                                    //echo "(" . $conn->errno . ") " . $conn->error;
                                                }
                        else{
                            $updates++;
                            do {
                                if ($result = $conn->store_result()) { 
                                    while( $row = $result->fetch_row() ) {
                                    }
                                    $result->close();
                                }
                              } while( $conn->next_result() );
                        }
                    }
                    elseif ($updated == 2){
                        if (!$conn->query("insert into $table_name(food_name,price,description,category_id,brand_id,image_url)
                                            values ('$food_name',$price,'$description',$category_id,$brand_id,'$image')")){
                            $errors++;   
                        }
                        else{
                            $updates++;
                            do {
                                if ($result = $conn->store_result()) { 
                                    while( $row = $result->fetch_row() ) {
                                    }
                                    $result->close();
                                }
                              } while( $conn->next_result() );
                        }
                        //$current .= " insert there  $id \n";
    
                    }else{
                        if (!$conn->query("delete from $table_name where id = $id")){
                            $errors++;   
                        }
                        else{
                            $updates++;
                            do {
                                if ($result = $conn->store_result()) { 
                                    while( $row = $result->fetch_row() ) {
                                    }
                                    $result->close();
                                }
                              } while( $conn->next_result() );
                        }
                        //$current .= " delete there  $id \n";
                    }
                }
                
            }

            //file_put_contents($file, $current);
            
            echo json_encode(array('errors'=>$errors,'updates'=>$updates));

            //echo json_decode($params['params']);
        }

        //echo json_fix_cyr(json_encode(array("собака","кошка"))); 
        mysqli_close($conn);
        
    }else{
        echo  "CONNECTION ERROR..";
    }

?>