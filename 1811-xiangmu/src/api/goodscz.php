<?php
	$name = isset($_GET["name"])?$_GET["name"]:null;
    $pwd = isset($_GET["pwd"])?$_GET["pwd"]:null;
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = '1811';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    
    $conn->set_charset('utf8');
    
    $brr = mysqli_query($conn, 'select * from goods where name="'.$name.'"');
    $Brrs = array();
    while($data=mysqli_fetch_array($brr,MYSQLI_ASSOC)){
    	array_push($Brrs,$data);
    }
    
    exit(json_encode($Brrs));
?>