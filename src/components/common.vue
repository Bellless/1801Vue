<template>
  <div class="one">
    <p>
      这是公用的组件
    </p>
    <!-- vue中有一个$emit的机制从子组件传递参数给父组件 -->
    <!-- 子组件中的写法是  $emit('acprop',要传递的参数) -->
    <!-- $emit('acprop',要传递的参数) 必须由一个点击事件触发 -->
    <!-- 父组件中的写法是:
      1.先引入我们要的组件 例如<common_one/>
      2.引入的组件中 绑定一个@acprop="自定义方法名" 例如common_one @acprop="自定义方法名"/>
      3.要把@acprop里面的自定义方法名拿到crated里面书写
      4.@acprop里面的自定义方法中有一个val参数，这个参数就是子组件传递过来的参数 -->
    <button @click="fnToparent">像父组件传递值</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // message
  },
  data() {
    return {
      text: "这是子组件向父组件传递的值",
      date: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnToparent() {
      // 传值的时候 子组件中的写法：
      this.$emit("acprop", this.text);
    }
  },
  created() {
    console.log(this.message);
  },
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
  background-color: aqua;
  display: flex;
  justify-content: center;
}
</style>