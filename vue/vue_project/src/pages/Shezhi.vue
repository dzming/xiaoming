<template>   
    <div id="sz_top">
        <div class="sz_nav">
            <img src="../assets/jiantou.png" alt="" class="huitui" @click="logme">  
            <span class="sz">设置</span>
        </div>
        <div class="sz_btn">
            <input type="button" value="退出登陆" class="sz_tc" @click="shangchu2">
        </div>
    </div>
        
    



   
</template>
<script>

export default {
    methods:{
        logme(){
            this.$router.push({name:'Me'});
        },
        shangchu2(){
            
            // localStorage.removeItem("token");
            localStorage.removeItem("username");
            this.$router.push({name:'Me'});
        },
    }
}
</script>
<style scoped>
    body,html{height: 100%;}
    #sz_top{
        height: 100%;
        width: 100%;
        display:flex;
        flex-direction: column;
        
    }
    #sz_top .sz_nav{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #c5c5c5;
        box-sizing: border-box;
        background: #ffffff;
    }
    #sz_top .sz_nav .huitui{
        margin: 5px 0 0 10px;
    }
    #sz_top .sz_nav .sz{
        float: right;
        margin: 10px 45% 0 5px;
        
    }
    #sz_top .sz_btn{
        width: 100%;
        height: 50px;
        margin-top: 5px
        
    }
    #sz_top .sz_btn .sz_tc{
        height: 40px;
        width: 80%;
        border: 1px solid red;
        background: #EFEFF4;
        margin: 5px 10%;
    }
</style>