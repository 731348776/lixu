// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入element-ui插件
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
// 导入vuex容器
import store from './store'
// 导入本地缓存工具包
import Utils from './lib/utils'
Vue.use(Utils)

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
