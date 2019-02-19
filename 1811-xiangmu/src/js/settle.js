document.addEventListener('DOMContentLoaded',()=>{
	
        var btnPrev =document.getElementById('btnPrev');
        btnPrev.onclick = function(){
                history.back();
        }
        
        var m_ul= document.getElementById('main_car_ul');
        var m_c_b=document.getElementById('m_c_b');
        var con = document.getElementById('tota');
        var btnClear=document.getElementById('btnClear');
		
		
         btnClear.onclick = function(){
                m_ul.innerHTML = "";
                con.innerHTML = 0;
                Cookie.delCookie("goodslist","/");
        }
		
		var names = Cookie.getCookie("uname");
//	    console.log(names);
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
	    
//	    查询数据库渲染数据
		function chaxuan(){
			var names = Cookie.getCookie("uname");
			var main_car_ul = document.getElementById("main_car_ul");
		    var tota = document.getElementById("tota");
			var xhr = new XMLHttpRequest();
		    var status = [200,304];
		    xhr.onreadystatechange = function(){
		        if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
		//      	console.log(xhr.responseText);
		            var news=JSON.parse(xhr.responseText);
		          	console.log(news);
		            main_car_ul.innerHTML = news.map(function(item) {
						return '<li idx="' + item.id + '" >' +
							'<i style="background:url(' + item.imgurl + ') no-repeat;background-size:cover;"></i>'+
							'<p class="idx">ID:'+item.uid+'</p>'+
						 	'<p class="price">￥' + item.price + '</p>' +
						 	'<p class="youhui">0.00</p>'+
						 	'<input class="btn0" type="button" value="-" />'+'<input type="text" class="txt" value="'+item.qty+'" />'+'<input class="btn" type="button" value="+" />'+
							'<p class="allprice">￥' + item.allprice + '</p>'+
							'<a class="btn-close">&times;</a>';
					}).join("");
					tota.innerHTML=news[0].allprice;
//					点击增加
					

						
					
		        }
		    }
		    xhr.open("get",`../api/goodscz.php?name=${names}`,true);
		    xhr.send(null);
		    
		}
	    chaxuan();
	   $('#main_car_ul').on('click','li .btn',function() {
			console.log(news[0].qty);
			var val =news[0].qty;
			var nama1=news[0].name;
			var goodsnama1=news[0].goodsnama;
			var imgurl1=news[0].imgurl;
			var price1=news[0].price;
			var uid1=news[0].uid;
	//		console.log(val);
			val++;//自增一
			if(val >= 100) {//库存量
				val = 100;
			}
			var allprice1=val*price1;
			
			console.log(allprice1);
			var xhr = new XMLHttpRequest();
		    var status = [200,304];
		    xhr.onreadystatechange = function(){
		        if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
		      	console.log(xhr.responseText);
//					            var news=JSON.parse(xhr.responseText);
				
		        }
		    }
		    xhr.open("get",`../api/goodsjia.php?name=${nama1}&imgurl=${imgurl1}&goodsname=${goodsnama1}&price=${price1}&qty=${val}&uid=${uid1}&allprice=${allprice1}`,true);
			xhr.send(null);
		});
		
	    var btnsc = document.getElementsByClassName('.btn-close');
	    btnsc.onclick = function(){
	    	var qty=1;
			var status = [200,304];
			var register = true;
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function(){
	            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
	                console.log(xhr.responseText);
					alert('添加成功');
	            }
	        }
	        xhr.open("get",`../api/goodsjia.php?name=${names}&imgurl=${goods.imgurl}&goodsname=${goods.name}&price=${goods.price}&qty=${qty}&uid=${goods.id}&allprice=${goods.price}&register=${register}`,true);
	        xhr.send(null);
	    }
	    var btnClear=document.getElementById("btnClear");
	    btnClear.onclick=function(){
	    	var names = Cookie.getCookie("uname");
	    	console.log(names);
	    	var status = [200,304];
			var register = true;
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function(){
	            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
	                console.log(xhr.responseText);
					alert('清空成功');
					chaxuan();
	            }
	        }
	        xhr.open("get",`../api/goodssc.php?name=${names}`,true);
	        xhr.send(null);
	    }
});
