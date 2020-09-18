import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入我们要跳转的页面
import Home from '../views/Home.vue'
import One from '../views/one.vue'
import to from '../views/to.vue'
import tanchuan from '../views/eventBus/tanchuan.vue'
import four from '../views/four.vue'
import fors from '../views/eventBus/fors.vue'
import tanchuan2 from '../views/eventBus/tanchuan2.vue'
import five from '../views/five.vue'
import review from '../views/review.vue'
import six from '../views/six.vue'
import stylusText from '../views/stylusText.vue'
import styleTwo from '../views/styleTwo.vue'
import axiosOne from '../views/axioss/one.vue'
import child from '../views/父子组件传参/child.vue'

// vue要想使用公用的组件 
// 第一个步骤先在router文件夹下面index.js文件里面引入文件
// 引入公用的组件
import common from '../components/common.vue'
// 第二个步骤 就是注册为全局（整个vue项目中都可以使用）的公用组件
// 写法:
// Vue.component(第一个参数, 第二个参数)
// 第一个参数： 你自定义的组件名
// 第二个参数： 你要注册的组件
// 使用方法： 使用的时候用第一个参数  写法 <common_one/> ）
Vue.component("common_one", common)

Vue.component("common_six", six)

Vue.component('childs', child)


Vue.use(VueRouter)
    // 定义一个路由规则
    // 所有的页面跳转 都要根据router文件夹目录下的index.js里面的路由规则来
    // 如果 你要跳转到某个页面 但是你没有写规则 那你就跳不了

const routes = [
    // routes数组包含多个对象 每个对象就是一个路由规则
    {
        // path 浏览器端访问的路径 (就是用来router-link中使用)
        path: '/',
        // name 要跳转到组件（页面）的名字  (一般命名：组件是什么名字name就是什么)
        name: 'Home',
        // component 组件位置
        component: Home,
        children: [{
            path: '/six',
            name: 'six',
            component: six
        }]
    },
    // vue中路由分为多级路由
    // 一般常用一级路由 二级路由 三级路由
    // 一级路由 （相当于新开一个页面）
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue'),
        // 二级路由（相当于是一级路由的子组件）
        // children: [{
        //     path: '/three',
        //     name: 'three',
        //     component: three,
        // }]
    },
    {
        path: "/one",
        name: 'One',
        component: One,
    }, {
        path: "/to",
        name: 'to',
        component: to,

    }, {
        path: '/four',
        name: 'four',
        component: four,
    }, {
        path: '/fors',
        name: 'fors',
        component: fors,
        children: [
            // 二级路由
            // 一般用于， 在一个页面中需要弹出一个页面（ 一个页面覆盖另一个页面） 
            {
                path: '/tanchuan',
                name: 'tanchuan',
                component: tanchuan,
            }
        ]
    },
    {
        path: '/tanchuan2',
        name: 'tanchuan2',
        component: tanchuan2,
    }, {
        path: '/five',
        name: 'five',
        component: five,

    }, {
        path: '/review',
        name: 'review',
        component: review
    }, {
        path: "/stylusText",
        name: 'stylusText',
        component: stylusText,
    },
    {
        path: "/styleTwo",
        name: 'styleTwo',
        component: styleTwo,
    }, {
        path: "/one2",
        name: 'one2',
        // 路由懒加载（ 需要的时候才加载进来 不需要的时候不加载）
        component: () =>
            import ('../views/6.15projectTxt/one.vue')
    }, {
        path: "/parent",
        name: 'parent',
        // 路由懒加载（ 需要的时候才加载进来 不需要的时候不加载）
        component: () =>
            import ('../views/父子组件传参/parent.vue')
    }, {
        path: "/axiosOne",
        name: 'axiosOne',
        component: axiosOne, 
    },
    {
        // 路由传参用到  path+query
        // 路由传参用到 name+param
        path: '/2020.9.15',
        name: '2020.9.15',
        component: () =>
            import('../views/2020.9.15.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router