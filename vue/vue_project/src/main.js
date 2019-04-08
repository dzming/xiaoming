import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false

new Vue({
    el: '#app',
    render(create) {
        return create(App);
    },
    router,

    // 将创建好的store注入到Vue根实例里
    store,
});