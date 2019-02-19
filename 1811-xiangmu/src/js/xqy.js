window.onload = function() {
	var txt = document.getElementById('txt');
	var jia = document.getElementById('jia');
	var jian = document.getElementById('jian');
	var num1 = document.getElementById("num1");
	var jiage=document.getElementById('jiage');
	var mingzi=document.getElementById('mingzi');


	
	// 获取cookie
	var goodsarr = Cookie.getCookie("goodslist") || [];
        if(typeof goodsarr == "string"){
        goodsarr = JSON.parse(goodsarr);
    }
      console.log(goodsarr);

    // 获取列表页参数信息，并设置详情页
    var sp1 = document.getElementById('sp1');
	var params = decodeURI(location.search.slice(1));
	var sp = document.getElementById("sp");
	var goods = {};
	var paramsArr = params.split("&");
    paramsArr.forEach(function(item){
        var arr = item.split("=");
        goods[arr[0]] = arr[1];
    })

    sp1.src=goods.imgurl;
	sp.src = goods.imgurl;
	sp.setAttribute("data-id",goods.id);
	var addCart = document.getElementById("addCart");

	var imgssd=goods.imgurl;
	console.log(imgssd);
	console.log(goods);
	//点击添加购物车
	addCart.onclick = function(){
		var qty=1;
		console.log(goods.name);
		console.log(names);
		console.log(goods);
		var status = [200,304];
		var register = true;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                console.log(xhr.responseText);
//				alert('添加成功');
            }
        }
        xhr.open("get",`../api/goodsxq.php?name=${names}&imgurl=${goods.imgurl}&goodsname=${goods.name}&price=${goods.price}&qty=${qty}&uid=${goods.id}&allprice=${goods.price}&register=${register}`,true);
        xhr.send(null);
	}
	
//	console.log($goodslist);
//  商品名渲染
   	mingzi.innerHTML=goods.name;
//	商品价格渲染
	jiage.innerHTML=goods.price;

    function fn(liid,bg){
        var box = document.getElementById("sp");
        var obj = document.getElementById(liid);

        obj.onmouseover = function(){
            box.src = bg;
        }
    }
	var names = Cookie.getCookie("uname");
    console.log(names);
    function logins(){
    	if(names!=0){
	    	$('#top_p2').css('display','block');
	    	$('#top_p1').css('display','none');
	    	$('#yonghu').html(names).css('color','red');
	    }else{
	    	$('#top_p2').css('display','none');
	    	$('#top_p1').css('display','block');
	    }
	    
    }
    logins();
    var tuichu=document.getElementById("tuichu");
    tuichu.onclick=function(){
    	Cookie.delCookie("uname","/");
    	$('#top_p2').css('display','none');
    	$('#top_p1').css('display','block'); 
    }
 

}
