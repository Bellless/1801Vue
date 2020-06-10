<template>
  <div id="hf">
    <p class="h1">输入文档</p>
    <div>
      <router-link to="/one">
        <button>点击切换</button>
      </router-link>
    </div>

  </div>
</template>
<script>
export default {
  name: "hf",
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
<style scoped>
.h1 {
  color: red;
  font-size: 36px;
}
</style>