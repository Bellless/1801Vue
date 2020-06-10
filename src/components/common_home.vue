<template>
  <div class="one">
    <p>
      这是公用的组件2
    </p>

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
  created() {},
  mounted() {}
};
</script>
<style scoped>
.one {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
}
</style>