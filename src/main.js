import Vue from 'vue'
import VAnimateCss from 'v-animate-css';
import App from './App.vue'
import VueTour from 'vue-tour'
import router from './router'
import store from './store'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('vue-tour/dist/vue-tour.css')
require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VAnimateCss);

Vue.use(VueTour)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

let app

const initialize = () => {
  if (!app) {
    app = new Vue({
      el: '#app',
      data: {color: 'pink'},
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
  } else {
    store.commit('setCurrentUser', null)
  }
  initialize()
})
