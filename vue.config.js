module.exports = {
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // `primary` is global variables fields name
        globalVars: {
          '@primary': '#0089dc',
          '@padding': '2vw',
        },
      },
    },
  },
  productionSourceMap: false,
};
