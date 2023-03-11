import router from "@/router";
import VueCookies from "vue-cookies";
router.beforeEach((to, from, next) => {
  const token = VueCookies.get("token");
  console.log(token);
  const whitelist = ["/login"];
  if (token) {
    if (to.path === "/login") {
      next("/");
      console.log(from);
    } else {
      next();
    }
  } else {
    if (whitelist.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
