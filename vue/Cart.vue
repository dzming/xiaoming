<template>
    <div id="cart">
        <div class="cart" v-show="tobianji" >
            <div class="header">
                <a class="back iconfont icon-zuojiantou" @click="$router.go(-1)" ></a>
                <h3>购物车</h3>
                <a class="edit iconfont iconbianji" @click="bianji" ></a>
            </div>
            <div  class="cmain" >
                <div class="cgoods" v-for='item in this.gocart' :key="item">
                    <img :src="item.picture" >
                    <div class="cname">
                        <span>{{item.title}}</span>
                    </div>
                    <div class="cprice">
                        <small>RMB <span>{{item.price}}.00</span></small>
                    </div>
                    <a href="#param" class="param">
                        <small class="short-nick size">S</small>
                        <small class="short-nick color">圆领</small>
                        <small class="short-nick num">x 1</small>
                    </a>
                    <span class="gouxuan iconfont icongouxuan1"></span>
                </div>
            </div>
            <div class="footer">
                <div class="allprice" >
                    合计: RMB <span>{{this.gocart[0].price}}.00</span>
                </div>
                <a class="tocart">结算</a>
            </div>
        </div>

        <div class="cart" v-show="tocart" >
            <div class="header">
                <a class="back iconfont icon-zuojiantou" @click="cart" ></a>
                <h3>编辑商品</h3>
                <a class="edit iconfont icondelete" @click="del" ></a>
            </div>
            <div  v-for='itemn in this.gocart' :key="itemn" class="cmain"  v-show="tocart" >
                <div class="cgoods"  style="width:43%">
                    <img :src="itemn.picture" style="width:10.3125rem;">
                    <div class="cname">
                        <span class="ename">{{itemn.title}}</span>
                    </div>
                    <div class="cprice">
                        <small class="eprice">RNB <span>{{itemn.price}}</span></small>
                    </div>
                    <span class="gouxuan iconfont icongouxuan1"></span>
                </div>
            </div>
        </div>                                      
    </div>   
</template>
<script>
import Qs from 'qs'
export default {
   data(){
       return{
           tobianji:true,
           godel:true,
           tocart:false,
           gocart:[],
           
       }
   },
    methods: {
        dcart(){
            this.godel=false
        },
        bianji(){
            this.tobianji =false,
            this.tocart =true
        },
        cart(){
            this.tobianji =true,
            this.tocart =false
        },
        getcart(){
            // let id = this.$route.query.id;
            this.$axios({
            method:'get',
            url:`http://106.15.176.14:3000/cart`,
            
            })
            .then(res=>{
                 
                this.gocart = res.data;
              
                // console.log(this.gocart[0].price);
                
            });
        },
        del(id){
        //   var arr= this.gocart.filter(item=>{
        //         // console.log(id,item.id)
        //           return item.id != this.gocart.id;  
        //   })
        //   this.gocart = arr;
        //   console.log(this.goods)
        
            this.$axios(
                {
                    method: 'delete',
                    url:`http://106.15.176.14:3000/cart`,
                    // params: {
                    //     'id':id
                        // }
                })
                .then(res=>{
                    this.gocart = res.data;
                        
                });
                if(confirm('您真的要抛弃我了吗？')){
                    this.tocart=true;
                }
                
                
      }
    },
    created() {
        this.getcart();
             
    },
    beforeUpdate(){
    }
}
</script>

<style scoped>
    #cart{
        height: 100%;
    }
    .cart{
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    .cart .header{
        height: 2.75rem;
        background: #fff;
        display: flex;
        justify-content:space-between;
        align-items: center;
    }
    .cart .header>a{
        font-size:1.75rem !important;
        padding: 0 .625rem;
    }
    .cart .cmain{
        flex:1;
        overflow-x: hidden;
        overflow-y: auto;
        background:#efeff4;
        
    }
    .cart .cmain>div{
        margin: .9375rem;
        width: 18.75rem;
        border:.0625rem solid #ccc;
        background: #fff;
        float: left;
    }
    .cart .cmain>div img{
        width: 18.75rem;
    }
    .cart .cmain>div>div{
        padding-left:.625rem;
    }
    .cart .cmain>div>.cname{
        padding-top:.3125rem;
        color:#333;
        font-size: 1rem;
    }
    .cart .cmain>div>.cprice{
        padding-top:.3125rem;
        color:#8f8f94;
        font-size: .75rem;
    }
    .param {
        margin: .3125rem .9375rem 1.5625rem .3125rem;
        text-align: left;
        display: block;
        width: auto;
        overflow: hidden;
        font-size: .875rem;
    }
    .short-nick{
        border: .0625rem solid #999;
        border-radius: 1.25rem;
        display: inline-block;
        padding: .125rem .625rem;
        color: #666;
        margin:1.5625rem .125rem 1.5625rem .375rem;
    }
    .size {
        max-width: 4.6875rem;
    }
    .num{
        border:none;
    }
    .cgoods{
        position: relative;
    }
    .gouxuan{
        position: absolute;
        right: -0.75rem;
        top: -0.75rem;
        border:.0625rem solid #999;
        background: #ccc;
        color:#999;
        border-radius: 50%;
        line-height: 1.5625rem;
        text-align: center;
        width: 1.5625rem;
        height: 1.5625rem;
    }
    .ename{
        font-size:.75rem;
    }
    .eprice{
        color:#FFD71D;
        padding-left:20%;
        display: inline-block;
        padding-bottom:.9375rem;
       font-weight:600;
    }

    .cart .footer{
        height: 3.125rem;
        display: flex;
        justify-content:space-between;
        align-items: center;
        background: #fff;
    }
    .cart .footer .allprice{
        width: 67%;
        height: 100%;
        color:#D93C37;
        font-size: .8125rem;
        display: flex;
        justify-content:center;
        align-items: center;
    }
     .cart .footer .allprice>span{
         padding-left:.1875rem;
     }
    .cart .footer .tocart{
        width: 33%;
        height: 100%;
        background: #D93C37;
        color:#fff;
        display: flex;
        justify-content:center;
        align-items: center;
    }
</style>
