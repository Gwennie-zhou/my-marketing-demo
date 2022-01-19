import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/base.css'
import router from './router'
import { Toast, Button, Popup, Dialog  } from 'vant';

import 'vant/lib/index.css';
Vue.config.productionTip = false

Vue.use(Toast).use(Button).use(Popup).use(Dialog)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
