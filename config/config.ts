import {defineConfig} from 'umi'
import routes from './routes'
import proxy from './proxy'
import defaultSettings from './defaultSettings'

const {REACT_APP_ENV}=process.env;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  proxy:proxy[REACT_APP_ENV||'dev'],
  fastRefresh: {},
  // manifest:{
  //   publicPath:'build',
  //   basePath:'http://baidu.com'
  // }
  //设置打包输出文件储存的目录
  outputPath:'build',
  //设置静态文件路径前面添加 publicPath 的值，当你需要修改静态文件地址时，比如使用 CDN 部署
  publicPath:'/',
  //打包文件后文件名会加hash值
  hash:true,
  dva:{
    hmr:true,
  },
  history:{
    type:'browser'
  },
  //国际化配置
  locale:{
    default:'zh-CN',
    antd:true,
    baseNavigator:true,
  },
  //需要兼容浏览器最低版本
  targets:{
    ie:11,
  },
  theme:{
    'primary-color':defaultSettings.primaryColor,
  },
  title:false,
  ignoreMomentLocale:true,
  manifest:{
    basePath:'/'
  }


})