import './class-component-hooks'
import Vue from 'vue'
import { router } from './router'
import app from './app.vue'
import MuseUI from 'muse-ui'
import Toast from './plugins/Toast'
import Prompt from './plugins/Prompt'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'

Vue.use(Toast)
Vue.use(Prompt)
Vue.use(MuseUI)

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')

