import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';
import defaultSettings from './defaultSettings';
const NODE_ENV = process.env.react_env + '';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: false,
  },

  proxy: proxy[NODE_ENV],
  routes,
  hash: true,
  manifest: {
    publicPath: 'build',
    basePath: 'http://baidu.com',
  },
  //设置打包输出文件储存的目录
  outputPath: 'build',
  //设置静态文件路径前面添加 publicPath 的值，当你需要修改静态文件地址时，比如使用 CDN 部署
  publicPath: '/',
  //打包文件后文件名会加hash值

  history: {
    type: 'browser',
  },
  //国际化配置
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  //需要兼容浏览器最低版本
  targets: {
    ie: 11,
  },
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  // manifest:{
  //   basePath:'/'
  // },
  // mfsu:{}
});
