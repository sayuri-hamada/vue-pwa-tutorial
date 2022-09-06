const { defineConfig } = require('@vue/cli-service')

const { GenerateSW } = require('workbox-webpack-plugin')

const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'vue-pwa-tutorial',
    themeColor: '#333',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

  }
})
