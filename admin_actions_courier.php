<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    session_start();
    //echo "Connected successfully";
      
    if ($_SESSION["login"]){
        
        $table_name = 'courier_info';

        $conn = include 'get_conn.php';
        //mysqli_set_charset("utf8");
        
        $result = array('error'=>false);
        $action = '';
        
        if (isset($_GET['action'])){
            $action = $_GET['action'];
        }
        
      if ($action == 'write'){
            $params = $_GET;

            $params = $params['table'];
            
            $errors = 0;
            $updates = 0;
            
            $login;
            $password;
            
            $conn->query("delete from couriers");

            foreach($params as $key => $item)
            {
                $json = json_decode($item,true);
                $login = $json['login'];
                $password = $json['password'];

                if (strlen($login) < 3 || strlen($password) < 3){
                    $errors++;
                    continue;
                }
                
                if ($conn->query("insert into couriers values ('$login', '$password')")){
                    $updates++;
                }else{
                    $errors++;
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