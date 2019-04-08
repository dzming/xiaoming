<template>
    <div id="selected-store">
        <div class="ink-title">
            <h3>精选设计商店</h3>
            <p>SELECTED STORE</p>
        </div>
        <div class="selectStore">
            <ul>
                <li v-for="(item,index) in $store.state.allHome.designer" :key="item.id">
                    <img :src="imgPath[index]" alt="">
                    <p>{{item.nick}}</p>
                    <div @click="show($event)">
                        <span class="iconfont icon-jia" ></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgPath:['http://cdn.inklego.com/picture/thumb/20190220/68a66a21cd7afcf229c688ed946231cb_lage.JPG',
                     'http://cdn.inklego.com/picture/thumb/20190218/86660297d95077ea963191bfb8209c3c_lage.jpg',
                     'http://cdn.inklego.com/picture/thumb/20181011/ee634b4473effb50c9713692f27d772e_lage.jpg',
                     'http://cdn.inklego.com/picture/thumb/20170814/2fd8d055ba6c4d1e8a359592043e5ea0_lage.jpg',
                     'http://cdn.inklego.com/picture/thumb/20190220/81477365907c3502e889fc0b2fe0fff1_lage.png',
                     'http://cdn.inklego.com/picture/thumb/20190304/2fcaf80d98810b6f527bfc7c8f961136_lage.jpg'
                    ],
        }
    },
    methods: {
        show(e){
            if(e.target.className == 'iconfont icon-jia'){
                e.target.className = 'iconfont icon-gou'
            }else if(e.target.className == 'iconfont icon-gou'){
                e.target.className = 'iconfont icon-jia'
            }
            
        }
    },
}
</script>
<style scoped>
    #selected-store{
        height: 16.875rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
    }
    .ink-title{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 4.375rem;
        align-items: center;
        justify-content: center;
    }
    .ink-title h3{
        font-size: 1rem;
        line-height: 1.375rem;
    }
    .ink-title p{
        font-weight: 300;
        color: #999;
        font-size: .75rem;
    }
    .selectStore{
        flex: 1;
        display: flex;
    }
    .selectStore ul::-webkit-scrollbar {
        display: none;
    }
    .selectStore ul{
        display: flex;
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }
    .selectStore ul li{
        list-style:none;
        height: 100%;
        box-sizing: border-box;
        padding: 0 1.5rem;
        text-align: center;
    }
    .selectStore ul li img {
        width: 4.875rem;
        height: 4.875rem;
        border-radius: 50%;
    }
    .selectStore ul li p{
        width: 4.875rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: .875rem;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 2.125rem;
    }
    .selectStore ul li div{
        display: inline-block;
        width: 1.875rem;
    }
    .selectStore ul li span{
        display: inline-block;
        width: 1.875rem;
        height: 1.875rem;
        text-align: center;
        line-height: 1.875rem;
    }
    .icon-jia{
        background: #FFD71D;
    }
    .icon-gou{
        background: #EEEEEE;
    }
    .iconfont {
        font-size: 16px;
    }
</style>