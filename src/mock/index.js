//通过mork请求文件
const Mock=require("mockjs");

Mock.mock("/link/data",'get',require("./json/data"));