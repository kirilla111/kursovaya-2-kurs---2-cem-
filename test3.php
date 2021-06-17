<?php
    session_start();
    if ($_SESSION["login"]){
        echo  "Вы уже авторизированы";
    }else{
        echo  "CONNECTION ERROR..";
    }

?>