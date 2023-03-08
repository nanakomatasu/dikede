import axios from "axios";
const request = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data.data;
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
