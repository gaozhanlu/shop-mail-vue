<template>
  <div>

    <Header></Header>

    <!-- 路由组件出口的位置:不设置路由组件不知道在哪里显示 -->
    <router-view></router-view>
    <!-- 发现底部的Footer会随着路由的变化进行显示与隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>


import Header from './components/header';
import Footer from './components/footer';



export default {
  name: '',
  components: {
    Header,

    Footer,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
