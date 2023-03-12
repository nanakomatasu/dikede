import Vue from "vue";
import Vuex from "vuex";
import echarts from "./modules/echarts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    echarts,
  },
});
