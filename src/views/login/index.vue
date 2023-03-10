<template>
  <div class="login-container">
    <div class="ava"><img src="@/assets/ava.png" alt=""></div>
    <el-card class="box-card">
      <div class="form">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-input v-model="input" placeholder="请输入内容" class="pic"></el-input><div class="picm">
          图片
        </div>
        <button>登录</button>
      </div>
</el-card>
  </div>

</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      input: '',
      password: '',
      value: ''
    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  },
};
</script>

<style scoped lang="less">
.login-container {
  position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url(@/assets/bck.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.ava {
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  width: 96px;
  height: 96px;
  z-index: 999;
  img {
    width: 100%;
    height: 100%;
  }
}
.box-card {
  box-sizing: border-box;
  padding: 0 40px;
  width: 518px;
  height: 388px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

.form {
    margin-top: 50px;
    text-align: left;
  .el-input {
    margin-bottom: 30px;
    width: 400px;
  }

  .pic {
    width: 300px;
  }
  button {
    width: 400px;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
    border: 0 ;
  }
}
}

</style>
