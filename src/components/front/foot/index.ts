/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:49:15 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-29 17:30:24
 */
import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './foot.vue'

@Component({
  mixins: [template]
})
export default class Foot extends Vue {
  get time(): string {
    const currentY: string = new Date().getFullYear().toString()
    if (currentY === '2017')
      return currentY
    else
      return `2017-${currentY}`
  }
}