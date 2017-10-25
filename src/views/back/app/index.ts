/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 21:08:17 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-10-25 17:30:21
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './app.vue'
import myNav from '@/components/back/nav'

@Component({
  mixins: [template],
  components: {
    myNav
  }
})
export default class App extends Vue {
}
