module.exports = {
  // antd 按需引入样式
  babel: {
    plugins: [
      [
        "import", // 要做按需引入，所以是import
        {
          "libraryName": "antd", // 表示要做antd的按需引入
          "libraryDirectory": "es",// antd用es的模块化规范
          "style": true //设置为true即是less
        }
      ]
    ]
  },
};