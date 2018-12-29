
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
					'<p>原价：￥<span>' + item.lprice + '</span></p>' +
					'<p>现价：￥<span>' + item.oprice + '</span></p>' +
					'<p>已售' + item.quantity + '</p></li>';
			}).join("");
			var l_goods = document.getElementsByClassName("l_goods");
			for(var i = 0; i < l_goods.length; i++) {
				l_goods[i].idx = i;
				l_goods[i].onclick = function() {
					var goods = news[this.idx];
					location.href = "../html/xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&lprice=" + goods.lprice + "&oprice=" + goods.oprice + "&quantity=" + goods.quantity + "&heat=" + goods.heat;
				}
			}
        }
    }
    xhr.open("get",`../api/aLeftGoods.php`,true);
    xhr.send(null);
    
})



//调用数据库aRightGoods表,渲染到页面上
document.addEventListener("DOMContentLoaded", function(){
	var mr_goods = document.getElementById("mr_goods");
	var page = document.querySelector(".page");
	var xhr = new XMLHttpRequest();
    var status = [200,304];
    var qty = 5;
    var currentPage = 1;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
        	console.log(xhr.responseText);
            var news=JSON.parse(xhr.responseText);
            render(news);
            console.log(news);
        }
    }
    xhr.open("get",`../api/aRightGoods.php`,true);
    xhr.send(null);
   
	function render(news) {
		mr_goods.innerHTML = news.map(function(item,idx) {
			return '<li data-id="' + item.id + '">' +
				'<img src="' + item.imgurl + '" class="_goods"/>' +
				'<p><a href="#" class="_goods">' + item.goodsname + '</a></p>' +
				'<p>原价：￥<span>' + item.lprice +  '</span></p>' +
				'<p>现价：￥<span>' + item.oprice +  '</span></p>' +
				'<p>已售：<span>' + item.quantity +'<span></p>' +
				'<p>heat：<span>' + item.heat +  '</span></p>' +
				'</li>';
		}).join("");
		
//      var totalPage = Math.ceil(news.len/news.qty);
//      page.innerHTML = "";
//      for(var i=1;i<=totalPage;i++){
//          var span = document.createElement("span");
//          span.innerHTML = i;
//          if(i == news.currentPage){
//              span.classList.add("active");
//          }
//          page.appendChild(span);
//      }
		var _goods = document.getElementsByClassName("_goods");
		for(var i = 0; i < _goods.length; i++) {
			_goods[i].idx = i;
			_goods[i].onclick = function() {
				var goods = news[this.idx];
				location.href = "../html/xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&lprice=" + goods.lprice + "&oprice=" + goods.oprice + "&quantity=" + goods.quantity + "&heat=" + goods.heat;
			}
		}
	
		var a_goods = document.getElementsByClassName("a_goods");
		for(var i = 0; i < a_goods.length; i++) {
			a_goods[i].idx = i;
			a_goods[i].onclick = function() {
				var goods = news[this.idx];
				location.href = "../html/xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&lprice=" + goods.lprice + "&oprice=" + goods.oprice + "&quantity=" + goods.quantity + "&heat=" + goods.heat;
			}
		}
	}
//	xhr.open("get","../api/aRightGoods.php?qty="+qty+"&currentPage="+currentPage,true);
//  xhr.send(null);
//	//2.点击page，获取当前页码，再次发起请求
//  page.onclick = function(e){
//      if(e.target.tagName == "SPAN"){
//          currentPage = e.target.innerHTML;
//          xhr.open("get","../api/aRightGoods.php?qty="+qty+"&currentPage="+currentPage,true);
//          xhr.send(null);
//      }
//  }
//  console.log(page);
    
	var cc_li = mr_goods.getElementsByTagName('li');
	// 点击按钮排序
	var Acquiesce=document.getElementById('Acquiesce');
    var Heat = document.getElementById('Heat');
    var Price = document.getElementById('Price');
    var Sales=document.getElementById('Sales');
    Acquiesce.onclick = function() {
        acquiesce_paixu();
    }
    Heat.onclick = function() {
        heat_paixu();
    }
    Price.onclick = function() {
        price_paixu();
    }
    Sales.onclick = function() {
        sales_paixu();
    }
    function acquiesce_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Acquiesce = cc_li[i];
            arr.push(Acquiesce);
            console.log(arr);
            mr_goods.appendChild(arr[i]);
        }
//      
    }
//  销量排序
    function sales_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Sales = cc_li[i];
            arr.push(Sales);
        }
        arr.sort(function(a, b) {
            var num1 = ((a.childNodes[4]).childNodes[1].innerHTML).slice(0, 3);
            console.log(num1);
            var num2 = (b.childNodes[4].childNodes[1].innerHTML).slice(0, 3);
            return num2 - num1;
        })
        for (var i = 0; i < arr.length; i++) {
            mr_goods.appendChild(arr[i]); //替换
        }
    }
    // 价格排序
    function price_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Price = cc_li[i];
            arr.push(Price);
//          console.log(arr);
        }
        arr.sort(function(a, b) {

//             console.log(((a.childNodes[3]).childNodes[1].innerHTML));
            var num1 = ((a.childNodes[3]).childNodes[1].innerHTML).slice(0, 3);
//          console.log(num1);
            var num2 = (b.childNodes[3].childNodes[1].innerHTML).slice(0, 3);
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
            var num1 = ((a.childNodes[5]).childNodes[1].innerHTML).slice(0, 3);
            console.log(num1);
            var num2 = (b.childNodes[5].childNodes[1].innerHTML).slice(0, 3);
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
        
	//头部购物车
//	function getCarLi(){
//      var ulHt = document.getElementsByClassName("h_t_r_2")[0];
//      var cartli = document.getElementById("CartLi");
//      var Subtotal = 0;
//      var allqty = 0;
//      var ulres = goodsarr.map(function(item){
//          Subtotal += item.oPrice*item.qty;
//          allqty += item.qty;
//          return '<li><a>'+
//                  '<span style="background:url('+item.imgurl+')no-repeat;background-size:cover;"></span>'+item.name+'</a>'+
//                  '<i>$'+item.oPrice+' × '+item.qty+'</i>'+
//                  '</li>'
//      }).join("");
//      ulres = ulres + '<p>Subtotal:<span>'+Subtotal+'</span></p>'+
//      '<p><a href="../html/m_total.html"><input type="button" name="" id="" value="Checkout" /></a></p>';
//      ulHt.innerHTML = ulres;
//
//      cartli.children[0].innerHTML = '<span></span>'+allqty+' Items <span>$'+Subtotal+'</span> <span></span>';
//  }
//  getCarLi();
	
})




	

