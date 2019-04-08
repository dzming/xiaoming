<template>
    <div id="list" v-if="!loading">
        <div class="list_title">
            <i class="iconfont icon-zuojiantou" @click="$router.go(-1)"></i>
            <h2>全部</h2>
        </div>
        <div class="list_nav">
            <ul>
                <li v-for="(item,idx) in listNav" :key="item" @click="gonav(idx)" :class="{listActive:idx===active}">{{item}}</li>
            </ul>
        </div>
        
            <div class="list_context" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
                <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                    <ul class="mui-table-view mui-grid-view">
                        <li v-for="(item,index) in datas" :key="index" @click="gotoGoods(item.id)">
                            <img :src="item.picture" alt="">
                            <p>{{item.title}}</p>
                            <span>￥ {{item.price+parseInt(item.cate.price)}}</span>
                        </li>
                    </ul>   
                </mt-loadmore>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datas:[],
            page:0,
            //可以进行上拉
            allLoaded: false,
            //是否自动触发上拉函数
            isAutoFill: false,
            wrapperHeight: 0,
            courrentPage: 0,
            listNav:['最新','人气','价格'],
            active:0,
            desc:'date-sort',
            loading : false
        }
    },
    created() {
        this.loadMore();
    },
    methods: {
        gonav(idx){
            this.active = idx;
        },
        // 上拉加载
        loadBottom() {
            let cate = this.$route.query.id;
            this.page+=1;
            this.$axios({
                method: 'post',
                url: `http://www.inklego.com/api/v1/product/list?page=${this.page}&rows=20&cate=${cate}&${this.desc}=desc`,
            }).then(res=>{
                
                this.datas = this.datas.concat(res.data.result)
            });
        },
        loadMore() {
            this.loading = true;
            let cate = this.$route.query.id;
            this.page+=1;
            this.$axios({
                method: 'post',
                url: `http://www.inklego.com/api/v1/product/list?page=${this.page}&rows=20&cate=${cate}&${this.desc}=desc`,
            }).then(res=>{
                this.loading = false;
                this.datas = res.data.result;
            });
        },
        //传id进入详情页
        gotoGoods(id){
            this.$router.push({name:'Goods',query:{id}})
        }
    }
}
</script>
<style scoped>
    body{
        background: #fff;
    }
    .list_title .iconfont{
        font-size: 1.5rem!important;
    }
    #list{
        display: flex;
        flex-direction: column;
        height: 100%;
        
    }
    .list_title{
        display: flex;
        background: #f7f7f7;
        height: 2.75rem;
        border-bottom: 1px solid #c8c7cc;
        align-items:center;
        justify-content: center;
        padding: 0 1.25rem;
        position: relative
    }
    .list_title i{
        position: absolute;
        left: 1.125rem;
        top: .625rem;
    }
    .list_title h2{
        font-size: 1.125rem;
    }
    .list_nav{
        background: #f7f7f7;
        height: 2.25rem;
        box-shadow: 0 1px 6px #ccc;
    }
    .list_nav ul{
        display: flex;
    }
    .listActive{
        font-weight:900 !important; 
    }
    .list_nav ul li{
        height: 2.25rem;
        flex: 1;
        list-style:none;
        text-align: center;
        line-height: 2.25rem;
    }
    .list_context{
        flex: 1;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        margin-top: .625rem;
        overflow: scroll;
    }
    .list_context::-webkit-scrollbar {
        display: none;
    }
    .list_context ul{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
    .list_context ul li{
        list-style:none;
        width: 11.25rem;
        height: 16.875rem;
        background: #FFFFFF !important;
        margin: .625rem 0;
        box-shadow: 1px 1px 10px #DDD;
        text-align: center;
    }
    .list_context ul li img{
        width: 100%;
    }

    .list_context ul li p{
        font-size: .875rem;
        color: #666666;
        line-height: .875rem;
        padding: .9375rem ;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .list_context ul li span{
        font-size: .875rem;
        color: #DD514C;
    }
</style>