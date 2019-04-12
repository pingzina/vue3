import Vue from 'vue'
import App from './App.vue'
//引入路由js
import router from './router'
//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入echats插件
import Echarts from 'echarts'

Vue.use(ElementUI);

//配置原型，全局使用
Vue.prototype.$echarts=Echarts;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
