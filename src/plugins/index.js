// import PageTools from './PageTools/index.vue'

const requireComponent = require.context("./components", true, /\.vue$/);
const components = requireComponent.keys().map((key) => requireComponent(key));

export default {
  install (Vue) {
    // Vue.use(PageTools.name, PageTools)
    components.forEach((ele) => {
      Vue.component(ele.default.name, ele.default);
    });
  },
};
