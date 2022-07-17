//引入相应的路由组件
import login from '@/pages/login';

//个人中心的二级路由组件
export default [

    {
        path: '/login',
        component: login,
        meta: { show: true },
    },

    //重定向到首页
    {
        path: '/',
        redirect: '/login'
    }
]