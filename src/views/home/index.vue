<template>
    <div>
      <el-container>
  <el-header><div class="navbar">
    <div class="logo">
      <img src="https://likede2-admin.itheima.net/img/logo.3673fab5.png" alt="" width="88" style="position: absolute; top: 10px; left: 20px;" >
    </div>
     <div class="userinfo">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <p>欢迎您,admin</p>
     <div class="logout">
      <el-dropdown>
  <span class="el-dropdown-link">
    退出<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item @click.native="tologout">退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
     </div>
     </div>
  </div></el-header>
  <el-container>
    <el-aside width="150px">
      <el-col>
    <el-scrollbar style="height: 100%; overflow-x: hidden;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      style="height: 710px;">

      <el-menu-item index="1" @click="() => {
          this.$router.push('/')
        }">
        <i class="el-icon-s-operation"></i>
        <span slot="title" >帝可得</span>
      </el-menu-item>
      <el-submenu index="2" >
        <template slot="title">
          <i class="el-icon-postcard"></i>
          <span>工单管理</span>
        </template>
        <el-menu-item index="2-1" @click="() => {
          this.$router.push('/task/business')
        }">运营工单</el-menu-item>
          <el-menu-item index="2-2" @click="() => {
            this.$router.push('/task/operation')
          }">运维工单</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <span>点位管理</span>
        </template>
        <el-menu-item index="3-1" >区域管理</el-menu-item>
        <el-menu-item index="3-2" >点位管理</el-menu-item>
        <el-menu-item index="3-3" >合作商管理</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item index="4-1" >设备管理</el-menu-item>
        <el-menu-item index="4-2" >设备状态</el-menu-item>
        <el-menu-item index="4-3" >设备类型管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item index="5-1" >人员列表</el-menu-item>
        <el-menu-item index="5-2" >人效统计</el-menu-item>
        <el-menu-item index="5-3" >工作量列表</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-fold"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="6-1" >商品类型</el-menu-item>
        <el-menu-item index="6-2" >商品管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="7" >
        <i class="el-icon-s-operation"></i>
        <span slot="title" >策略管理</span>
      </el-menu-item>
      <el-menu-item index="8" >
        <i class="el-icon-s-operation"></i>
        <span slot="title" >订单管理</span>
      </el-menu-item>
    </el-menu>

  </el-scrollbar>
  </el-col>
    </el-aside>
    <el-main>
      <transition name="scale" mode="out-in">
   <router-view></router-view>
</transition>

    </el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

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
    tologout () {
      this.$cookies.remove('token')
      this.$router.push('/login')
      console.log(111);
    },
  },
  components: {

  },
};
</script>

<style scoped lang="less">
/deep/.el-main {
  width: 1219px;
  padding: 0;
  margin-top: 60px;
  margin-left: 150px;
}
.el-header {
  height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1999;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
    background-size: cover;
    background-repeat: no-repeat;

    .userinfo {
      display: flex;
      align-items: center;
      position: absolute;
      right: 10px;
      top:8px;
      color: #fff;
      .el-dropdown-link {
        color: #fff;
        margin-left: 15px;
        cursor: pointer;
      }

      p {
        margin-left: 15px;
      }

      i {
        font-size: 8px;
      }
    }

}
.el-aside{
  text-align: left;
  position: fixed;
  left: 0;
  top: 50px;
  padding: 10px 0;
  z-index: 9999;
  img {
    margin-left: 20px;
  }
}
// .el-col::-webkit-scrollbar{
//   display: none;
// }
// .is-active {
//   background-color: #ffb200;
// }
.el-submenu .el-menu-item{
  color: rgb(136, 126, 126);
}
/deep/.is-opened {
  color: #5f84ff;
}
.el-submenu .is-active {
  background-color: transparent;
    color: #5f84ff;
}
// 滑动
// 滑动
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

</style>
