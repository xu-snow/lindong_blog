/*
 * @Author: zhengxu 
 * @Date: 2017-09-20 14:18:12 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-11 11:08:47
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './app.vue'
import myNav from '@/components/front/nav'
import muxBackTop from '@/components/MusexUI/backTop'

@Component({
  mixins: [template],
  components: {
    myNav,
    muxBackTop
  }
})
export default class App extends Vue {

}
