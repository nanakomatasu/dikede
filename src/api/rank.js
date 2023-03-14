import request from "@/utils/request";
export const rankApi = () => {
  return request({
    method: "get",
    url: "order-service/report/skuTop/10/2023-03-01/2023-03-14",
  });
};
