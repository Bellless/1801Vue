<template>
<!-- 父组件 -->
<div>
  <h2>父组件传递参数给子组件</h2>
  <p>{{chld}}</p>
  <!-- 父子组件传参第一种写法 props -->
  <!-- :parms='msg'父组件的写法 -->
  <!-- 子组件传递给父组件 采用$emit()的写法 -->
  <!-- :可以用来直接在页面结构上  找到data数据源里面的东西 -->
  <childs @event="aceptParms" :parms='msg'/>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      msg:"这是父组件传递的参数",
      chld:"",
    }
  },
  watch:{},
  computed:{},
  methods:{
    // val就是子组件传递过来的值
    aceptParms(val){
      console.log(val);
      this.chld=val
    }
  },
  created(){
     window.eventBus.$on("updata",()=>{
       alert("aaa")
     })
  },
  mounted(){}
}
</script>
<style scoped>

</style>