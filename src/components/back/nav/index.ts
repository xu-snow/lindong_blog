/*
 * @Author: zhengxu 
 * @Date: 2017-09-22 14:34:21 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-27 01:41:43
 */
import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './nav.vue'


@Component({
  mixins: [template]
})
export default class Nav extends Vue {
  open: boolean = true
  docked: boolean = true
  lists: Array<{ title: string, href: string, icon: string }> = [
    { title: '文章列表', href: '/admin/articles', icon: 'star' },
    { title: '分类管理', href: '/admin/classes', icon: 'class' }
  ]
}
