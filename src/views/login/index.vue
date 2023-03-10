<template>
  <div class="login-container">
    <div class="ava"><img src="@/assets/ava.png" alt=""></div>
    <el-card class="box-card">
      <div class="form">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <div class="yanz">
          <el-input v-model="imgcode" placeholder="请输入内容" class="pic"></el-input>
        <div class="picm" @click="() => {
          this.getpic()
        }">
          <img :src="src" alt="" class="codeimg">
        </div>
        </div>

        <el-button @click="onlogin" :loading="loding">登录</el-button>
      </div>
</el-card>
  </div>

</template>

<script>
import request from '@/utils/request';
export default {
  props: {

  },
  data () {
    return {
      input: '',
      password: '',
      value: '',
      imgcode: '',
      id: '',
      src: '',
      loding: false
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.getpic)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async getpic () {
      const res = await request({
        method: "get",
        url: `user-service/user/imageCode/1`,
        responseType: 'blob'
      })

      // this.imgcode = `data: image/jpeg;base64,${btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
      console.log(res);
      this.src = window.URL.createObjectURL(res.data);
      console.log(this.src);
    },
    getnum () {
      this.id = Math.random() * 10
    },
    async onlogin () {
      try {
        const res = await request({
          method: 'post',
          url: 'user-service/user/login',
          data: {
            loginName: this.input,
            password: this.password,
            code: this.imgcode,
            clientToken: 1,
            loginType: '0'
          }
        })
        if (res.data.success) {
          this.$message({
            showClose: true,
            message: '登录成功',
            type: 'success',
            duration: 200
          });
          this.$cookies.set('token', res.data.token, '3h')
          this.loding = true
          setTimeout(() => {
            this.$router.push('/home')
          }, 300);
        } else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'error',
            duration: 800
          });
        }console.log(res.data);
      } catch (err) {
        alert(err.data.message)
      }
    }

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
    background-image: url(~@/assets/bck.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.ava {
  position: absolute;
  left: 50%;
  top: 120px;
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

.yanz {
  display: flex;
  justify-content: space-around;
height: 40px;
margin-bottom: 30px;
  img {
    height: 40px;
  }
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
