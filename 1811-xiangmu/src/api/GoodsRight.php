<?php
	$uname = isset($_GET["uname"])?$_GET["uname"]:null;
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
    
    $res = mysqli_query($conn, 'select * from goodsright');
    $Arrs = array();
    while($arry=mysqli_fetch_array($res,MYSQLI_ASSOC)){
    	array_push($Arrs,$arry);
    }
    exit(json_encode($Arrs));
    
//  
//  $qty = isset($_GET["qty"])? $_GET["qty"]: 5;
//  $currentPage = isset($_GET["currentPage"])? $_GET["currentPage"]: 1;
//
//  $content = json_decode($content,true);
//  $len = count($content);
//  $data = array_slice($content,($currentPage-1)*$qty,$qty);
//  $res = array(
//      "data" => $data,
//      "len" => $len,
//      "qty" => $qty,
//      "currentPage" => $currentPage
//  );
//  echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>