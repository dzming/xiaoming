<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './assets/font_cart/iconfont.css'
// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);

// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;

export default {
  
};
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
body,html,#app{
    height: 100%;
    width: 100%;
}
</style>
