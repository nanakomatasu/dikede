import home from "@/views/home";
export default {
  path: "/",
  component: home,
  redirect: "/home",
  children: [{ path: "/", component: () => import("@/views/main") }],
};
