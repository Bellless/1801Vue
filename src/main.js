// main.js是一个vue的入口文件
// 所有的三方插件（ 用npm安装的插件） 都要在这个里面进行注册才能使用
// 自定义组件一样的要注册才能使用
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 安装其他插件的时候，可以直接在 main.js 中引入并使用 Vue.use()来注册，
// 但是 axios并不是vue插件，所以不能使用Vue.use()，所以只能在每个需要发送请求的组件中即时引入。
// 为了解决这个问题，我们在引入 axios 之后，通过修改原型链，来更方便的使用。
import axios from 'axios'
// 挂载到vue的原型
Vue.prototype.$http = axios

window.eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')