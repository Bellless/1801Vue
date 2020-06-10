<template>
  <div>
    <p>这是router-link第二种跳转的方式：</p>
    <p>path + query</p>
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
    console.log(this.$route.query.arrayss);
  },
  mounted() {}
};
</script>
<style scoped>
</style>