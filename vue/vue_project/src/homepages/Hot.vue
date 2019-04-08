<template>
    <div id="hot">
        <div class="hot_banner">
            <img src="http://www.inklego.com/images/mobile/hot.jpg">
        </div>
        <div class="hot_content">
            <ul>
                <li v-for="hotitem in $store.state.allHome.hot.list" :key="hotitem.id" @click="gotoGoods(hotitem.id)">
                    <img :src="hotitem.picture" alt="">
                    <p>{{hotitem.title}}</p>
                    <span>￥{{hotitem.price}}.00</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        //传id进入详情页
        gotoGoods(id){
            this.$router.push({name:'Goods',query:{id}})
        }
    },
}
</script>
<style scoped>
    #hot{
        margin-top:1.25rem; 
        height: 25rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .hot_banner{
        width: 100%;
        height: 11.25rem;
    }
    .hot_banner img{
        width: 100%;
    }
    .hot_content{
        flex: 1;
        background: #FFFFFF;
    }
    .hot_content ul{
        display: flex;
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }
    .hot_content ul li{
        list-style:none;
        height: 100%;
        box-sizing: border-box;
        padding: 0 .625rem;
        text-align: center;
    }
    .hot_content ul li img{
        width: 8.125rem;
        height: 8.125rem;
        margin-top: .625rem;
    }
    .hot_content ul li p{
        width: 8.125rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: .875rem;
        margin: .3125rem 0;
        color: #666666;
    }
    .hot_content ul li span{
        font-size: .875rem;
        color: #DD514C;
    }
    /* 隐藏滚动条 */
    .hot_content ul::-webkit-scrollbar {
        display: none;
    }
</style>