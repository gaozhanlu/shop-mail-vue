//对于axios进行二次封装
import axios from "axios";

//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";

//start:进度条开始，done: 进度条结束

//1：利用axios对象的方法create 去创建一个axios实例
//2:request就是axios,只不过稍微配置一下
let requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
});
//请求拦截器 再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情

requests.interceptors.request.use((config)=>{
    //config 配置对象 对象里面有一个属性很重要，headers请求头
    //进度条开始动

    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
     nprogress.done();
    return res.data;
},(error =>{
    return Promise.reject(new Error('faile'));
}));


//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;