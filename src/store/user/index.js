//登录、注册模块的小仓库
import {reqPostCode,reqUserLogin,checkPostCode} from '@/api';

let state = {
    //验证码
    code: '',
    //身份标识符很重要【存储在vuex】
    token: localStorage.getItem("TOKEN"),
    //用户名
    nickName: ''
};

let mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    SET_TOKEN(state, token) {
        state.token = token;
    }
};
let actions = {
    //获取验证码
    async getCode({ commit, state, dispatch }, data) {
        let result = await reqPostCode(data);

    },
    //用户登录的地方:非常非常重要
    async userLogin({ commit, state, dispatch }, data) {
        //接口说明:后台老师目前登录接口返回数据不正确的，以后工作的时候登录接口成功，返回格式100%和相面例子一样的!!!
        let result = await reqUserLogin(data);
        //登录成功

    },
    //校验验证码
    async checkPostCode({commit,state,dispatch},data){
        let result = await  checkPostCode(data);
    }

};
let getters = {};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}