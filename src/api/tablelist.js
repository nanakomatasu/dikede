import request from "@/utils/request";
export const businessApi = (i) => {
  return request({
    method: "get",
    url: "/task-service/task/search",
    params: {
      pageIndex: i,
      pageSize: 10,
    },
  });
};
