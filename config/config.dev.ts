import { defineConfig } from 'umi';
import proxy from './proxy';

const NODE_ENV = process.env.react_env;

export default defineConfig({
  define: {
    'process.env.react_env': 'dev',
  },
  // proxy: {
  //   '/api': {
  //     'target': 'http://localhost:7000/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
  // proxy: proxy['dev'],
});
