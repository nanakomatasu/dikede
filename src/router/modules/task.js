import home from "@/views/home";
export default {
  path: "/task",
  component: home,
  redirect: "/home",
  children: [
    {
      path: "/task/business",
      component: () => import("@/views/task/business"),
    },
    {
      path: "/task/operation",
      component: () => import("@/views/task/operation"),
    },
  ],
};
