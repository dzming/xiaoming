// 引入
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

// 使用
Vue.use(Vuex);

// 核心概念
// 1. store ： 一个用于存储仓库
// 2. state ：状态（数据，相当于组件中的data）
// 3. getters:（理解为组件中的computed，只读）
// 4. mutations ：负责更改state中的数据（同步，理解为组件中的methods）
// 5. actions : 类似于 mutations，负责做异步操作
// * actions用来操作mutations，mutations用来操作state


const store = new Store({
    state: {
        navList: [
            { name: "精选", path: "/home/jingxuan" },
            { name: "服饰", path: "/home/fushi" },
            { name: "搭配", path: "/home/dapei" },
            { name: "数码", path: "/home/shuma" },
            { name: "餐厨", path: "/home/canchu" },
            { name: "出行", path: "/home/chuxing" },
            { name: "文具", path: "/home/wenju" },
            { name: "居家", path: "/home/jujia" },
            { name: "品牌", path: "/home/pinpai" },
        ],
        allHome: []
    },
    getters: {

    },
    mutations: {
        getAll(state, data) {
            state.allHome = data
        }
    },
    actions: {

    }
});

export default store;