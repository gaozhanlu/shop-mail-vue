module.exports = {
  transpileDependencies: true,
  lintOnSave: false,

  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:6610',
        changeOrigin: true,
        pathRewrite: {
          // 重写路径，替换请求地址中的指定路径
          "^/api": "/", // 将请求地址中的/api替换为空，也就是请求地址中不会包含/api/
        },
      }
    }
  }
}
