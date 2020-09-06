import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Routes from './routes'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueImageChooser from 'vue-image-chooser'

Vue.use(VueImageChooser)
    
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.prototype.$axios = axios
window.axios = require('axios')

Vue.config.productionTip = false
const router = new VueRouter({
   routes: Routes,
   mode: "history"
});
new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
