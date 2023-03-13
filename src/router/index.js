import Vue from "vue";
import VueRouter from "vue-router";

import main from "./modules/main";
import task from "./modules/task";
Vue.use(VueRouter);
const constantroutes = [
  { path: "/login", component: () => import("@/views/login") },

  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited
];
const asyncRouter = [main, task];
const createrouter = () =>
  new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [...constantroutes, ...asyncRouter],
  });

const router = createrouter();
export default router;
