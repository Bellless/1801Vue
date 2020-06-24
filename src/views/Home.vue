<template>
  <div class="home">
    <!-- Vue双向数据绑定 -->
    <!-- v-model 绑定值（绑定一个数据值 当我们这个数据值变动的时候 对应的地方都会变） -->
    <!-- v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值
    而总是将 Vue 实例的数据作为数据来源。
    你应该通过 JavaScript 在组件的 data 选项中声明初始值。 -->
    <input type="text" v-model="text">
    <p>这是输入的内容：{{text}}</p>
    <!-- v-text 就是vue的文本数据（可以直接调用data里面的数据） -->
    <h2 v-text="h2"></h2>
    <p @click="fn">this指向使用</p>
    <p @click="fn2">this2的使用</p>
    <!-- 复选框 -->
    <input type="checkbox" id="checkbox" v-model="checked">
    <router-link :to="{name:'fors',params:{aaa:'内容'}}">
      <h3>eventBus传参机制</h3>
    </router-link>
    <router-link :to="{path:'/five',query:{msg}}">
      <p>跳转</p>
    </router-link>
    <button @click="btn">跳转</button>
    <br>
    <!-- <router-link to='six'>二级路由(打开子组件)</router-link> -->
    <router-view></router-view>
    <common_one @acprop='childToParent' :users='users' />
    <router-link to="/one2">
      <button>登录</button>
    </router-link><br>
    <router-link to="parent">
      <button>父子组件传参测试</button>
    </router-link>
    <br>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/stylusText">stylus测试 |</router-link>
    <router-link to="/styleTwo">styes测试2 |</router-link>
    <!-- 路由传参 -->
    <!-- 1.父传参到子组件 -->
    <!-- 2.子组件传参到父组件 -->
    <!-- 3.兄弟组件传参 -->
    <!-- 父子组件传参测试 -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  // 数据源
  // data里面的数据 可以在这个页面中调用出来
  // data数据源里面所有的数据类型都可以自己定义
  data() {
    return {
      shuzu: [],
      msg: "这是data数据",
      text: "",
      h2: "这是data里面的数据",
      checked: false,
      checkedtwo: "",
      message: "这是父组件传递的参数",
      users: [{ id: 1, name: "Henry" }, { id: 2, name: "Tom" }]
    };
  },
  // 就是用来写方法 写事件
  methods: {
    // vue中的this是一个对象
    // 它可以调用到data里面的任何数据 其次也可以在其它地方可以调用不同的方法
    // 在一个方法里面 如果要调用data里面的数据源 可以用this指向
    // 凡是vue的实例里面所有内容 都可以用this指向找到
    fn() {
      alert(this.h2);
      console.log(this.msg);
      console.log(this.h2);
      console.log(this);
    },
    fn2() {
      this.fn();
    },
    fn3() {
      this.checkedtwo = true;
    },
    btn() {
      this.$router.push({ path: "/fors" });
    },
    childToParent(val) {
      console.log(val);
    }
  }
};
</script>
