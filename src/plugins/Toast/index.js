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
    // fun = function(msg,color){
    //   debugger
    //   $vm.toast = true
    //   $vm.msg = msg
    //   $vm.color = color
    // }

    const action = {
      success(msg) {
        // $vm.showToast(msg, success)
        // fun(msg, success)
      },
      error(mas) {
        $vm.toast = true
        // console.log($vm.showToast)
        // $vm.showToast(msg, error)
        // fun(msg, error)
        // debugger
        // fun(msg,error)
      },
      info(mas) {
        // $vm.showToast(msg, info)
        // fun(msg, info)
      }
    }

    

    Vue.prototype.$toast = action

    Vue.$toast = action
  }

};

export default Plugin;