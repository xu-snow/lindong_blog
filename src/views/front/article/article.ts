/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:44:53 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-26 22:28:50
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './article.vue'
import myHead from '@/components/front/head'
import myFoot from '@/components/front/foot'
import sideClass from '@/components/front/class'
import sideAbout from '@/components/front/about'
import listItem from '@/components/front/item'
import { resource } from '@/req'
import { fetchItem } from '@/handle'
import { markdownIt } from 'mavon-editor'
import get from 'lodash/get'

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
export default class Article extends Vue {
  article: any = {  }
  beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    fetchItem(resource.articles.getOne, { params: to.params }, (res) => {
      next((vm: Article) => {
        vm.article = res.article
      })
    })
  }

  get _html() {
    return markdownIt.render(this.article.markdown || '')
  }

  getProperty(path) {
    return get(this.article, path)
  }
}
