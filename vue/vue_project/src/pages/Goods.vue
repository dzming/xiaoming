<template>
    <div id="goods" v-if="!loading">
        <div class="goods_header">
            <i class="iconfont icon-zuojiantou" @click="$router.go(-1)"></i>
            <h3>{{goods.cate.title}}</h3>
            <i class="iconfont icon-aixin"></i>
        </div>
        <div class="goods_context">
            <div class="goods_context_title">
                <div class="goods_banner">
                    <el-carousel :interval="4000" arrow="never" height="23.4375rem">
                        <el-carousel-item v-for="bannerItem in goods.banner" :key="bannerItem">
                            <img :src="bannerItem">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <p>{{goods.title}}</p>
                <span>RMB {{goods.price+parseInt(goods.cate.price)}}</span>
            </div>
            <div class="artiste">
                <p>设计师</p>
                <div class="artiste_context">
                    <img :src="goods.designer.thumb">
                    <p>{{goods.designer.nick}}</p>
                </div>
            </div>
            <div class="goodsDesc">
                <img :src="goodsPath" alt="" v-for="goodsPath in goods.details" :key="goodsPath">
            </div>
        </div>
        <div class="goods_footer">
            <span><i class="iconfont icon-03" @click="$router.push({name:'Cart'})"></i></span>
            <span><i class="iconfont icon-icon-test"></i></span>
            <span @click="popupVisible = true">加入购物车</span>
            <span>立即购买</span>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom" >
            <div class="popup">
                <div class="selectParam">
                    <div class="selectGroup">
                        <h2>==请选择{{goods.size.title}}==</h2>
                        <div class="select1">
                            <ul>
                                <li v-for="(content,idx) in goods.color.content" :key="content.val" :class="{selection:idx===colorIdx}" @click="seleColor(idx)">{{content.val}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="selectGroup">
                        <h2>==请选择{{goods.color.title}}==</h2>
                        <div class="select1">
                            <ul>
                                <li v-for="(content,idx)  in goods.size.content" :key="content.val" :class="{selection:idx===sizeIdx}" @click="seleSize(idx)">{{content.val}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="selectGroup">
                        <h2>数量</h2>
                        <div class="selectGroup_num">
                            <span @click="reduce()">-</span>
                            <input type="text" v-model="num">
                            <span @click="add()">+</span>
                        </div>
                    </div>
                </div>
                <div class="action" @click="addCart">
                    <p>立即购买</p>
                    <span>￥{{allPrice*num}}</span> 
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
// import { Popup } from 'mint-ui';
import qs from "qs";
export default {
    data() {
        return {
            goods:[],
            popupVisible:false,
            colorIdx:0,
            sizeIdx:0,
            num:'1',
            allPrice:0,
            loading:false
        }
    },
    methods: {
        getGoods(){
            this.loading = true;
            let id = this.$route.query.id;
            this.$axios({
                method: 'post',
                url: `http://www.inklego.com/api/v2/product/deal?id=${id}`,
            }).then(res=>{
                this.loading = false;
                this.goods = res.data.result;
                this.allPrice = this.goods.price+parseInt(this.goods.cate.price);
            });
        },
        seleColor(idx){
            this.colorIdx = idx;
        },
        seleSize(idx){
            this.sizeIdx = idx;
        },
        reduce(){ 
            if(this.num>1){
                this.num--;
            }else if(this.num<1){
                this.num = 1;
            }
        },
        add(){
            this.num++;
        },
        addCart(){
            if(localStorage.getItem("username")){
                this.popupVisible = false;
                let picture = this.goods.picture;
                let goodsname = this.goods.title;
                let goodsid = this.goods.id;
                let num = this.num;
                let allPrice = this.allPrice * num;
                
                let size = this.goods.size.content[this.sizeIdx].val;
                let color = this.goods.color.content[this.colorIdx].val;
                let username=localStorage.getItem("username");
                
                // console.log(picture,goodsname,goodsid,allPrice,num,size,color,username);
                
                this.$axios.post(
                    "http://localhost:3000/users/findUsers",
                    qs.stringify(
                        {
                            goodsid:goodsid,
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

                    console.log(res)
                 
                })

                this.$axios.post(
                    'http://localhost:3000/cart/insert',
                    qs.stringify({
                            picture,
                            goodsname,
                            goodsid,
                            allPrice,
                            num,
                            size,
                            color,
                            username
                        },{
                            headers:{"Content-type":"application/x-www-form-urlencoded"}
                        },{
                            withCredentials:true
                    }
                )).then(res=>{
                    console.log(res)
                });
                     


                
            }else{
                alert("你还没登陆，请先登陆")
                this.$router.push('/login');
            }
            
        }
    },
    created() {
        this.getGoods();     
    },
    beforeUpdate(){
    }
}
</script>
<style scoped>
#goods{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.goods_header{
    height: 2.75rem;
    background: #f7f7f7;
    box-shadow: 0 1px 6px #ccc;
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
    padding: 0 1.25rem;
    align-items: center;
}
#goods .iconfont{
    font-size: 1.75rem !important;
}
.goods_header h3{
    font-size: 1.125rem;
}
.goods_context{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
.goods_context::-webkit-scrollbar {
    display: none;
}
.goods_context_title{
    height: 27.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #FFF;
}
.goods_context_title .goods_banner{
    height: 23.4375rem;
}
.goods_context_title .goods_banner img{
    height: 100%;
    width: 100%;
}
.goods_context_title p{
    flex: 1;
    line-height: 2.03125rem;
    color: #666666;
    font-size: 1rem;
    font-weight:900; 
}
.goods_context_title span{
    flex: 1;
    line-height: 2.03125rem;
    color: #D93C37;
    font-size: 14px;
}
.artiste{
    height: 12.5rem;
    margin: 1.25rem 0;
    background: #FFF;
}
.artiste p{
    padding: .9375rem .9375rem .3125rem;
}
.artiste_context{
    height: 10rem;
    text-align: center;
}
.artiste_context img{
    width: 4.625rem;
    height: 4.625rem;
    border-radius: 50%;
    border: 1px solid #EEE;
    background: #FF0;
}
.artiste_context p{
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: .875rem;
    color: #333;
}
.goods_footer{
    height: 3.125rem;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    text-align: center
}
.goods_footer span{
    height: 3.125rem;
    line-height:3.125rem;
    font-size: .875rem;
}
.goods_footer span:nth-child(1),.goods_footer span:nth-child(2){
    width: 3.75rem;
}
.goods_footer span:nth-child(3),.goods_footer span:nth-child(4){
    flex: 1;
}
.goods_footer span:nth-child(3){
    background: #333;
    color: #FFF;
}
.goods_footer span:nth-child(4){
    background: #FFD71D;
    color: #333;
}


.popup{
    height: 25rem;
    width: 23.4375rem;
}


.selectGroup h2{
    width: 100%;
    background: #EEE;
    color: #666;
    font-size: 14px;
    margin: 0;
    padding: 10px;
}
.select1 ul{
    height: 4.625rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .625rem;
}
.select1 ul li{
    list-style: none;
    border-radius: 1rem;
    background: #FFFFFF;
    border: 1px solid #CCC;
    font-size: .75rem;
    color: #333;
    padding: 0 .3125rem;
    margin-left:.5rem; 
}
.selection{
    background: #FFD71D !important;
    border: 1px solid #FFD71D !important;
}
.selectGroup_num{
    height: 4.625rem;
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
}
.selectGroup_num span{
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    border: .0625rem solid #CCC;
    font-size: .75rem;
    text-align: center;
    line-height: 2rem;
    background: #f9f9f9;
}
.selectGroup_num input{
    text-align: center;
    height: 1.875rem;
    width: 2.5rem;
    line-height: 1.875rem;
    font-size: .875rem;
    border: none!important;
}
.action{
    height: 3.75rem;
    background: #FFD71D;
    text-align: center;
}
.action p{
    text-align: center;
    color: #333;
    font-size: .875rem;
    padding-top:.625rem; 
}
.action span{
    color: #333;
    font-size: .75rem;
}

.goodsDesc{
    width: 100%;
}
.goodsDesc img{
    width: 100%;
}
</style>
