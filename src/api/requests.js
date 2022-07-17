//对于axios进行二次封装
import axios from "axios";

let requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
});

//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;