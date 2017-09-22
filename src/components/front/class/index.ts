/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:48:57 
 * @Last Modified by:   zhengxu 
 * @Last Modified time: 2017-09-21 15:48:57 
 */
import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './class.vue'
import { resource } from '@/req'

@Component({
  mixins: [template]
})
export default class Class extends Vue {
  classes: any[] = []
  created() {
    resource.classes.get().then(res => {
      this.classes = res.classes
    })
  }
  get total() {
    let total = 0
    this.classes.forEach((element, index) => {
      total += element.articles.length
    })
    return total
  }

}