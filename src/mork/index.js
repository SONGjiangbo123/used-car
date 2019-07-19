//通过mork请求文件
const Mork = require("mockjs")
Mork.mock('/link/data','get',require('./json/data.json'))