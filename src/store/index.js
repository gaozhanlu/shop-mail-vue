//仓库
import Vuex from 'vuex';
import Vue from 'vue';
//安装插件
Vue.use(Vuex);

//引入小仓库
import home from './home';
import user from './user';

//state：仓库存储数据的地方
const state={

};

//mutations 修改state的唯一手段
const mutations={

};


//action:处理action可以书写自己的业务路径，也可以处理异步
const actions={
  //可以书写业务逻辑，但是不能修改state
};

//getters 理解为计算书写，用于简化仓库数据，让组件获取仓库的数据更加方便

const getters={

}


//对外暴露仓库
//第一个注意:需要关键字new，你没有new会报错的
//第二个注意:Store构造函数,书写的时候别小写
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    //大仓库需要注册全部小仓库
    //vuex新增的一个配置项:模块式开发.右侧V也是对象
    modules: {
        home,
        user,

    }
})