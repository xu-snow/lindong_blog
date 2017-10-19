/**
 * 使用方法：
 * 直接import导入，然后调用Vue.use使用即可。
 * 在实例中调用
 *    this.$prompt.show()
 *    this.$prompt.hide()
 *
 */
import Vue, { PluginObject, ComponentOptions } from 'vue'
import PromptComponent from './Prompt.vue'


interface PromptAction {
  show: Function
  hide: Function
}

declare module 'vue/types/vue' {
  interface Vue {
    $prompt: PromptAction
  }
  interface VueConstructor {
    $prompt: PromptAction
  }
}

interface Component extends Vue {
  isOpened: boolean
  content: any
}

let $vm: Component

const Plugin: PluginObject<undefined> = {
  install(Vue) {
    if (!$vm) {
      const Prompt = Vue.extend(PromptComponent)
      $vm = new Prompt({
        el: document.createElement('div'),
      })
      document.body.appendChild($vm.$el)
    }
    const action: PromptAction = {
      /**
       * 
       * @param {*} option 选项
       *    包含
       *    {String}        title         - 弹框标题
       *    {String}        content       - 弹框内容
       *    {function}      callback      - 确认回调
       *    {Boolean}       isShowCancel  - 是否显示取消按钮
       */
      show(option = {}) {
        if (typeof option === 'object') {
          Object.assign($vm, option)
        } else if (typeof option === 'string') {
          $vm.content = option
        }
        $vm.isOpened = true
      },
      hide() {
        $vm.isOpened = false
      },
    }
    // if (!Vue.$prompt) {
    //   Vue.$prompt = action
    // }
    Vue.$prompt = action
    Vue.prototype.$prompt = action
    // Vue.mixin({
    //   created() {
    //     this.$prompt = action
    //   },
    // })
  },
}

export default Plugin