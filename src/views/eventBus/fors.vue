<template>
  <div>
    <router-link to="tanchuan">
      <p>这是二级路由(路由嵌套)</p>
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
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    console.log(this.$route.params.aaa);
    window.eventBus.$on("event", value => {
      console.log(value);
    });
  },
  mounted() {}
};
</script>
<style scoped>
</style>