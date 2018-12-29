window.onload = function() {
	var txt = document.getElementById('txt');
	var jia = document.getElementById('jia');
	var jian = document.getElementById('jian');
	var num1 = document.getElementById("num1");
	var qian = document.getElementById('qian');
	var yuanjia=document.getElementById('yuanjia');
	var mingzi=document.getElementById('mingzi');
	var yishou =document.getElementById('yishou');
//	var zoom1=document.getElementById('zoom1');
	//商品数量以及价钱
	jia.onclick = function() {
		var _txt = txt.value;
//		_txt++;
		txt.value = _txt;
		num1.innerHTML = goods.oprice+" 元x" + txt.value + "=" + parseInt(txt.value * goods.oprice * 100) / 100 + "元";
	}
	jian.onclick = function() {
		var _txt = txt.value;
		if(_txt > 0) {
//			_txt--;
			txt.value = _txt;
		} else if(_txt <= 0) {
			_txt = 0;
			txt.value = _txt;
		}
		num1.innerHTML = goods.oprice+" 元" + txt.value + "=" + parseInt(txt.value * goods.oprice * 100) / 100 + "元";
	}
	
	// 获取cookie
	var goodsarr = Cookie.getCookie("goodslist") || [];
        if(typeof goodsarr == "string"){
        goodsarr = JSON.parse(goodsarr);
    }
    //console.log(goodsarr);

    // 获取列表页参数信息，并设置详情页
    var sp1 = document.getElementById('sp1');
//  var zoom1=document.getElementById('zoom1');
//  var zoom1=document.getElementById('zoom2');
	var params = decodeURI(location.search.slice(1));
	var sp = document.getElementById("sp");
	var goods = {};
	var paramsArr = params.split("&");
    paramsArr.forEach(function(item){
        var arr = item.split("=");
        goods[arr[0]] = arr[1];
    })
// 	zoom1.href=goods.imgurl;
// 	
// 	zoom2.href=goods.imgurl;
    sp1.src=goods.imgurl;
	sp.src = goods.imgurl;
	sp.setAttribute("data-id",goods.id);
	var addCart = document.getElementById("addCart");

	

	//点击添加购物车
	addCart.onclick = function(){
		var i;
        var res = goodsarr.some(function(item,idx){
            i = idx;
            return item.id == goods.id;
        });
        if(res){
        	goodsarr[i].qty += parseInt(txt.value);
        	goodsarr[i].allprice = parseInt(goodsarr[i].qty * goods.oprice * 100) / 100;
        }
        else{
			goods.qty = parseInt(txt.value);
			goods.allprice = parseInt(txt.value * goods.oprice * 100) / 100;
			goodsarr.push(goods);
        }
		console.log("加入成功");
        // var d = new Date();
        Cookie.setCookie("goodslist",JSON.stringify(goodsarr),"","/");
//		getCarLi();

		

	}
	
//	console.log($goodslist);
	
//  console.log(window.innerWidth);
   
   
//  商品名渲染
   	mingzi.innerHTML=goods.name;
// 	图片渲染
//	zoom1.innerHTML= '<a href=" + item.imgurl + "/>' + + '</a>';
	
// 	已售渲染
   	yishou.innerHTML=goods.heat;
// 	原价渲染
	yuanjia.innerHTML=goods.lprice;
//	商品价格渲染
	qian.innerHTML=goods.oprice;
//	 打印价格
	num1.innerHTML = goods.oprice+"元x" + txt.value + "=" + parseInt(txt.value * goods.oprice * 100) / 100 + "元";
	



    function fn(liid,bg){
            var box = document.getElementById("sp");
            var obj = document.getElementById(liid);

            obj.onmouseover = function(){
                box.src = bg;
            }

        }

 

}
