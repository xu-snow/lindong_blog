import './class-component-hooks'

import Vue from 'vue'
import { router } from './router'
import app from './app.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
