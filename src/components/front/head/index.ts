/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:49:35 
 * @Last Modified by:   zhengxu 
 * @Last Modified time: 2017-09-21 15:49:35 
 */
import Vue from '@/Base'
import { Component, Prop } from 'vue-property-decorator'
import template from './head.vue'
import { isProduction } from '@/req'

@Component({
  name: 'my-head',
  mixins: [template]
})
export default class Head extends Vue {
  classesName: any = ''
  @Prop() article: any
  get style() {
    let pre = isProduction ? '' : 'http://localhost:3000',
      bg = this.article && this.article.bg.ctn
    if (bg) {
      return {
        backgroundImage: 'url(' + pre + bg + ')'
      }
    }
  }
}