
document.addEventListener("DOMContentLoaded", function(){
	var ml_goods = document.getElementById("ml_goods");
	var xhr = new XMLHttpRequest();
    var status = [200,304];
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
//      	console.log(xhr.responseText);
            var news=JSON.parse(xhr.responseText);
//          console.log(news);
            ml_goods.innerHTML = news.map(function(item) {
				return '<li idx="' + item.id + '" >' +
					'<img src="' + item.imgurl + '" class="l_goods"/>' +
				 	'<p>' + item.goodsname + '</p>' +
					'<p>￥<span>' + item.price + '</span></p>' ;
			}).join("");
			var l_goods = document.getElementsByClassName("l_goods");
			for(var i = 0; i < l_goods.length; i++) {
				l_goods[i].idx = i;
				l_goods[i].onclick = function() {
					var goods = news[this.idx];
					location.href = "../html/xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&price=" + goods.price ;
				}
			}
        }
    }
    xhr.open("get",`../api/GoodsLeft.php`,true);
    xhr.send(null);
    
})

	

//GoodsRight,渲染到页面上
document.addEventListener("DOMContentLoaded", function(){
	var mr_goods = document.getElementById("mr_goods");
	var page = document.querySelector(".page");
	var xhr = new XMLHttpRequest();
    var status = [200,304];
    var qty = 5;
    var currentPage = 1;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
//      	console.log(xhr.responseText);
            var news=JSON.parse(xhr.responseText);
            render(news);
            console.log(news);
        }
    }
    xhr.open("get",`../api/GoodsRight.php`,true);
    xhr.send(null);
   
	function render(news) {
		mr_goods.innerHTML = news.map(function(item,idx) {
			return '<li data-id="' + item.id + '">' +
				'<img src="' + item.imgurl + '" class="_goods"/>' +
				'<p id="p1"><a href="#" class="_goods">' + item.goodsname + '</a></p>' +
				'<p style="font-size: 14px;	color: red;">￥' + item.price +  '</p>' +
				'<p style="color: #C5C5C5;">' + item.pinjia + '</p>' +
				'<p>' + item.fenqi +'</p>' +
				'<p>' + item.heat + '</p>' +
				'</li>';
		}).join("");
		
		var _goods = document.getElementsByClassName("_goods");
		for(var i = 0; i < _goods.length; i++) {
			_goods[i].idx = i;
			_goods[i].onclick = function() {
				var goods = news[this.idx];
				location.href = "../html/xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&price=" + goods.price ;
			}
		}
	
		var a_goods = document.getElementsByClassName("a_goods");
		for(var i = 0; i < a_goods.length; i++) {
			a_goods[i].idx = i;
			a_goods[i].onclick = function() {
				var goods = news[this.idx];
				location.href = "../html/xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&price=" + goods.price ;
			}
		}
	}
    
	var cc_li = mr_goods.getElementsByTagName('li');
	// 点击按钮排序
	var Acquiesce=document.getElementById('Acquiesce');
//  var Heat = document.getElementById('Heat');
    var Price = document.getElementById('Price');
//  var Sales=document.getElementById('Sales');
    Acquiesce.onclick = function() {
        acquiesce_paixu();
    }
    Heat.onclick = function() {
        heat_paixu();
    }
    Price.onclick = function() {
        price_paixu();
    }
//  Sales.onclick = function() {
//      sales_paixu();
//  }
    function acquiesce_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Acquiesce = cc_li[i];
            arr.push(Acquiesce);
            console.log(arr);
            mr_goods.appendChild(arr[i]);
        }  
    }
//  销量排序
//  function sales_paixu() {
//      var arr = [];
//      for (var i = 0; i < cc_li.length; i++) {
//          var Sales = cc_li[i];
//          arr.push(Sales);
//      }
//      arr.sort(function(a, b) {
//          var num1 = ((a.childNodes[4]).childNodes[1].innerHTML).slice(0, 3);
//          console.log(num1);
//          var num2 = (b.childNodes[4].childNodes[1].innerHTML).slice(0, 3);
//          return num2 - num1;
//      })
//      for (var i = 0; i < arr.length; i++) {
//          mr_goods.appendChild(arr[i]); //替换
//      }
//  }
    // 价格排序
    function price_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Price = cc_li[i];
            arr.push(Price);
            console.log(arr);
        }
        arr.sort(function(a, b) {

//             console.log(((a.childNodes[2]).innerHTML).slice(1, 8));
            var num1 = ((a.childNodes[2]).innerHTML).slice(1, 8);
//          console.log(num1);
            var num2 = (b.childNodes[2].innerHTML).slice(1, 8);
            return num2 - num1;
        })
        for (var i = 0; i < arr.length; i++) {
            mr_goods.appendChild(arr[i]); //替换
        }
    }
//     人气排序
    function heat_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Heat = cc_li[i];
            arr.push(Heat);
            console.log(arr);
        }
        arr.sort(function(a, b) {
        	console.log(((a.childNodes[3]).innerHTML).slice(2,5));
            var num1 = ((a.childNodes[3]).innerHTML).slice(2, 5);
//          console.log(num1);
            var num2 = (b.childNodes[3].innerHTML).slice(2, 5);
            return num2 - num1;
        })
        for (var i = 0; i < arr.length; i++) {
            mr_goods.appendChild(arr[i]); //替换
        }
    }
	// 获取cookie
	var goodsarr = Cookie.getCookie("goodslist") || [];
        if(typeof goodsarr == "string"){
        goodsarr = JSON.parse(goodsarr);
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
})



	

