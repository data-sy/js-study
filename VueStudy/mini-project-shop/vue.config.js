const { defineConfig } = require('@vue/cli-service')

const target = 'http://15.164.232.32:8080';

module.exports = defineConfig({
  transpileDependencies: true,
  // 멀티워드 아니어도 되게
  lintOnSave: false,
  devServer: {
    port: 3000,
    proxy: {
      '/': {
        target,
        changeOrigin: true,
        // 경로 없이 요청을 보내기 위해 '/'를 제거
        pathRewrite: { '^/': '' }
      },
      // '/api': {
      //   target,
      //   changeOrigin: true
      // },
      // '/upload': {
      //   target,
      //   changeOrigin: true,
      // },
      // '/download': {
      //   target,
      //   changeOrigin: true,
      // }
    }
  }
})
