document.addEventListener("DOMContentLoaded", function(){
    var uname = document.getElementById("usernames");
    var pwd = document.getElementById("userpwd2");
    var sub = document.getElementById("regbut2");
    var checkbox=document.getElementsByClassName("checkbox")[0];
	
	var cookie=document.cookie.split(";");
	cookie.forEach(function(item){
		var arr=item.split("=");
		if(arr[0]=="uname"){
			window.location.href="../index.html";
		}
	})
    sub.onclick = function(){
		var $register  = true;
		var status = [200,304];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
            	
                alert(xhr.responseText);
                if(xhr.responseText=="登录成功"){
                	var d=new Date();
                	if(checkbox.checked){
						d.setDate(d.getDate()+90);
						Cookie.setCookie("uname",uname.value,d,"/");
					}
                	d.setDate(d.getDate()+1);
	            	Cookie.setCookie("uname",uname.value,d,"/");
                	
                	window.location.href="../index.html";
                	
            	   
                }
            }
        }
        xhr.open("get",`../api/login.php?uname=${uname.value}&pwd=${pwd.value}`,true);
        xhr.send(null);
        console.log(open);
    }
})