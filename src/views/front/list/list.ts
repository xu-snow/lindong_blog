/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:44:41 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-29 21:01:04
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
import { fetchItem } from '@/handle'
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
    fetchItem(resource.articles.get, { params: to.query }, (res) => {
      next((vm: List) => {
        vm.articles = res.articles
      })
    })
  }


  // watch
  // @Watch('$route')
  // onRouteChanged() {
  //   let _self = this
    
  //   fetchItem(resource.articles.get, { data: _self.$route.query }, (res) => {
  //     _self.articles = res.articles
  //   })
  // }

  beforeRouteUpdate(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    fetchItem(resource.articles.get, { data: to.query }, (res) => {
      next()
      this.articles = res.articles
    })
  }
} 
