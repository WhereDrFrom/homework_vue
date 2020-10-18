const path = require('path')

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  //部署应用包时的基本 URL
  // publicPath: "./",
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  // outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir: 'assets',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'utils': resolve('src/utils'),
        'components': resolve('src/components'),
        'views': resolve('src[表情]iews'),
        'ajax': resolve('src/ajax'),
        'plugin': resolve('src/plugin')
      }
    }
    // externals: {
    //   'element-ui': 'ElEMENT',
    //   // 'element-ui': 'ElementUI',
    // }
  },
  devServer: {
    port: 8040
  },

}