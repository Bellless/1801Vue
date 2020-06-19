<template>
  <!-- 子组件 -->
  <div class="childern">
    <h4 style="margin:0">这是子组件</h4>
    <p>这是父组件传递给子组件的参数（采用的是props）:</p>
    <p v-text="parms"></p>
    <!-- 子组件传递参数给父组件 采用$emit的方式 -->
    <button @click="fnToPar">子组件传递数据给父组件</button>
  </div>
</template>

<script>
export default {
  components: {},
  // props就是子组件中接收父组件传递的参数
  // props传递过来的参数 要使用的话和data数据源使用的方法是一样的
  // 使用props一定要用type指定传递的数据类型
  props: {
    parms:{
      type: String,
    }
  },
  data() {
    return {
      params:"这是子组件传递给父组件的参数"
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnToPar(){
      // $emit(第一个参数,第二个参数)
      // 第一个参数自定义方法名 第二个参数是传递的值
      // 在父组件中 一定要与子组件中这里的自定义方法名对应上 书写格式
      // 父组件中 @event="自定义方法"
      this.$emit(event, this.params)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.childern{
  background-color: red;
  width: 80%;
  margin: 0 auto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
}
</style>