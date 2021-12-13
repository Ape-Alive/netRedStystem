export default {
  dev: {
    '/api': {
      target: 'http://localhost:7000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  test: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  prod: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
