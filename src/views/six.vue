<template>
  <!-- template里面写页面结构（html） 
注意事项：最外层只能有一个div
-->
  <!-- 最外层div -->
  <!-- 所有的内容（所有的html结构）都应该写在最外层div里面 -->
  <div>
    <!-- vue中所有的指令都应该写在标签里面 -->
    <input type="text" name="" id="" v-model="msg">
    <span>这是输入框里面的值:</span>
    <span v-text="msg"></span>
    <p v-show="false">这是v-show</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      // 定义数据源
      // 可以用来给页面调用
      msg: "我是data数据U"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
/* css书写的地方 */
/* scoped 表示样式只在当前页面生效 */
</style>