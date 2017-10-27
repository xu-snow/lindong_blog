import './class-component-hooks'
import Vue from 'vue'
import { router } from './router'
import app from './app.vue'
import MuseUI from 'muse-ui'
import Toast from './plugins/Toast'
import Prompt from './plugins/Dialog'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import './assets/css/markdown.css'

Vue.use(MuseUI)
Vue.use(Toast)
Vue.use(Prompt)


new Vue({
  router,
  render: h => h(app)
}).$mount('#app')

