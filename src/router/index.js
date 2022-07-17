import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//引入路由组件
import Home from '@/pages/home';
import Search from '@/pages/search';
import Login from '@/pages/login';
import Register from '@/pages/register'
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component: Home,
            meta:{show:false}
        },
        {
            path:"/search/:keyword",
            component: Search,
            meta:{show:false}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:true}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        //重定向到首页
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

