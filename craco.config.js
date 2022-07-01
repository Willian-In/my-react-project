const path = require('path')
module.exports = {
  // ...
  webpack: {
    // 配置别名
    alias: {
      '@': path.resolve('src'),
      '@comp': path.resolve('src/components')
    },
    babel: { // 支持装饰器
      plugins: [
        [   
          "import", 
          {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": 'css' //设置为true即是less 这里用的是css
          }
       ]
    ]}
  }
};