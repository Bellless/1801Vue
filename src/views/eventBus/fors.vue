<template>
  <div>
    <!-- 在Vue中 组件包含子组件 父组件 孙组件 孙孙组件 ... -->
    <!-- 如果要实现从父组件中 传递值给孙组件 孙孙组件就要用eventBus这个机制 -->
    <p>这是父组件页面</p>
    <router-link to="tanchuan">
      <p>打开子组件</p>
      <button @click="fnToParms">从父组件中传递参数给子组件或者孙组件</button>
    </router-link>
    <!-- router-view将index.js里面的路由规则 在当前页面上匹配到的渲染出来 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      parm:"这是父组件传递的参数"
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 父组件传递参数给子或者孙组件
    fnToParms(){
      window.eventBus.$emit("Toparms",this.parm)
    }
  },
  created() {
    window.eventBus.$on("aceptParm",value=>{
      // value就是子组件传递过来的参数
      console.log(value);
    })
    window.eventBus.$on("aceptParmSun",value=>{
      console.log(value);
    })
  },
  mounted() {}
};
</script>
<style scoped>
</style>