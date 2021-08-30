// 1、引入express
const { request, response } = require('express');
const express = require('express');

// 2、创建应用对象
const app = express();

// 3、创建路由规则
// request 是对请求报文的封装
// response 是对相应报文的封装
app.all('/server',(request,response)=>{
    // 设置相应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应体
    response.send('HELLO AJAX - 2');
});

app.all('/json-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应一个数据
    const data = {
        name: 'lep101'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// 4、监听端口启动服务
app.listen(8000,()=>{
    console.log("服务以及启动,8000 端口监听中....");
})