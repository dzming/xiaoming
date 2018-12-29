document.addEventListener('DOMContentLoaded',()=>{

        var btnPrev =document.getElementById('btnPrev');
        btnPrev.onclick = function(){
                history.back();
        }
        var total_t=document.getElementById('total_t');
        var m_ul= document.getElementById('main_car_ul');
        var m_c_b=document.getElementById('m_c_b');
        var con = document.getElementById('tota');
        var btnClear=document.getElementById('btnClear');
        var car_arr = Cookie.getCookie("goodslist") ||[];
        if (typeof car_arr == "string"){
            car_arr = JSON.parse(car_arr);
        }
		
		
         btnClear.onclick = function(){
                m_ul.innerHTML = "";
                con.innerHTML = 0;
                Cookie.delCookie("goodslist","/");
        }
		

        render();
         m_ul.onclick=function(e){
            var currentLi = e.target.parentElement;
            var currentGuid = currentLi.getAttribute("guid");
            var i;
            var add=currentLi.getElementsByClassName('btn')[0];
            var val=currentLi.children[3];
            console.log(currentLi.children[3]);
            if(e.target.className =="btn0"){
                car_arr.some(function(item,idx){  //减单价
                    i = idx;
                    return item.id == currentGuid;
                })
                car_arr[i].qty--;
                val.value=car_arr[i].qty;
                if(car_arr[i].qty<=1){
                    car_arr[i].qty=1;
                }
                var all=0;
                all+=car_arr[i].oPrice*car_arr[i].qty;
                render();
            }
            if(e.target.className =="btn"){
                
                car_arr.some(function(item,idx){  //加单价
                    i = idx;
                    return item.id == currentGuid;
                })
                car_arr[i].qty++;
                val.value=car_arr[i].qty;
                var all=0;
                all+=car_arr[i].oPrice*car_arr[i].qty;
                render();
            }
            if(e.target.className == "btn-close"){

                car_arr.some(function(item,idx){
                    i = idx;
                    return item.id == currentGuid;
                })
                car_arr.splice(i,1);
               render();
            }
//              getCarLi();
            Cookie.setCookie("goodslist",JSON.stringify(car_arr),"","/");

                
            }
   


		    function render(){
		         var total = 0;
                m_ul.innerHTML = car_arr.map(function(item){
                    var all=(item.oprice*item.qty).toFixed(2);
                    total += item.oprice*item.qty;
                    return `<li guid="${item.id}">
                       <i style="background:url(../images/${item.imgurl})
                       no-repeat;background-size:100% 100%;"></i>
                       <p class="idx"><span class="fl">ID:${item.id}</span><br /><span class="Size">${item.name}</span></p>
                       <input class="btn0"  type="button"  value="-">
                       <input type="text"  value="${item.qty}" />
                       <input class="btn" type="button" value="+" >
                       <p class="price">&times;${item.oprice}元</p>
                       <p class="allprice">${all}元</p>
                       <a class="btn-close">&times;</a>
                   </li>`
            }).join("");
            con.innerHTML = total.toFixed(2);
            // console.log(con);
            
        }
		
		

  
});