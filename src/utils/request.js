import axios from "axios";
import VueCookies from "vue-cookies";
const request = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

request.interceptors.request.use(
  (config) => {
    const token = VueCookies.get("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      this.$router.push("/login");
    } else {
      console.log(err.response.data.message);
    }
    return Promise.reject(err);
  }
);

export default request;
