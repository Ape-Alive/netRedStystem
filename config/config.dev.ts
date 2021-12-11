import { defineConfig } from 'umi';
import proxy from './proxy';

const NODE_ENV = process.env.react_env;

export default defineConfig({
  define: {
    'process.env.react_env': 'dev',
  },

  proxy: proxy['dev'],
});
