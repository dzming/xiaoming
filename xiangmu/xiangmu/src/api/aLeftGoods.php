<?php
	$uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $pwd = isset($_GET["pwd"])?$_GET["pwd"]:null;
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'xiangmu';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    
    $conn->set_charset('utf8');
    
    $brr = mysqli_query($conn, 'select * from aleftgoods');
    $Brrs = array();
    while($data=mysqli_fetch_array($brr,MYSQLI_ASSOC)){
    	array_push($Brrs,$data);
    }
    
    exit(json_encode($Brrs));
?>