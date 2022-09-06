const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'vue-pwa-tutorial',
    themeColor: '#333',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
        runtimeCaching: [{
            // キャッシュするファイルのURLを正規表現で指定する
            urlPattern: /.+(\/|.html)$/,
            handler: 'CacheFirst',
        }]
    }
  }
})
