<template>
    <div id="new">
        <div class="new_banner">
            <img src="http://www.inklego.com/images/mobile/new.jpg">
        </div>
        <div class="new_content">
            <ul>
                <li  v-for="newitem in $store.state.allHome.new.list" :key="newitem.id" @click="gotoGoods(newitem.id)">
                    <img :src="newitem.picture" alt="">
                    <p>{{newitem.title}}</p>
                    <span>￥{{newitem.price}}.00</span>
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
    #new{
        margin-top:1.25rem; 
        height: 25rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .new_banner{
        width: 100%;
        height: 11.25rem;
    }
    .new_banner img{
        width: 100%;
    }
    .new_content{
        flex: 1;
        background: #FFFFFF;
    }
    .new_content ul{
        display: flex;
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }
    .new_content ul li{
        list-style:none;
        height: 100%;
        box-sizing: border-box;
        padding: 0 .625rem;
        text-align: center;
    }
    .new_content ul li img{
        width: 8.125rem;
        height: 8.125rem;
        margin-top: .625rem;
    }
    .new_content ul li p{
        width: 8.125rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: .875rem;
        margin: .3125rem 0;
        color: #666666;
    }
    .new_content ul li span{
        font-size: .875rem;
        color: #DD514C;
    }
    /* 隐藏滚动条 */
    .new_content ul::-webkit-scrollbar {
        display: none;
    }
</style>