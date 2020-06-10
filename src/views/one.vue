<template>
  <div id="one">
    <p class="aaa">
      这是路由跳转
    </p>
  </div>
</template>

<script>
export default {
  name: "one",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
// scoped表示style里面的样式 只能在当前页面生效
<style scoped>
.aaa {
  color: red;
  font-size: 28px;
}
</style>