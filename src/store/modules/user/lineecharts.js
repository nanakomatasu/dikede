import { lineApi } from "@/api/echarts";
export default {
  state: {
    info: {
      xAxis: [],
      series: [],
    },
  },
  mutations: {
    getXlist (state, array) {
      state.xAxis = array;
    },
    getXseries (state, array) {
      state.series = array;
    },
  },
  actions: {
    async axioslist (context, { id, start, end }) {
      const res = await lineApi(id, start, end);
      console.log(res);
      context.commit("getXlist", res.data);
    },
  },
  namespaced: true,
};
