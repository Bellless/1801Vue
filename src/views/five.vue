<template>
  <div class="aaa">
    <!-- 叫父组件 -->
    <router-link to="three">
      <h2>二级路由</h2>
    </router-link>
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
  methods: {
    tn() {
      console.log(this.$route.query.txt);
    }
  },
  created() {
    this.tn();
  },
  mounted() {}
};
</script>
<style scoped>
.aaa {
  background-color: red;
  color: wheat;
  width: 200px;
}
</style>