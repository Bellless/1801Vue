<template>
  <!-- template里面写html结构 -->
  <div>
    <div class="div1">
      <div class="div2"> </div>
      <div class="div3" @click="div3">点击显示数值</div>
    </div>
    <input type="text" v-model="txt">
    <p v-text="txt">这是输入的内容：</p>//只能渲染
    <p v-text="str"></p>
    <p v-show="xy">djaldfnlalk ihdhfef n</p>
    <button @click="btn">点击</button>
    <div v-for="(itme,index) in forlist" :index="index">
      <p v-text="index"></p>
      <p v-text="itme.name"></p>
      <p v-text="itme.num"></p>
    </div>
    <p v-text="txt"></p>
  </div>
</template>
<script>
// script里面写方法，数据源，变量等
var couts = 0;
export default {
  components: {},
  props: {},
  // data里面写数据源
  data() {
    return {
      str: "输出str里面的内容",
      str1: "......输出str1里面的内容....",
      txt: "这是默认值",
      xy: true,
      forlist: [
        {
          name: "苹果",
          num: 1
        },
        {
          name: "梨",
          num: 2
        },
        {
          name: "西瓜",
          num: 3
        }
      ]
    };
  },
  watch: {},
  computed: {},
  // methods里面写方法
  methods: {
    div3() {
      couts += 1;
      console.log(couts);
      if (couts % 2 == 0) {
        this.str = "sadadadsadas";
        console.log("进入");
      } else {
        this.str = this.str1;
      }
    },
    btn() {
      couts += 1;
      console.log(couts);

      if (couts % 2 == 0) {
        this.xy = true;
      } else {
        this.xy = false;
      }
    }
  },
  // created是浏览器加载时最先执行里面的方法
  created() {
    console.log(this.$route.params.msg);
    console.log(this.$route.query.value2);
  },
  mounted() {}
};
</script>
<style scoped>
/* style里面写样式 */
.div1 {
  width: 500px;
  height: 500px;
  background-color: red;
  display: flex;

  /*水平方向两端对齐 justify-content: space-between; */
  justify-content: center;
  align-items: center;
  /* 竖直方向显示
  flex-direction: column; */
  flex-direction: row;
}
.div2 {
  width: 100px;
  height: 100px;
  background-color: greenyellow;
}
.div3 {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>