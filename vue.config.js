const registerRouter = require('./backend/router')
// const app = require('express')();

module.exports = {
  css: {
    loaderOptions:{
      sass: {
        additionalData:`
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  lintOnSave:false,
  devServer: {
    onBeforeSetupMiddleware(devserver) {
      registerRouter(devserver.app)
    }
  }
}
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false
// })
