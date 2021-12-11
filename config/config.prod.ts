import { defineConfig } from 'umi';
import proxy from './proxy';

const NODE_ENV = process.env.react_env;

export default defineConfig({
  define: {
    'process.env.react_env': 'prod',
    'process.env.base_url': 'http://localhost:7000',
  },

  proxy: proxy[NODE_ENV || 'prod'],
});
