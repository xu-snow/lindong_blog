/**
 * 使用方法：
 * 直接import导入，然后调用Vue.use使用即可。
 * 在实例中调用
 *    this.$prompt.show()
 *    this.$prompt.hide()
 *
 */
import Vue, { PluginObject, ComponentOptions } from 'vue'
import DialogComponent from './Dialog.vue'
namespace DialogAction {
  export interface Show {
    /**
     * 
     * @param option 选项
     *    {String}        defaultValue  - 原始值
     *    {String}        title         - 弹框标题
     *    {function}      callback      - 确认回调
     *    {Boolean}       isShowCancel  - 是否显示取消按钮
     */
    (option: { callback?: Function, title?: string, isShowCancel?: boolean, defaultValue?: string }): void
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $prompt: DialogAction.Show
    $confrim: DialogAction.Show
  }
  // interface VueConstructor {
  //   $prompt: DialogAction.Show
  //   $confrim: DialogAction.Show
  // }
}
// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//   }
// }

interface Component extends Vue {
  isOpened: boolean
  content: any
}


let $vm: Component

const Plugin: PluginObject<undefined> = {
  install(Vue) {
    if (!$vm) {
      const Prompt = Vue.extend(DialogComponent)
      $vm = new Prompt({
        el: document.createElement('div'),
      })
      document.body.appendChild($vm.$el)
    }
    const show: DialogAction.Show = function (option = {}) {
      Object.assign($vm, option, { value: option.defaultValue || '' })
      $vm.isOpened = true
    }

    const promptShow: DialogAction.Show = function (option = {}) {
      show(Object.assign(option, {
        isInput: true,
        isShowCancel: typeof option.isShowCancel === 'undefined' && true
      }))
    }

    const confirmShow: DialogAction.Show = function (option = {}) {
      show(Object.assign(option, {
        isInput: false,
        isShowCancel: typeof option.isShowCancel === 'undefined' && true
      }))
    }


    // hide() {
    //   $vm.isOpened = false
    // },

    // if (!Vue.$prompt) {
    //   Vue.$prompt = action
    // }
    Vue.mixin({
      created() {
        this['$prompt'] = promptShow
        this['$confrim'] = confirmShow
      }
    })
  }
}

export default Plugin