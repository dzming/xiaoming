document.addEventListener("DOMContentLoaded", function(){
    var uname = document.getElementById("usernamel");
    var pwd = document.getElementById("passwordl");
    var sub = document.getElementById("loginbtn");
    

    sub.onclick = function(){
//  	console.log(uname);
			var $register  = true;
			var status = [200,304];
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                	
                    alert(xhr.responseText);
                    if(xhr.responseText=="登录成功"){
                    	
                    	window.location.href="../index.html";
                    	
                	   
                    }
//                  function cookis(){
//                  	 var _uname=uname.value;
//	//					document.cookie = "name="+_uname;
//						var date = new Date();  
//						date.setDate(date.getDate() +7); 
//						document.cookie = "name="+_uname+";expires=" + date.toUTCString()+"path="+"/";
//						//获取
//						var cookies = document.cookie;
//                  }
//                 cookis();
//					console.log(xhr.responseText);
//              	var _uname=uname.value;
//					console.log(_uname);
//		            var d = new Date();
//		        	d.setDate(d.getDate()+1);
//		            Cookie.setCookie("uname",_uname,d,"/");
                }
            }
            
            xhr.open("get",`../api/login.php?uname=${uname.value}&pwd=${pwd.value}`,true);
            xhr.send(null);
            
			//设置
			var goodsarr = Cookie.getCookie("goodslist") || [];
		        if(typeof goodsarr == "string"){
		        goodsarr = JSON.parse(goodsarr);
		    }
       
    }
    
})