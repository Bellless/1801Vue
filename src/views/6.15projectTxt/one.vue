<template>
  <!-- 登录页面 -->
  <!-- template这个标签就是用来写我们的html结构的 弹性布局 -->
  <!-- 有且只有一个div  所有的内容都应该在这个div里面 -->
  <div class="temp">
    <div class="content">
      <div class="logo_div">
        <div class="logo_div_two">
          <!-- 旋转logo -->
          <div class="rotate">
            <div class="middle">
              <img src="../../assets/img/login/icon/quan1.png" alt />
            </div>
            <div class="small">
              <img src="../../assets/img/login/icon/diqiu.png" alt />
            </div>
            <div class="line-big">
              <img src="../../assets/img/login/icon/quan2.png" alt />
            </div>
          </div>
        </div>
        <!-- <p class="logo-div-p">了解行业动态</p> -->
      </div>
      <div class="regsit">
        <div class="rgs1">
          <p>登录账号</p>
        </div>
        <div class="rgs2">
          <p>账号注册</p>
        </div>
      </div>
      <div class="host" >
        <img src="..\..\assets\img\login\phone.png" alt="" class="hostImg">
        <input type="text" class="ipt">
        <img src="..\..\assets\img\login\close.png" alt="" class="hostImg">
      </div>
    </div>
  </div>
</template>

<script>
// 这里面就是用来写js 方法等等的

export default {
  name: "Home"
};
</script>

<style lang="stylus" scoped>
// 局部引入
@import '../../assets/css/login_icon.css';
@import '../../assets/css/common.stylus';

/* scoped 表示样式只能在当前页面上生效 */
/* 这里面是写css的 */
.temp {
  position: relative;
  width: 100%;
}

.content {
  position: relative;
}

.regsit {
  common_Font(26px, rgba(50, 65, 251, 0.6));
  common_Cls();
}

.rgs2 {
  padding-left: 0.5rem;
  common_Font(22px, #000);
}

.host {
  common_Cls();
  justify-content space-between;
  border-bottom 1px solid blue;
  .hostImg {
    width 0.8rem;
  }
  .ipt{
    }
}
</style>


