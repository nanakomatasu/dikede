import request from "@/utils/request";

export const loginApi = (data) =>
  request({
    method: "post",
    url: "user-service/user/login",
    data,
  });
