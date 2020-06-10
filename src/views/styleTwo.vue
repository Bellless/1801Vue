<template>
  <div>
    <div class="one">
      <div class="two"></div>
      <div class="two"></div>
    </div>
    <div class="three">
      <div class="four"></div>
      <div class="four"></div>
    </div>

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
<style lang="stylus" scoped>
// 定义的变量：
$bck = red;
$bck2 = green;
$ft = 25px;
$bck3 = blue;
$bck4 = orange;

// 定义方法
common_fs() {
  // 这是公用的字体大小和颜色样式
  font-size: 24px;
  color: #1AEC53;
}

common_wh(w, h) {
  width: w;
  height: h;
}

// 浏览器兼容性的方法
_common_flex() {
  display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
  display: -moz-box; /* Firefox 17- */
  display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
  display: -moz-flex; /* Firefox 18+ */
  display: -ms-flexbox; /* IE 10 */
  display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
}

.one {
  // 样式中调用方法 参数单位，参数单位
  common_wh(300px, 450px);
  background-color: $bck;
  // 弹性调用
  // display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  _common_flex();
  margin: 0 auto;
}

.two {
  common_wh(100px, 100px);
  // 调用变量
  background-color: $bck2;
}

.three {
  @extend .one;
  background-color: $bck3;
}

.four {
  @extend .two;
  background-color: $bck4;
}

</style>