var Mock=require("mockjs");

Mock.mock("/shou/sou",'get',require("./json/data"));
Mock.mock("/ding/wei",'get',require("./json/datatwo"));