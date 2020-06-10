<template>
  <div>
    <div>
      <p class="aaa">
        测试自定义变量
      </p>
      <p class="bbb">
        测试自定义方法
      </p>
      <div>
        <div class="ddd">
          <p>这是父类的样式</p>
        </div>
        <div class="ttt">
          <p>这是子类的样式</p>
        </div>
      </div>
      <div class="ccc">
        <p>首页</p>
        <p>娱乐圈</p>
        <p>个人中心</p>
      </div>
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
/* css3的写法 */
// lang指定它的语法格式
<style lang="stylus" scoped>
// 我们写样式 用预处理器一样的可以定义变量 定义方法 继承方法 跟java php类似

// 定义变量
// 定义格式： $+自定义变量名=变量值
// 调用格式: css属性+$自定义变量名
$aa = 26px;

// 定义方法
// 定义格式:自定义方法名(参数，参数){}
// 调用格式:直接在需要的地方把自定义方法名写进去就可以了
common_fontSize() {
  font-size: 25px;
  color: green;
}

// 参数:形参 实参
// 形参：没被调用的时候是一个空的没有实际作用
// 只有当我们的方法被调用的才有值 他只是用来存储值的容器
// 实参：就是指  传递给形参用
// fs,cr形参
common_fontSizeTwo(fs, cr) {
  font-size: fs;
  color: cr;
}

// 弹性布局的兼容写法
// -xxxx- 这个表示某个浏览器的内核
_common_flex() {
  display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
  display: -moz-box; /* Firefox 17- */
  display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
  display: -moz-flex; /* Firefox 18+ */
  display: -ms-flexbox; /* IE 10 */
  display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
}

.aaa {
  font-size: $aa;
}

.bbb {
  // common_fontSize();
  common_fontSizeTwo(28px, red);
}

.ccc {
  position: fixed;
  bottom: 0;
  background-color: red;
  color: white;
  justify-content: space-around;
  _common_flex();
  width: 100%;
  left: 0;
}

.ddd {
  width: 50%;
  margin: 0 auto;
  background-color: red;
  common_fontSizeTwo(30px, green);
}

// 继承父类样式
// 书写格式：@extend
.ttt {
  @extend .ddd;
  // 如果子类的样式中 要重写（覆盖）父类的样式 直接写对应的css属性就可以了
  width: 60%;
}
</style>
