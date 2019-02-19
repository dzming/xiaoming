<?php
	$uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $pwd = isset($_GET["pwd"])?$_GET["pwd"]:null;
//  $$register = isset($_GET["$register"])?$_GET["$register"]:null;


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = '1811';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    
    $conn->set_charset('utf8');
    
//	$res = $conn->query('select * from login where uname="'.$uname.'" and pwd="'.$pwd.'"');
//	$check_res = mysqli_num_rows($res);
//	if($check_res!=0){
//		echo "成功";
//	}else{
//		echo "失败";
//	}
	$check_query = $conn->query('select * from login where uname="'.$uname.'" and pwd="'.$pwd.'"');
    // print_r($check_query);
    $res = mysqli_num_rows($check_query);
    // echo $res;
    if(empty($uname)){
        echo "用户名不许为空";
    }else if(empty($pwd)){
        echo "密码不许为空";
    }else if($res != 0){
        echo "登录成功";
        
    }else{
        echo "登录失败";
    }
	

?>