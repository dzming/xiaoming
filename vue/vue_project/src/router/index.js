import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from '../pages/Home'
import List from '../pages/List'
import Goods from '../pages/Goods'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import Fund from '../pages/Fund'
import Designer from '../pages/Designer'
import Service from '../pages/Service'
import Me from '../pages/Me'
import Login from '../pages/Login'
import Shezhi from '../pages/Shezhi'

// Home的嵌套路由
import JingXuan from '../homepages/JingXuan.vue'
import FuShi from '../homepages/FuShi.vue'
import DaPei from '../homepages/DaPei.vue'
import ShuMa from '../homepages/ShuMa.vue'
import CanChu from '../homepages/CanChu.vue'
import ChuXing from '../homepages/ChuXing.vue'
import WenJu from '../homepages/WenJu.vue'
import JuJia from '../homepages/JuJia.vue'
import PinPai from '../homepages/PinPai.vue'

let router = new VueRouter({
    // mode:'history',
    routes: [
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path: '/', //重定向：当浏览器url地址为/,自动跳转到/home
            redirect: '/home'
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
            children: [{
                path: '',
                redirect: 'jingxuan'
            }, {
                path: 'jingxuan',
                component: JingXuan
            }, {
                path: 'fushi',
                component: FuShi
            }, {
                path: 'dapei',
                component: DaPei
            }, {
                path: 'shuma',
                component: ShuMa
            }, {
                path: 'canchu',
                component: CanChu
            }, {
                path: 'chuxing',
                component: ChuXing
            }, {
                path: 'wenju',
                component: WenJu
            }, {
                path: 'jujia',
                component: JuJia
            }, {
                path: 'pinpai',
                component: PinPai
            }]
        },
        {
            name: 'List',
            path: '/list',
            component: List
        },
        {
            name: 'Goods',
            path: '/goods',
            component: Goods
        },
        {
            name: 'Cart',
            path: '/cart',
            component: Cart,
        },
        {
            name: 'Me',
            path: '/me',
            component: Me,
        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name:'Fund',
            path:'/fund',
            component:Fund
        },
        {
            name: 'Designer',
            path: '/designer',
            component: Designer
        },
        {
            name:'Service',
            path:'/service',
            component:Service
        },
        {
            name:'Shezhi',
            path:'/shezhi',
            component:Shezhi
        },
        // 404
        {
            path: '*',
            component: NotFound
        }
    ]
});

export default router;