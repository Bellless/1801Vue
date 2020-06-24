<template>
  <!-- 二级路由嵌套 -->
  <!-- 子组件 -->
  <div class="aaa">
    <h1>这是孙组件</h1>
    <button @click="fnClose">点击关闭弹出层并传递值</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      txt: "这是孙组件传递的参数"
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnClose() {
      // this.$emit('acprop',txt)
      // eventBus里面一样的使用$emit方法
      // 使用方法和之前的$emit一样
      window.eventBus.$emit("aceptParmSun",this.txt)
      // 路由嵌套中 返回上一级路由
      this.$router.go(-1);
      // 动态跳转到指定路由（页面）中
      // this.$router.push({path:""})
    }
  },
  created() {
    // 默认先执行created里面的东西
    // 动态跳转路由（跳转页面）
    // this.$router.push({path:"要跳转的路径"})
    // 获取传递的参数
    // this.$route.params.txt
    // console.log(this.$route.params.arrayss);
    window.eventBus.$on('Toparms',value=>{
      console.log("aaa");
      console.log(value);
    })
  },
  mounted() {}
};
</script>
<style scoped>
.aaa {
  height: 100%;
  background-color: red;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>