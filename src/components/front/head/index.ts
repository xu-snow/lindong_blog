/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:49:35 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-11 18:13:03
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
  @Prop() article: any

  @Prop() title: string

  @Prop() digest: string

  @Prop() date: string

  @Prop() classesName: string

  @Prop() bg: string

  @Prop() lastTime: string

  get style() {
    let pre = isProduction ? '' : 'http://localhost:3000',
      bg = this.article && this.bg

    if (bg) {
      return {
        backgroundImage: `url("${pre}${bg}")`
      }
    }
  }
}