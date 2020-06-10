<template>
  <!-- 二级路由嵌套 -->
  <!-- 子组件 -->
  <div class="aaa">
    <h1>这是二级路由的页面</h1>
    <button @click="fnClose">点击关闭弹出层</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    fnClose() {
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
    console.log(this.$route.params.arrayss);
  },
  mounted() {}
};
</script>
<style scoped>
.aaa {
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
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