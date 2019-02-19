<?php
    $name = isset($_GET["name"])?$_GET["name"]:null;
    $pwd = isset($_GET["pwd"])?$_GET["pwd"]:null;
    $uid = isset($_GET["uid"])?$_GET["uid"]:null;
    $imgurl = isset($_GET["imgurl"])?$_GET["imgurl"]:null;
	$price = isset($_GET["price"])?$_GET["price"]:null;
	$qty = isset($_GET["qty"])?$_GET["qty"]:null;
	$goodsname = isset($_GET["goodsname"])?$_GET["goodsname"]:null;
	
	$allprice = isset($_GET["allprice"])?$_GET["allprice"]:null;
//  $gender = isset($_GET["gender"])?$_GET["gender"]:null;
    $register = isset($_GET["register"])?$_GET["register"]:null;

    // 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = '1811';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }

    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $cz1 = $conn->query('select * from goods where name="'.$name.'"');
    if($cz1->num_rows > 0){
        $res1 = $conn -> query('delete from goods WHERE name="'.$name.'"');
        echo "清除成功";
    }else{
        echo "清除失败";
    }




?>