// main.js是一个vue的入口文件
// 所有的三方插件（ 用npm安装的插件） 都要在这个里面进行注册才能使用
// 自定义组件一样的要注册才能使用
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端项目一般采用淘宝的适配方案 （flexible） 安装>>全局引用

// 安装其他插件的时候，可以直接在 main.js 中引入并使用 Vue.use()来注册，
// 但是 axios并不是vue插件，所以不能使用Vue.use()，所以只能在每个需要发送请求的组件中即时引入。
// 为了解决这个问题，我们在引入 axios 之后，通过修改原型链，来更方便的使用。
import axios from 'axios'
// 挂载到vue的原型
Vue.prototype.$http = axios

// 全局引入淘宝适配方案
import 'lib-flexible';
// 在以后的开发中， 凡是涉及到路由传参获取涉及到子页面在进行某项操作的时候
// 要求在父页面进行什么操作时就用eventBus这个机制
// 建议 在涉及到子父组件传参的时候也用eventBus这个机制
// eventBus用于孙组件传值给父组件和父子组件传值 不能用于父到孙传值
// 全局声明挂载eventBus机制
// window.eventBus.$emit window.eventBus.$on 点击事件触发
// 子组件中的写法 window.eventBus.$emit("自定义方法名", 传递的参数)
// 父组件中的写法 window.eventBus.$on("自定义方法名", value=>{})
window.eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')