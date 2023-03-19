import request from "@/utils/request";

export const loginApi = (input, password, imgcode) => {
  return request({
    method: "post",
    url: "user-service/user/login",
    data: {
      loginName: input,
      password: password,
      code: imgcode,
      clientToken: "1",
      loginType: "0",
    },
  });
};

export const imgcodeApi = () => {
  return request({
    method: "get",
    url: `user-service/user/imageCode/1`,
    responseType: "blob",
  });
};
