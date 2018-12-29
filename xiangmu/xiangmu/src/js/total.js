window.onload = function(){ 
    // 吸顶
    var nav = document.getElementById("nav");
    var zonge=document.getElementById('zonge');
    var total_t=document.getElementById('total_t');

    
    var arr = Cookie.getCookie("goodslist") || [];
    if(typeof arr == "string"){
        arr = JSON.parse(arr);
    }
    console.log(arr);
    var qtys = 0;
    for(var i = 0; i < arr.length; i++){
        var j =arr[i].qty;
        qtys = qtys+j; 
    }
//  console.log(qtys);
    render3();
    function render3(){
        total_t.innerHTML = qtys;

    
    }
    
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        var j = arr[i].oprice*arr[i].qty;
        sum = sum+j; 
    }
       console.log(sum); 
    render();
    render2();
    function render(){
         nav.innerHTML = '<li>0.5千克（kg）'+'</li>'+
						'<li id="zonge1">'+sum+'</li>'+
						'<li>￥'+0+'</li>'+
						'<li>'+0+'</li>'+
						'<li>'+51+'个</li>';
         			
    }
    function render2(){
         zonge.innerHTML = sum;
         			
    }
	
//	选中付款方式
	var ui_a1=document.querySelector(".ui_a1");
	var ui_a2=document.querySelector(".ui_a2");
	ui_a1.onclick=function(){
		this.style.backgroundColor="#58bc58";
		ui_a2.style.backgroundColor="";
	}
    ui_a2.onclick=function(){
		this.style.backgroundColor="#58bc58";
		ui_a1.style.backgroundColor="";
	}
//	选中快递
    var kd1=document.querySelector(".kd1");
	var kd2=document.querySelector(".kd2");
	var kd3=document.querySelector(".kd3");
	kd1.onclick=function(){
		this.style.backgroundColor="#58bc58";
		kd2.style.backgroundColor="";
		kd3.style.backgroundColor="";
	}
    kd2.onclick=function(){
		this.style.backgroundColor="#58bc58";
		kd1.style.backgroundColor="";
		kd3.style.backgroundColor="";
	}
    kd3.onclick=function(){
		this.style.backgroundColor="#58bc58";
		kd1.style.backgroundColor="";
		kd2.style.backgroundColor="";
	}
    
  
    
    var tijiao=document.getElementById("tijiao");
    tijiao.onclick=function(){
    	
    	if(sum<1){
    		alert("请去挑选商品");
    		location.href="../html/List.html";
    	}else{
    		alert("结算成功");
    	}
    }
}
