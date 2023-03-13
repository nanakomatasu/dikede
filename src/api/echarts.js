import request from "@/utils/request";

export const lineApi = (id, start, end) => {
  return request({
    method: "get",
    url: `/order-service/report/amountCollect/${id}/${start}/${end}`,
  });
};

export const barApi = (bstart, bend) => {
  return request({
    method: "get",
    url: `order-service/report/regionCollect/${bstart}/${bend}`,
  });
};
