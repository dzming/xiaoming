//注册,把信息存入mysql
document.addEventListener("DOMContentLoaded", function(){
    var uname = document.getElementById("nickname");
    var pwd = document.getElementById("password");
    var Rpass=document.getElementById("passwordag");
    var registerBtn = document.getElementById("regbtn");

    var tips = document.querySelector(".tips");
    var status = [200,304];
    uname.onblur = function(){
		var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                tips.innerHTML = xhr.responseText;
            }
        }
        xhr.open("get","../api/register.php?uname="+uname.value,true);
        xhr.send(null);
    }
    registerBtn.onclick = function(){
    	if(uname.value.length == 0){
			alert("用户名不能为空");
			return;
		}else if(pwd.value.length == 0){
			alert("密码不能为空");
		}else if(Rpass.value.length == 0){
			alert("请再次输入密码");
		}else if(Rpass.value.length != 0){
			if(pwd.value != Rpass.value){
				alert("两次输入密码不一致，请再次输入密码");
				pwd.value='';
				Rpass.value = '';	
			}else{
				
					alert("注册成功");
					var register = true;
	                var xhr = new XMLHttpRequest();
	                xhr.onreadystatechange = function(){
	                    if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
	                        console.log(xhr.responseText);
	                    }
	                }
	                xhr.open("get",`../api/register.php?uname=${uname.value}&pwd=${pwd.value}&register=${register}`,true);
	                xhr.send(null);
					pwd.value='';
					Rpass.value = '';
					uname.value='';
			}
		}
        
    }
})



