//登录、注册模块的小仓库
import { reqPostCode, reqUserLogin,checkPostCode} from '@/api';

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
    },

    CLEAR(state) {
        //清除仓库相关用户信息
        state.token = '';
        state.nickName = '';
        //本地存储令牌清空
        localStorage.removeItem('TOKEN');
    }
};
let actions = {
    //获取验证码
    async getCode({ commit, state, dispatch }, phone) {
        let result = await  reqPostCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return 'ok';
        } else {
            return Promise.reject();
        }
    },
    //用户登录的地方:非常非常重要
    async userLogin({ commit, state, dispatch }, data) {
        //接口说明:后台老师目前登录接口返回数据不正确的，以后工作的时候登录接口成功，返回格式100%和相面例子一样的!!!
        /*
          举例子
           {
                 code:200,
                 data:{
                      token:'1e4vdadhajkhdakj6sahdajk'
                 },
                 message:'登录成功'
           }
        */
        let result = await reqUserLogin(data);
        //登录成功
        if (result.code == 200) {
            commit('SET_TOKEN', result.data.token);
            //以后开发的时候:经常的登录的成功获取token【持久化存储】
            localStorage.setItem('TOKEN', result.data.token);
            return 'ok';
        } else {
            //登录失败
            return Promise.reject(new Error(result.message));
        }

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