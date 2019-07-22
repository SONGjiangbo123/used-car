
const Mock = require("mockjs")

Mock.mock("/shou/sou",'get',require("./json/data"));
Mock.mock("/ding/wei",'get',require("./json/datatwo"));
//通过mork请求文件
Mock.mock('/link/data','get',require('./json/data.json'))
