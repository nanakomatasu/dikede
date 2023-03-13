import request from "@/utils/request";
export const rankApi = () => {
  return request({
    method: "get",
    url: "/status-service/status/top10/2023-03-01/2023-03-11",
  });
};
