import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入rem布局的插件
import "../node_modules/amfe-flexible/index"


// 引入mui的样式
import "./assets/mui/css/mui.css"

import "./assets/mui/css/icons-extra.css"

// 引入全部组件
import Mint from 'mint-ui';
import "mint-ui/lib/style.css";
Vue.use(Mint);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
