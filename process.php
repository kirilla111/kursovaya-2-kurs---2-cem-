<?php
    $servername = "localhost";
    $database = "test";
    $username = "root";
    $password = "kirilla111";
    // Создаем соединение
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Проверяем соединение
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    //echo "Connected successfully";
    
    $result = array('error'=>false);
    $action = '';

    if (isset($_GET['action'])){
        $action = $_GET['action'];
    }

    if ($action == 'read'){
        $sql = $conn->query("SELECT * FROM test_table");
        $users = array();
        while ($row = $sql->fetch_assoc()){
            array_push($users,$row);
        }
        $result['test_table'] = $users;
    }
    echo json_encode($result);
    
    mysqli_close($conn);
?>