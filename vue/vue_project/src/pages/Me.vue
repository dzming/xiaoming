<template>
    <div id="Me"> 
        <div id="header">
            <img src="../assets/Me_icon.png" alt="头像">
            <ul id="m_u1">
                <li>
                    <a href="javascript:">关注</a>
                    <span>0</span>
                </li>
                <li>
                    <a href="javascript:">粉丝</a>
                    <span>0</span>
                </li>
                <li>
                    <a href="javascript:" style="border:none;">动态</a>
                    <span>0</span>
                </li>
            </ul>
            <input type="button" value="登陆/注册" @click="logins" v-show="showLogins">
             <h3 v-show="showTuichu">欢迎{{user}}</h3>
            <!-- <a href="#" @click="shangchu" v-show="showTuichu">退出</a> -->
        </div>
        <div id="box">
			<div id="m_d1">
				<a href="javascript:;" style="border-right:1px solid #c5c5c5;">
                    <img src="../assets/dingdan.png" alt="">
                    <p id="p1">订单</p>
                </a>
				<a href="javascript:;">
                    <img src="../assets/gouwuche.png" alt="">
                    <p id="p2">购物车</p>
                </a>
			</div>
			<div id="m_d2">
                <a href="javascript:;">
                    <p class="fr fb"><img src="../assets/dizhi.png" alt=""></p>
                </a>
                <a href="javascript:;">
                    <p class="fr fb"><img src="../assets/zhanghu.png" alt=""></p>
                </a>
                <a href="javascript:;">
                    <p class="fb"><img src="../assets/shoucang.png" alt=""></p>
                </a>
			</div>
            <div id="m_d2">
                <a href="javascript:;">
                    <p class="fr"><img src="../assets/gefu.png" alt=""></p>
                </a>
                <a href="javascript:;">
                    <p class="fr"><img src="../assets/AR.png" alt=""></p>
                </a>
                <a href="javascript:;" @click="shezhi">
                    <p><img src="../assets/shezhi.png" alt=""></p>
                </a>
			</div>
		</div>
        
        <div id="footer">
            <ul>
                <li @click="$router.push({ path: '/home' })">
                    <img src="../assets/store0.png" alt>
                </li>
                <li @click="$router.push({ path: '/fund' })">
                    <img src="../assets/fund0.png" alt>
                </li>
                <li @click="$router.push({ path: '/designer' })">
                    <img src="../assets/designer0.png" alt>
                </li>
                <li @click="$router.push({ path: '/service' })">
                    <img src="../assets/service0.png" alt>
                </li>
                <li @click="$router.push({ path: '/me' })">
                    <img src="../assets/me1.png" alt>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showLogins: true,
            showTuichu: false,
            user:""
        }
    },
    mounted(){
        if(localStorage.getItem("username")){
            this.showLogins = false;
            this.showTuichu = true;
            this.user=localStorage.getItem("username");
           
        }else{
            this.showLogins = true;
            this.showTuichu = false;
            this.user=localStorage.getItem("username");
        }
    },
    methods:{
        logins(){
            this.$router.push({name:'Login'});
        },
        shezhi(){
            if(localStorage.getItem("username")){
                this.$router.push({name:'Shezhi'});
            }
            
        },
        shangchu(){
            
            // localStorage.removeItem("token");
            localStorage.removeItem("username");
            this.$router.push('/login');
        },
    }
}


</script>
<style scoped>

    body,html{height: 100%;}
    #Me{
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    #header{
        height: 340px;
        background: url(../assets/Me_bg.jpg) no-repeat center;
        background-size: 100% 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    #header img{
        display:block;
        width: 4.25rem;
        height: 4.25rem;
        position: absolute;
        left: 1.875rem;
        top: 2.5rem;
        line-height: 0.75rem;
    }
    #header #m_u1{
        /* display:block; */
        width: 14.0625rem ;
        height: 3.75rem ;
        position: absolute;
        left: 7.75rem ;
        top: 2.8125rem ;
    }
    #header #m_u1 li{
        float: left;
        height: 3.75rem;
        width: 4.6875rem ;
        list-style: none;
    }
    #header #m_u1 li a{
        display: block;
        list-style: none;
        color: #ffffff;
        height: 1.875rem ;
        text-decoration: none;
        text-align: center;
        line-height: 1.875rem ;
        border-right: 0.0625rem  solid #ffffff;
        box-sizing: border-box;
        font-size: 0.875rem ;
    }
    #header #m_u1 li span{
        display: block;
        height: 1.25rem ;
        margin: 0.625rem  0;
        text-align: center;
        color: #ffffff;
    }
    #header input{
        position: absolute;
        top: 8.125rem ;
        left: 0.9375rem;
        width: 6.25rem ;
        height: 2.125rem ;
        background: #ffffff;
        border: 0.0625rem  solid #ffffff;
        border-radius: 0.25rem ;
    }
    #box{
        flex:1;
        flex-direction: column;
        background: #EFEFF4;
    }
    #box #m_d1{
        flex: 1;
        padding: 20px 0;
        display: flex;
        height: 75px;
        background: #EFEFF4;
    }
    #box #m_d1 a{
        text-decoration: none;
        background: #ffffff;
        line-height: 56px;
        text-align: center;
    }
    #box #m_d1 a{
        flex: 1;
    }
    #box #m_d1 a img{
        height: 28px;
        width: 28px;
        float: left;
        margin:10px 45% 0 45%; 
    }
    #box #m_d1 a p{
        display: block;
        height: 25px;
        line-height: 25px;
        float: left;
        margin:0 0 0 43%; 
        color: #333333;
    }
    #box #m_d2{
        flex: 1;
        display: flex;
        height: 75px;
        background: #c5c5c5;
    }
    #box #m_d2 a{
        text-decoration: none;
        background: #ffffff;
        text-align: center;
    }
    #box #m_d2 a{
        flex: 1;
    }
    #box #m_d2 a p{
        height: 75px;
        line-height: 75px;
        text-align: center;
    }
    .fr{
        border-right: 1px solid #c5c5c5;
        box-sizing: border-box;
    }
    .fb{
        border-bottom: 1px solid #c5c5c5;
        box-sizing: border-box;
    }
    #box #m_d2 a p img{
        height: 50px;
        width: 40px;
        margin-top: 10px
        
    }
</style>