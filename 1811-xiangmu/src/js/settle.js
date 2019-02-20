document.addEventListener('DOMContentLoaded',()=>{
	
//      var btnPrev =document.getElementById('btnPrev');
//      btnPrev.onclick = function(){
//              history.back();
//      }
        
        var m_ul= document.getElementById('main_car_ul');
        var m_c_b=document.getElementById('m_c_b');
        var con = document.getElementById('tota');
        var btnClear=document.getElementById('btnClear');
		
		
//       btnClear.onclick = function(){
//              m_ul.innerHTML = "";
//              con.innerHTML = 0;
//              Cookie.delCookie("goodslist","/");
//      }
//		
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
			var cart = document.getElementById("cart");
//		    var tota = document.getElementById("tota");
			var xhr = new XMLHttpRequest();
		    var status = [200,304];
		    xhr.onreadystatechange = function(){
		        if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
		//      	console.log(xhr.responseText);
		            var news=JSON.parse(xhr.responseText);
		          	console.log(news);
		            cart.innerHTML = news.map(function(item) {
						return '<li idx="' + item.id + '" >' +
							'<p class="good_check"><input type="checkbox" name="good" value="" /></p>'+
							'<p class="good_img" style="background:url(' + item.imgurl + ') no-repeat;background-size:cover;"></p>'+
							'<p class="good_name ">'+item.goodsname+'</p>'+
						 	'<p class="good_price">' + item.price + '</p>' +
						 	'<p class="good_youhui">0.00</p>'+
						 	'<p class="num">'+
								'<span class="cutnum">-</span>'+
								'<input class="nownum" type="text" value="'+item.qty+'" />'+
								'<span class="addnum">+</span>'+
							'</p>'+
							'<p class="good_total">￥' + item.allprice + '</p>'+
							'<p class="good_del">'+
								'<a href="javascript:;">删除</a>'+
							'</p>';
					}).join("");
//					tota.innerHTML=news[0].allprice;
					

					
		        }
		    }
		    xhr.open("get",`../api/goodscz.php?name=${names}`,true);
		    xhr.send(null);
		    
		}
	    chaxuan();
		
		
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
	    
});
