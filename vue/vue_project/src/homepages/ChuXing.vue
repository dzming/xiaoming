<template>
    <div id="shop">
        <div class="shop_header">
            <img :src="shopList.banner">
        </div>
        <div class="shop_context">
            <div class="shop_context_item" v-for="shopItem  in shopList.cateList" :key="shopItem.id">
                <div class="shop_context_item_title" @click="gotoList(shopItem.id)">
                    <div class="title_p">
                        <p>{{shopItem.title}}/{{shopItem.etitle}}</p>
                        <p>{{shopItem.count}}款设计</p>
                    </div>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
                <div class="shop_context_item_body">
                    <ul>
                        <li v-for="item  in shopItem.product" :key="item.id" @click="gotoGoods(item.id)">
                            <img :src="item.picture" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            shopList: []
        };
    },
    methods: {
        getAll() {
        this.$axios({
            method: "get",
            url: "http://www.inklego.com/api/v1/product/catelist",
            params: {
            sort: 5
            }
        }).then(res => {
            this.shopList = res.data.result;
        });
        },
        //传id进入详情页
        gotoGoods(id){
            this.$router.push({name:'Goods',query:{id}})
        },
        //传id进入列表页
        gotoList(id){
            this.$router.push({name:'List',query:{id}})
        }
    },
    created() {
        this.getAll();
    }
};
</script>
<style scoped>
    #shop {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
    .shop_header {
        height: 7.8125rem;
    }
    .shop_header img {
        width: 100%;
        height: 100%;
    }
    .shop_context{
        flex: 1;
    }
    .shop_context_item{
        width: 100%;
        height: 13.125rem;
        background: #FFFFFF;
        margin-bottom:1.25rem;
        display: flex;
        flex-direction: column; 
    }
    .shop_context_item_title{
        height:4.375rem;
        box-sizing: border-box;
        padding: 0 .9375rem;
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    .title_p{
        display: flex;
        flex-direction: column;
    }
    .title_p p:nth-child(1) {
        font-size: .875rem;
        font-weight: 900;
        line-height: 1.25rem;
    }
    .title_p p:nth-child(2) {
        font-size: .75rem;
        color: #888;
        line-height: 1rem;
    }
    .shop_context_item_body{
        width: 100%;
    }
    .shop_context_item_body ul{
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
    .shop_context_item_body ul li{
        list-style:none;
        box-sizing: border-box;
        text-align: center;
        padding: .625rem;
    }
    .shop_context_item_body ul li img{
        width: 6.5625rem;
        height: 6.5625rem;
    }
</style>