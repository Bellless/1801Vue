<template>
  <div class="template">
    <!--   axios请求（第三方插件）（底层是使用的http协议）
      请求： 用来和后台进行数据通信   
      通信:（例如将我们账户的账户信息存储到后台服务器上） -->
    <div class="content">
      <h2>请注册</h2>
      <!-- 登录 -->
      <div class="one">
        <div class="oneP">
          <p>请输入注册的账号名:</p>
        </div>
        <input type="text">
      </div>
      <div class="two">
        <div class="oneP">
          <p>请输入注册的密码:</p>
        </div>
        <input type="text">
      </div>
      <button class="btn">点击注册</button>
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
<style scoped>
.template {
  width: 100%;
  position: relative;
}
.content {
  width: 90;
  background-color: gainsboro;
  margin: 0 auto;
  position: relative;
  font-size: 16px;
}
.oneP{
  width: 38%;
  /* background-color: green; */
  text-align: right;
}
.one {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: .5rem 0;
}
.two {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.btn{
  margin: .5rem 0;
  font-size: 16px;
  padding: .3rem;
}
input{
  height: .8rem;
}
h2{
  padding: .3rem 0;
}
</style>