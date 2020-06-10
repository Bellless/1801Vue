<template>
  <!-- <div>
    <p v-text="msg">{</p>
    <input type="text" v-model="value2">
    <button @click="butt">确认</button>
    <p v-text="value2"></p>
    <button @click="txt">if条件真假判断</button>
  </div> -->
  <div>
    <!-- 块级元素 会单独的占用浏览器一行 -->
    <!-- 行内元素  两个或者多个行内元素可以并排显示 -->
    <!-- <div class="div1">
        <div class="div2"></div>
        <div class="div2"></div>
        <div class="div2"></div>
        <div class="div2"></div>
        <div class="div2"></div>
      </div> -->
    <div>
      <p v-if="name=='小明'">小明</p>
      <p v-else-if="name=='小红'">小红</p>
      <p v-else-if="name== '小蓝'">小蓝</p>
      <p v-else="name=='小绿'">小绿</p>
      <!-- v-show是boolean值  值为true的时候就显示 
      值为false就隐藏不显示 -->
      <!-- v-show就是用来显示某个便签 -->
      <p v-show="show">我是v-show执行的时候</p>
      <button @click="btn">隐藏按钮</button>

      <!-- vue的三元运算符 -->
      <!-- 三元运算符 就相当于if else语句 -->
      <!-- 三元运算符中 后面的部分相当于else -->
      <!-- 三元运算符 一般用于动态改变类名 -->
      <!-- <h3 :class="san?'h3one':'h3two'">三元运算符</h3> -->
      <!-- <button @click="btnFont">改变字体颜色</button> -->

      <!-- vue中循环语句 -->
      <!-- item 就是指循环一次返回的对象 如果要找到对象中的任意对象名 用item.对象名 的方式 -->
      <!-- <div v-for="(item,index) in arrlist" :key="index">
        <p v-text="index" style="color:black"></p>
        <p v-text="item.name" style="color:black"></p>
      </div> -->
      <div v-for="(itme,index) in arrayss" :key="index">
        <p v-text="index" style="color:red"></p>
        <p v-text="itme.name" style="color:red"></p>
        <p v-text="itme.number" style="color:red"></p>
      </div>
    </div>
    <p :class="tr?'h3one':'h3two'">000000</p>
    <button @click="on">改变</button>
    <!-- a标签跳转 能跳转到对应的vue文件中去 但是a标签跳转的方式 里面的内容不会显示出来 -->
    <!-- router-link方式跳转 -->
    <!-- to里面放的就是我们路由规则里面的path路径 -->
    <router-link to="/one">
      <p>跳转</p>
    </router-link>
    <!-- vue中 从A页面跳转到B页面的时候 要传递参数（从A页面带东西去B页面使用） -->
    <!-- name 你要跳转的路由名称（router下面index.js里面匹配的） -->
    <!-- 用router-link组件(一个页面与一个页面)之间传递参数 -->
    <!-- params 要传递的参数 -->
    <!-- name  params  传递 第一种-->
    <!-- path query 传递 第二中 -->
    <router-link :to="{name:'three',params:{arrayss}}">
      <p>router-link第一种跳转方式</p>
    </router-link>
    <router-link :to="{path:'/four',query:{arrayss}}">
      <p>router-link第二种跳转方式</p>
    </router-link>
    <button @click="button1">读</button>
    <router-link to="/review">
      <h2>跳到review页面</h2>
    </router-link>
    <router-link :to="{name:'review',params:{msg}}">
      <h2>跳转到review页面2</h2>
    </router-link>
    <router-link :to="{path:'/review',query:{value2}}">
      <h3>跳转到review页面2的第在二钟方法</h3>
    </router-link>
    <common_one/>
    <!-- <common_six/> -->
  </div>
</template>

<script>
var time = 0;
var timeTwo = 0;
export default {
  components: {},
  props: {},
  // data里面用来写数据的
  data() {
    return {
      tr: true,
      msg: "这是数据源的msg",
      value2: "默认值",
      ta: false,
      name: "小5",
      show: true,
      san: false,
      arrayss: [
        {
          number: 1,
          name: "aa"
        },
        {
          number: 2,
          name: "bb"
        },
        {
          number: 3,
          name: "cc"
        }
      ],
      routerlinkdata: "上一个页面中的数据源"
    };
  },
  watch: {},
  computed: {},
  // methods里面写方法或者点击事件等
  methods: {
    butt() {
      // this.h(), console.log(this.value2);
    },
    h() {
      console.log("52645155");
    },
    txt() {
      if (this.ta) {
        console.log("这是条件为真的时候进去");
      } else {
        console.log("这是条件为假的时候进去");
      }
    },
    btn() {
      // console.log("点击事件生效");
      this.show = false;
      // 判断一个数是奇数还是偶数
      time += 1;
      console.log(time);
      if (time % 2 == 0) {
        console.log("偶数");
        this.show = true;
      } else {
        console.log("奇数");
        this.show = false;
      }
    },
    btnFont() {
      timeTwo += 1;
      if (timeTwo % 2 == 0) {
        this.san = true;
      } else {
        this.san = false;
      }
    },
    on() {
      time += 1;
      if (time % 2 == 0) {
        this.tr = true;
      } else {
        this.tr = false;
      }
    },
    button1() {
      console.log(this);
      // 动态跳转路由(跳转页面)
      // $router 这是vuerouter里面的对象 push方法就是跳转
      // 固定的写法
      this.$router.push({ path: "/three" });
    }
  },
  // created里面也是可以用来写方法 但是created里面的方法会最先执行
  // created里面的所有内容都会默认执行
  created() {
    this.butt();
    this.txt;
  },
  mounted() {}
};
</script>
<style scoped>
.h3one {
  color: red;
}
.h3two {
  color: green;
}
p {
  /* color: gold; */
}
span {
  color: cyan;
}
.div1 {
  /* 一般情况 我们在开发过程中 不设置固定的宽度或者高度 */
  /* 水平居中 它只能在一个div上设置了固定的宽度的时候才能居中 */
  /* 当我们最外层div没有设置固定的宽度的时候，他的宽度会跟随浏览器的窗口尺寸进行变化 */
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: red;
  /* ****弹性布局定义在大的那个div（包裹要并排显示的那个div上） */
  /* 弹性布局（弹性盒子） 就是拿来方便我们使用的
  1.方便我们并排显示
  2.方便我们居中（上下 左右）
  3.弹性布局中 不管是什么类型的标签元素都会并排显示
   */

  /* 写弹性布局的步骤
    1.定义弹性布局（弹性布局只能写在div上）
    2.(justify-content)定义水平排列的方式
    3.(align-items) 定义垂直（竖直）排列方式
   */
  /* display: flex; */
  /* center水平居中 */
  /* justify-content: center; */
  /* space-between两端对齐 */
  /* justify-content: space-between; */
  /* space-around两端距离相等 中间距离不相等 */
  /* justify-content: space-around; */
  /* flex-start坐对齐（弹性布局中默认的水平对齐方式） */
  /* justify-content: flex-start; */
  /* flex-end右对齐 */
  /* justify-content: flex-end; */

  /* center竖直（垂直）居中 */
  align-items: center;
  /* flex-startd顶端对齐 */
  /* align-items: flex-start; */
  /* flex-end底部对齐 */
  /* align-items: flex-end; */

  /* flex-direction定义弹性布局中项目（div 标签）的排列方式（并排显示 换行显示） */
  /* row 默认值（并排的）  column 换行 */
  flex-direction: column;
}
.div2 {
  width: 50px;
  height: 50px;
  background-color: green;
  margin: 20px 0;
}
</style>