/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:48:57 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-25 19:55:37
 */
import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './class.vue'
import { resource } from '@/req'
import { fetchItem } from '@/handle'

@Component({
  mixins: [template]
})
export default class Class extends Vue {
  classes: any[] = []
  blue100: string = 'blue100'
  grey200: string = 'grey200'
  created() {
    fetchItem(resource.classes.get, undefined, (res) => {
      this.classes = res.classes
    })
  }
  routerPush(value) {
    if (value)
      this.$router.push({ path: '/articles', query: { filter: value } })
    else
      this.$router.push('/articles')
  }
  get total() {
    let total = 0
    this.classes.forEach((element, index) => {
      total += element.articles.length
    })
    return total
  }

}