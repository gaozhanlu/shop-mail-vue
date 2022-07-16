//引入相应的路由组件
import home from '@/pages/home';
import login from '@/pages/login';

//个人中心的二级路由组件

export default [
    {
        path: '/home',
        name: 'home',
        component: home,
        //路由元信息,新学习的一个配置项!!!!给当前路由添加一些额外数据
        //它的右侧是一个对象[可以有多个键值对]
        //路由配置项：书写的时候不要胡写、乱写、瞎写【在VC组件身上获取不到,没有任何意义】
        meta: { show: true },
    },
    {
        path: '/login',
        component: login,
        meta: { show: false },
    },
    //重定向到首页
    {
        path: '/',
        redirect: '/home'
    }
]