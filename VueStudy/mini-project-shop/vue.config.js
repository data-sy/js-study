const { defineConfig } = require('@vue/cli-service')

const target = 'http://127.0.0.1:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  // 멀티워드 아니어도 되게
  lintOnSave: false,
  devServer: {
    // 이걸로 포트 번호를 3000으로 수정하는 순간 에러 빵빵 ㅠ
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      }
    }
  }
})
