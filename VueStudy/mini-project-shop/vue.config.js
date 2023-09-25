const { defineConfig } = require('@vue/cli-service')

const target = 'http://127.0.0.1:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  // 멀티워드 아니어도 되게
  lintOnSave: false,
  devServer: {
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
