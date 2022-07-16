//统一管理项目前部的接口
import requests from "./requests";


//登录的接口:请求体携带参数 phone&&password
export const reqUserLogin = (data)=>requests({url:`user/login`,method:'post',data});



//获取验证码接口
export const reqPostCode = (data)=>requests({url:`/user/happyCaptcha`,method:'post'});

//校验验证码
export const checkPostCode=(data)=>requests({url:`/user/verify`,method:'post',data});