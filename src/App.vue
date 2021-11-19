<template>
  <div id="app">
<!--    // http://localhost:8080 或者 http://localhost:8080/home就会在 <router-view> 中渲染 home.vue 组件-->
<!--    <router-view></router-view>-->

<!--    home.vue 是真正的父组件，first.vue、login.vue 等子组件都会渲染到 home.vue 中的-->
    <!--    <ProductDetail msg = "hello"/>-->
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
