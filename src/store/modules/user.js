const state = {
  info: {
    username: "",
    password: "",
    imgCode: "",
  },
};

const mutations = {
  chusername (state, name) {
    state.info.username = name;
  },
  chpassword (state, pas) {
    state.info.password = pas;
  },
  chimgcode (state, img) {
    state.info.imgCode = img;
  },
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
