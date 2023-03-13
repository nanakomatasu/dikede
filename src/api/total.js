import request from "@/utils/request";
export const statsApi = () => {
  return request({
    method: "get",
    url: "/task-service/task/taskReportInfo/2023-03-01%2000:00:00/2023-03-13%2023:59:59",
  });
};

export const orderCountApi = () => {
  return request({
    method: "get",
    url: "/order-service/report/orderCount?start=2023-03-01+00:00:00&end=2023-03-13+23:59:59",
  });
};

export const orderAmountApi = () => {
  return request({
    method: "get",
    url: "/order-service/report/orderAmount?start=2023-03-01+00:00:00&end=2023-03-13+23:59:59",
  });
};
