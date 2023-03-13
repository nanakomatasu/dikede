import { loginApi } from "@/api/user";
import router from "@/router";
import VueCookies from "vue-cookies";
import { Message } from "element-ui";
const state = {
  xAis: [],
  series: [],
};

const mutations = {};

const actions = {
  async onlogin ({ input, password, imgcode, getpic, loding }) {
    try {
      const res = await loginApi(input, password, imgcode);
      if (res.data.success) {
        Message({
          showClose: true,
          message: "登录成功",
          type: "success",
          duration: 400,
        });
        VueCookies.set("token", res.data.token, "3h");
        loding = true;
        setTimeout(() => {
          router.push("/");
        }, 800);
      } else {
        Message({
          showClose: true,
          message: res.data.msg,
          type: "error",
          duration: 800,
        });
        getpic();
      }
      console.log(res.data);
    } catch (err) {
      alert(err.data.message);
    }
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
