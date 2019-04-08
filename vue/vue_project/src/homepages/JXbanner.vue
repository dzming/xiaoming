<template>
    <div id="banner">
        <el-carousel :interval="4000" arrow="never" height="10.625rem" indicator-position="none">
            <el-carousel-item v-for="item in $store.state.allHome.banner" :key="item.id" >
                <img :src="item.image">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    #banner{
        width: 100%;
        height: 10.625rem;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>

