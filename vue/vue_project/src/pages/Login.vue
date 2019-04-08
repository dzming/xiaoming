<template>
    <div id="login">
        <div id="headers">
            <div id="m_top">
                <img src="../assets/jiantou.png" alt="" id="jiantou" @click="mes">
                <div class="m_d1 " v-on:click="ToRegister">
                    注册
                </div>
                <div class="m_d1" v-on:click="ToLogin">
                    登陆
                </div>
            </div>
            <div id="denglu" v-show="showLogin">
                <div id="m_baner">
                    <p v-show="showTishi">{{tishi}}</p>
                    <div class="m_d2">
                        <img src="../assets/youxiang.png" alt="" class="img1">
                        <input type="text" placeholder="请输入邮箱" v-model="username">
                    </div>
                    <div class="m_d2">
                        <img src="../assets/mima.png" alt="" class="img1">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                </div>
                <div id="btn1" v-on:click="login">
                    登陆
                </div>
                <hr>
                <ul id="m_u1">
                    <li><img src="../assets/zhifubao.png" alt="" style="float:right;"></li>
                    <li style="text-align: center;"><img src="../assets/weibo.png" alt="" ></li>
                    <li><img src="../assets/QQ.png" alt=""></li>
                </ul>
            </div>
            <div id="zhuce" v-show="showRegister">
                <div id="m_baner2">
                    
                    <div class="m_d3">
                        <img src="../assets/youxiang.png" alt="" class="img2" >
                        <input type="text" placeholder="请输入邮箱" v-model="newUsername" @blur="modalshow()">
                        <p v-show="showTishi" >{{tishi}}</p>
                    </div>
                    <div class="m_d3">
                        <img src="../assets/nicheng.png" alt="" class="img2">
                        <input type="text" placeholder="请输入昵称">
                    </div>
                    <div class="m_d3">
                        <img src="../assets/mima.png" alt="" class="img2" >
                        <input type="password" placeholder="请输入密码" v-model="newPassword"> 
                    </div>
                </div>
                <div id="btn2" v-on:click="register">
                    注册
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import qs from "qs";
// import {setCookie,getCookie} from '../assets/js/token.js'  
export default {
    data(){
        return{
            showLogin: true,
            showRegister: false,
            showTishi: false,
            tishi: '',
            username: '',
            password: '',
            newUsername: '',
            newPassword: ''
        }
    },
    // mounted(){
    // /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    //     if(getCookie('username')){
    //         this.$router.push('/me')
    //     }
    // },
    methods:{
        mes(){
            this.$router.push({name:'Me'});
        },
        ToRegister(){
            this.showRegister = true;
            this.showLogin = false;
        },
        ToLogin(){
            this.showRegister = false;
            this.showLogin = true;
        },
        login(){
            if(this.username == "" || this.password == ""){
                alert("请输入用户名或密码");
            }else{
                this.$axios.post(
                    "http://106.15.176.14:3000/users/login",
                    qs.stringify(
                        {
                            username:this.username,
                            password:this.password,
                        },
                        {
                            headers:{"Content-type":"application/x-www-form-urlencoded"}
                        },
                        {
                            withCredentials:true
                        }
                    )
                )
                .then((res)=>{
                    // console.log(res.data);
                    localStorage.setItem("token",res.data.token);
                    // console.log(res.data.token);
                    if(res.data.status=="success"){
                        this.$router.push({name:'Me'});
                        localStorage.setItem("username",res.data.username);
                        
                    }else{
                        alert("密码或者邮箱错误");
                    }
                    
                })
            }
        },
        register(){
            if(this.newUsername == "" || this.newPassword == ""){
                alert("请输入用户名或密码")
            }else{
                this.$axios.post(
                    "http://106.15.176.14:3000/users/register",
                    qs.stringify(
                        {
                            username:this.newUsername,
                            password:this.newPassword,
                        },
                        {
                            headers:{"Content-type":"application/x-www-form-urlencoded"}
                        },
                        {
                            withCredentials:true
                        }
                    )
                )
                .then(function(res){
                    // console.log(res.data)
                    localStorage.setItem("token",res.data.token);
                    
                    alert("注册成功");
                    
                    
                })
            }
        },
        modalshow(){
            this.$axios.post(
                    "http://106.15.176.14:3000/users/findUser",
                    qs.stringify(
                        {
                            username:this.newUsername,
                        },
                        {
                            headers:{"Content-type":"application/x-www-form-urlencoded"}
                        },
                        {
                            withCredentials:true
                        }
                    )
                )
                .then((res)=>{
                    localStorage.setItem("token",res.data.token);
                    // console.log(res)
                    if(res.data.length>0){
                        this.showTishi=true;
                        this.tishi="已存在此用户";
                        // alert("已存在此用户");
                       
                    }else{
                        this.showTishi=true;
                        this.tishi="该用户可注册";
                    }
                })
        }
    }
}
</script>
<style  scoped>
    body,html{height: 100%;}
    #active{
        width: 50px;
        float:right;
        text-align: center;
        font-size: 18px;
        color: #333333;
        font-weight:bold;
    }
    #login{
        height: 100%;
        width: 100%;
        display:flex;
        flex-direction: column;

        background: #EFEFEF;
    }
    #headers{
        min-height: 500px;
        background: url(../assets/login_reg_bg.png) no-repeat center;
        background-size: 100% 100%;
        display:flex; 
        justify-content: flex-start; 
        align-items: inherit;
    }
    #headers #m_top{
        height: 44px;
        line-height: 44px;
        width: 100%;
        background: #ffffff;
        
    }
    #headers #m_top #jiantou{
        height: 30px;
        width: 30px;
        margin: 7px 0 7px 20px;
    }
    .m_d1{
        width: 50px;
        float:right;
        text-align: center;
        /* font-size: 14px; */
        color: #333333;
    }
    
    #headers #m_baner{
        position: absolute;
        top: 40%;
        left: 10%;
        background: #ffffff;
        height: 80px;
        width: 80%;
    }
    #headers #m_baner .m_d2{
        height: 40px;
        width: 100%;
        line-height: 40px;
        border: 1px solid #EFEFEF;
        box-sizing: border-box;
    }
    #headers #m_baner .m_d2 .img1{
        height: 24px;
        width: 24px;
        margin: 8px 0 8px 30px;
        float: left;
    }
    #headers #m_baner .m_d2 input{
        height: 20px;
        margin: 10px 0 0 5px;
        border:none;
        float: left;
        outline:none;
    }
    #headers #btn1{
        position: absolute;
        top: 54%;
        left: 10%;
        width: 80%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: orange;
        border-radius: 5px;
    }
    hr{
        position: absolute;
        top: 63%;
        left: 10%;
        width: 80%;
        border-top: 1px solid #CCC;
    }
    #headers #m_u1{
        position: absolute;
        top: 65%;
        left: 0;
        width: 100%;
        height: 48px;
    }
    #headers #m_u1 li{
        width: 33%;
        float: left;
        height: 48px;
        list-style:none;
    }
    #headers #m_u1 li img{
        height: 35px;
        width: 35px;
        margin-top: 6px;
    }
    #headers #m_baner2{
        position: absolute;
        top: 50%;
        left: 5%;
        background: #ffffff;
        height: 120px;
        width: 90%;
    }
    #headers #m_baner2 .m_d3{
        height: 40px;
        width: 100%;
        line-height: 40px;
        border: 1px solid #EFEFEF;
        box-sizing: border-box;
    }
    #headers #m_baner2 .m_d3 .img2{
        height: 24px;
        width: 24px;
        margin: 8px 0 8px 30px;
        float: left;
    }
    #headers #m_baner2 .m_d3 input{
        height: 20px;
        margin: 10px 0 0 5px;
        border:none;
        float: left;
        outline:none;
    }
    #headers #btn2{
        position: absolute;
        top: 70%;
        left: 5%;
        width: 90%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: orange;
        border-radius: 5px;
    }
</style>