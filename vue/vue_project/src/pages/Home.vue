<template>
    <div id="home" v-if="!loading">
        <header>
            <span class="iconfont icon-sousuo"></span>
            <div id="title">
                <h2>商店</h2>
                <p>STORE</p>
            </div>
            <span class="iconfont icon-03" @click="$router.push({name:'Cart'})"></span>
        </header>
        <div id="nav">
            <ul class="ink-nav">
                <li v-for="(item,idx) in $store.state.navList" :key="item.name" @click="goto(item.path,idx)" :class="{active:idx===active}">{{item.name}}</li>
            </ul>
        </div>
        <div id="body">
            <router-view></router-view>
        </div>
        <div id="footer">
            <ul>
                <li @click="$router.push({ path: '/home' })">
                    <img src="../assets/store1.png" alt>
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
                    <img src="../assets/me0.png" alt>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loading: false,
            active:0
        }
    },
    methods: {
        goto(path,idx){
            this.$router.push({ path })
            this.active = idx;
            
        },
        getAll() {
            this.loading = true;
            this.$axios({
                method: 'post',
                url: 'http://www.inklego.com/api/v1/recommend/all'
            }).then(res=>{
                this.$store.commit('getAll',res.data.result);
                this.loading = false;
            });
        },  
        getpath(){
            let navList = this.$store.state.navList
            for(let i = 0;i < navList.length;i++){
                if(this.$route.path == navList[i].path){
                    this.active = i;
                }
            }
        }
    },
    created() {
        this.getAll();
        this.getpath();
    },
    updated() {
        this.getpath();
    },
};
</script>
<style >
@import "../assets/iconfont/iconfont.css";
body{
    background: #efeff4 !important;
}
#home {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
/* header */
header {
    height: 3.4375rem;
    background: #ffd71d;
    color: #333333;
    display: flex;
}
header #title{
    flex: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
header #title h2{
    font-size: 1rem;
}
header #title p{
    font-size: .75rem;
}
header span{
    width: 3.4375rem;
    height: 3.4375rem;
    text-align: center;
    line-height: 3.4375rem;
}
header .iconfont {
    font-size: 2rem !important;
}
/* nav */
#nav{
    border-bottom: 2px solid #FFD71D;
    width: auto;
    height: 2.5rem;
    white-space: nowrap;
    background: #FFFFFF;
}
#nav ul{
    display: flex;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    
}
/* 隐藏滚动条 */
#nav ul::-webkit-scrollbar {
    display: none;
}

#nav ul li{   
    list-style:none;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: .875rem;
    border-bottom: .125rem solid transparent;
    padding: 0 1.375rem;  
}
.active{
    font-weight: 900 !important;
    border-bottom: .125rem solid #333 !important;
}
#body {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
#body::-webkit-scrollbar {
    display: none;
}
/* footer */
#footer {
    height: 3.125rem;
    background: #f7f7f7;
}
#footer ul {
    display: flex;
    bottom: 0px;
}
#footer ul li {
    flex: 1;
    height: 50px;
    color: #c9c9c9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#footer ul li img {
    width: 30px;
}

</style>

