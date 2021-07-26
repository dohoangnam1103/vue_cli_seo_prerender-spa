import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueMeta from 'vue-meta'
import router from './router'
import store from './store'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => {
    setTimeout(() => {
      document.dispatchEvent(new Event("x-app-rendered"))
      //force build after 10s
    }, 10000)
  },
}).$mount('#app')
