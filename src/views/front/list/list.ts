/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:44:41 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-22 14:00:01
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './list.vue'
import myHead from '@/components/front/head'
import myFoot from '@/components/front/foot'
import sideClass from '@/components/front/class'
import sideAbout from '@/components/front/about'
import listItem from '@/components/front/item'
import { resource } from '@/req'
@Component({
  mixins: [template],
  components: {
    myHead,
    myFoot,
    sideClass,
    sideAbout,
    listItem
  }
})
export default class List extends Vue {
  articles: any = []
  beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    resource.articles.get(to.query).then(res => {
      next((vm: List) => {
        vm.articles = res.articles
      })
    })
  }
  @Watch('$route')
  onRouteChanged() {
    let _self = this
    resource.articles.get(_self.$route.query).then(res => {
      _self.articles = res.articles
    })
  }
} 
