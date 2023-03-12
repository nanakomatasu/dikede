import request from "@/utils/request";
const state = {
  xAis: [],
  series: [],
};

const mutations = {
  changexAis (state, newArr) {
    state.xAis = newArr;
  },
  changeseries (state, newArr) {
    state.series = newArr;
  },
};

const actions = {
  async getsalelist (context, id) {
    const res = await request({
      method: "get",
      url: `/order-service/report/amountCollect/${id}/2023-03-06/2023-03-11`,
    });
    console.log(res.data.xAxis);
    console.log(res.data.series);
    context.commit("changexAis", res.data.xAxis);
    context.commit("changeseries", res.data.series);
    // this.series = res.data.series;
    // this.xAxis = res.data.xAxis;
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
