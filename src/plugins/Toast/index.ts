import Vue from 'vue'
import ToastComponent from './Toast.vue'
import { PluginObject } from 'vue'
import {
  success,
  error,
  info
} from '@/constant/color'


interface ToastAction {
  success: Function
  error: Function
  info: Function
}

declare module 'vue/types/vue' {
  // add instance property and method
  interface Vue {
    $toast: ToastAction
  }
  // add static property and method
  interface VueConstructor {
    $toast: ToastAction
  }
}
interface Component extends Vue {
  showToast: Function
}

let $vm: Component

const Plugin: PluginObject<undefined> = {
  install(Vue) {
    if (!$vm) {
      const Toast = Vue.extend(ToastComponent)
      $vm = new Toast({
        el: document.createElement('div'),
      })
      document.body.appendChild($vm.$el)
    }
    const action: ToastAction = {
      success(msg) {
        $vm.showToast(msg, success)
      },
      error(msg) {
        $vm.showToast(msg, error)
      },
      info(msg) {
        $vm.showToast(msg, info)
      }
    }
    Vue.prototype.$toast = action
    Vue.$toast = action
  }
}


export default Plugin