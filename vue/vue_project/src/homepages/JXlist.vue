<template>
    <div id="jx_lift">
        <div v-for="jxitem in $store.state.allHome.cate" :key="jxitem.title" class="jx_lift">
            <div class="jx_lift_title" @click="goto(jxitem.title)">
                <span>{{jxitem.title}}</span>
                <i class="iconfont icon-sanjiaoright"></i>
            </div>
            <div class="jx_lift_content">
                <ul>
                    <li v-for="item in jxitem.list" :key="item.id" @click="gotoGoods(item.id)">
                        <img :src="item.picture" alt="">
                        <p>{{item.title}}</p>
                        <span>￥{{item.price}}.00</span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    methods: {
        goto(title){
            let navList = this.$store.state.navList;
            for(let i = 0;i< navList.length;i++){
                if(title == navList[i].name){
                    this.$router.push({ path:navList[i].path })
                }
            }
        },
        //传id进入详情页
        gotoGoods(id){
            this.$router.push({name:'Goods',query:{id}})
        }
    },
}
</script>
<style scoped>
    .jx_lift{
        margin-top:1.25rem; 
        height: 23.125rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
    }
    .jx_lift_title{
        text-align: center;
        padding: 1.5625rem 0 .3125rem;
    }
    .jx_lift_title span{
        font-size: 1.125rem;   
        font-weight: 600;
        line-height: 1.125rem;
        margin-right: .3125rem;
    }
    .iconfont {
        font-size: .75rem;
    }
    .jx_lift_content ul{
        display: flex;
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }
    .jx_lift_content ul li{
        list-style:none;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;
        text-align: center;
    }
    .jx_lift_content ul li img{
        width: 13.75rem;
        height: 13.75rem;
    }
    .jx_lift_content ul li p{
        width: 13.75rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: .875rem;
        margin: .3125rem 0;
        color: #666666;
    }
    .jx_lift_content ul li span{
        font-size: .875rem;
        color: #DD514C;
    }
    /* 隐藏滚动条 */
    .jx_lift_content ul::-webkit-scrollbar {
        display: none;
    }
</style>