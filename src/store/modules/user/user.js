export default {
  state: {
    info: {
      username: "",
      password: "",
      imgCode: "",
    },
  },
  mutations: {
    chusername (state, name) {
      state.info.username = name;
    },
    chpassword (state, pas) {
      state.info.password = pas;
    },
    chimgcode (state, img) {
      state.info.imgCode = img;
    },
  },
  actions: {},
  namespaced: true,
};
