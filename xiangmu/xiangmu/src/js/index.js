document.addEventListener('DOMContentLoaded',()=>{
	
    var banner = document.querySelector(".banner");
    var ulbox = banner.children[0];
    var firstImg = ulbox.children[0].children[0];
    // 3.复制索引0所在的元素，追加到ul最后面。
    var cloneLi = ulbox.children[0].cloneNode(true);
    ulbox.appendChild(cloneLi);
    var len = ulbox.children.length;
    var idx = 0;
    var timer;
    // 1.focus呈现图片，宽度为第一张图片的宽度。ul的宽度=图片的宽度*图片张数
    //  * 必须等待第一张图片加载完成后，再获取宽度
    firstImg.onload = function(){
        banner.style.width = firstImg.offsetWidth + 'px';
        ulbox.style.width = firstImg.offsetWidth * len + 'px';
    }
//  var cookies = document.cookie;
    var page = createPage();
    autoplay();
    //4.鼠标移入focus，清除定时器。鼠标移出focus，重新开启定时器
    banner.onmouseover = function(){
        clearInterval(timer);
    }
    banner.onmouseout = function(){
          autoplay();
    }
    //5.点击小圆点，获取里面的内容-1==>索引
    page.onclick = function(e){
        if(e.target.tagName == "SPAN"){
            idx = e.target.innerHTML - 1;
            showPic();
        }
    }
    // 2.开启定时器，定义一个索引（0、1、2）改变，从而改变的是ulbox的left值
    //  * 当索引为数组长度时，其实要呈现的是索引1所在的图片。为了让轮播图是正着滚的，同时将ul的left手动设置成0。
    function autoplay(){
        timer = setInterval(function(){
            idx++;
            showPic();
        },2500) 
    }
    //只做呈现图片
    function showPic(){
        if(idx == len){
            ulbox.style.left = 0;
            idx = 1;
        }
        //4.滚动过程中索引改变，去除所有的高亮，再让对应的索引高亮.
        //  * 当滚到被复制那张图片索引时，对应的索引为0的小圆点高亮。
        for(var i=0;i<len-1;i++){
            page.children[i].classList.remove("active");
        }
        if(idx == 6){
            page.children[0].classList.add("active");
        }else{
            page.children[idx].classList.add("active");
        }
        animation(ulbox,{left:-firstImg.offsetWidth *idx},30);
    }
    
    //3.生成页码，同时根据len-1生成小圆点.默认第一个小圆点高亮.active
    function createPage(){
        var page  = document.createElement("div"); 
        page.classList.add("page");
        for(var i=1;i<=len-1;i++){
            var dotted = document.createElement("span");
            dotted.innerHTML = i;
            page.appendChild(dotted);
        }    
        page.children[0].classList.add("active");
        banner.appendChild(page);
        return page;
    }
})

window.onload = function(){
   // 1.一进入页面，第一个tab高亮，第一张图片显示
   var tabAll = document.getElementsByClassName("tab")[0];
   var tabHeader = tabAll.children[0].children;//所有的tab
   var tabContent = tabAll.children[1].children;//所有的内容
   tabHeader[0].className = "active";
   tabContent[0].style.display = "block";
   // 2.点击不同的tab，所有的tab取消高亮，当前tab高亮
   // 3.点击不同的tab，所有的内容隐藏，当前内容显示
   for(var i=0;i<tabHeader.length;i++){
        tabHeader[i].onclick = function(){
            //this 指的是当前被点击的那个tab
            for(var j=0;j<tabHeader.length;j++){
                tabHeader[j].className = "";
                tabContent[j].style.display = "none";
            }
            this.className = "active";
            tabContent[this.getAttribute("idx")].style.display = "block"; 
        }
    }


}
