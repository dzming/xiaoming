/*
 	需求：
 		* 点击加减改变数量
 		* 小计
 		* 删除当行
 		* 全选、不选
 		* 全删
 		* 总数量、总价格
*/

$(function() {
	
	//购物车的数据应该是从订单表渲染得到的。订单表又是动态添加数据的
	
	//1.渲染
	
	//2.点击加减改变数量
	$('#cart').on('click','.addnum',function() {
//		console.log($(this));
		var val = $(this).prev().val();
//		console.log(val);
		val++;//自增一
		if(val >= 100) {//库存量
			val = 100;
		}
		$(this).prev().val(val);//赋值
		goodTotal($(this));
	});
	
	//减数量
	$('#cart').on('click','.cutnum',function() {
//		console.log($(this));
		var val = $(this).next().val();
//		console.log(val);
		val--;//自增一
		if(val <= 1) {//库存量
			val = 1;
		}
		$(this).next().val(val);//赋值
		goodTotal($(this));
	});
	
	//3.小计的运算：单价*数量
	function goodTotal(now) {
		//找单价
		var price = now.parent().prev().prev().text() * 1;
		
		//找数量
		var num = now.parent().find('input').val() * 1;
//		console.log(price,num);
		
		//小计=单价*数量
		var total = (price * num).toFixed(2);
		console.log(price,num,total);
		now.parent().next().html('￥&nbsp;' + total);//设置值
		NumPrice();
	}
	
	
	//3.删除当行
	$('#cart').on('click','.good_del',function() {
		var res = confirm('您确定要删除吗？');
		if(res) {
			$(this).parent().remove();
//			var btnClear=document.getElementById("btnClear");
		    function shanchu3(){
		    	var names = Cookie.getCookie("uname");
		    	console.log(names);
		    	var status = [200,304];
				var register = true;
		        var xhr = new XMLHttpRequest();
		        xhr.onreadystatechange = function(){
		            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
		                console.log(xhr.responseText);
						alert('删除成功');
						chaxuan();
		            }
		        }
		        xhr.open("get",`../api/goodssc.php?name=${names}`,true);
		        xhr.send(null);
		    }
		    shanchu3();
			update();//判断是否删完了
			NumPrice();
		}
	});
	
	function update() {
		if($('.addnum').length == 0) {
			//已结删完所有的行，没有必要保留总价了
			$('#del').css('display','none');
		}
	}
	
	//4.选中单行
	$('#cart').on('click','.good_check input',function() {
//		console.log($(this).prop('checked'));
		NumPrice();
	});
	
	//总数量和总价
	var arr = [];//存被选中的行的下标数
	function NumPrice() {
		arr = [];
		for(var i = 0; i < $('.good_check input').length; i++) {
			if($('.good_check input').eq(i).prop('checked')) {
				arr.push(i);
			}
		}
		
		if(arr.length == $('.good_check input').length) {
			//所有商品被选中了，控制权限勾上
			$('#allchecked input').prop('checked','checked');
		}else{
			$('#allchecked input').removeAttr('checked');
		}
//		console.log(arr);
		
		var priceAll = 0;//总价
		var numAll = 0;//总数量
		
		for(var i = 0; i < arr.length; i++) {
			numAll += $('.nownum').eq(arr[i]).val() * 1;
			priceAll += $('.good_total').eq(arr[i]).text().substring(1) * 1;
		}
		
//		console.log(numAll);
		console.log(priceAll);
		$('#allnum').html('已选 '+numAll+' 件商品');
		$('#totalprice').html('总计（不含运费）：' + priceAll.toFixed(2));
	}
	
	
	//5.全选、不选
	//attr绑定属性     表单某些属性是有行为的：这种属性需要用prop去绑定
	$('#allchecked input').on('click',function() {
		if($(this).prop('checked')) {
			//给所有的复选框都勾上
			$('.good_check input').prop('checked','checked');
		}else{
			$('.good_check input').removeAttr('checked');
		}
		NumPrice();
	});
	
	//6.全删
	$('#delall').on('click', function() {
		console.log(arr);
		var res = confirm('您真的不要我了吗');
		if(res) {
			for(var i = arr.length -1 ; i >= 0 ; i--) {//从尾部开始删除
				console.log(arr[i] + 1);
				$('#cart li').eq(arr[i] + 1).remove();
				function shanchu2(){
			    	var names = Cookie.getCookie("uname");
			    	console.log(names);
			    	var status = [200,304];
					var register = true;
			        var xhr = new XMLHttpRequest();
			        xhr.onreadystatechange = function(){
			            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
			                console.log(xhr.responseText);
							window.location.href="settle改.html";
			            }
			        }
			        xhr.open("get",`../api/goodssc.php?name=${names}`,true);
			        xhr.send(null);
			    }
			    shanchu2();
				update();
				NumPrice();
			}
		}
		
	});
	
	//手动输入
	$('#cart').on('input','.nownum',function() {
		goodTotal($(this));
		NumPrice();
	});
	
});
