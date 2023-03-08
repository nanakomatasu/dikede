const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 理标识符（当请求地址包含.php 字符启用代理）
      "/api": {
        // 本地服务器向 target服务器请求数据
        target: "https://likede2-admin.itheima.net/likede/",
        // 允许跨域
        changeOrigin: true,
      },
    },
  },
});
