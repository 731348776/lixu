<template>
  <div id="app">
    <my-header v-show="this.$route.meta.showHeader"></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/header'
import MyFooter from './components/footer'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
*{
	margin: 0px;
	padding: 0px;
}
ul,li{
   list-style: none;
}
a{
	text-decoration: none;
}
</style>
