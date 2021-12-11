module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  extends: 'eslint-config-umi',
  globals: {
    document: true,
    localStorage: true,
    window: true,
    Globals: true,
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  env: {
    browser: true, // 预定义的全局变量，这里是浏览器环境
  },
};
