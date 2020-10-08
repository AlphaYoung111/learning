
var express = require('express')
var app = express()

// 中间件
app.use(express.json())
app.use(require('cors')())

// 路由区域
require('./routes/admin/index')(app)

//  创建数据库
require('./plugins/db')(app)
app.listen(11111, function () {
  console.log('runing in http://localhost:11111')
})
