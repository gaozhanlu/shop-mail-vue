import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

//注册两个全局组件:Header、Footer,全局组件写法【定义一次,可以直接在任意地方使用】
//Vue.component(组件的名字,组件)
//组件:实质是VueComponent构造函数,为什么下面Header组件打印并非是VueComponent构造函数,因为Header组件暴露的
//配置项(JS),并非暴露Vue.extend()[返回VueComponent构造函数],用的是简写方式
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// Vue.component(Header.name, Header);
// Vue.component(Footer.name, Footer);

import router from "@/router";
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
