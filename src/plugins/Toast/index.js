import ToastComponent from './Toast.vue';
import {
  success,
  error,
  info
} from '@/constant/color'

let $vm;
const Plugin = {
  install(Vue) {
    if (!$vm) {
      const Toast = Vue.extend(ToastComponent);
      $vm = new Toast({
        el: document.createElement('div'),
      });
      document.body.appendChild($vm.$el);
    }
    const action = {
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
};


export default Plugin;