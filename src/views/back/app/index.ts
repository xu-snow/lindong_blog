/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 21:08:17 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-22 15:20:11
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './app.vue'
import myNav from '@/components/back/nav'
import '@/assets/uikit.ts'

@Component({
  mixins: [template],
  components: {
    myNav
  }
})
export default class App extends Vue {
}
