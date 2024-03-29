import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueCookies from "vue-cookies";
import "../permission";
import * as echarts from "echarts";
import plugins from "./plugins";

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.use(plugins);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
