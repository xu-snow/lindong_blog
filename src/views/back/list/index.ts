/*
 * @Author: zhengxu 
 * @Date: 2017-09-22 10:09:16 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-23 18:06:27
 */
import Vue from '@/Base'
import { Component, Watch } from 'vue-property-decorator'
import template from './list.vue'
import articleList from '@/components/back/table'
import { resource, api } from '@/req'
import { handleRes, fetchItem } from '@/handle'

@Component({
  mixins: [template],
  components: {
    articleList
  }
})
export default class List extends Vue {
  classes: any[] = []
  articles: { [key: string]: any } = {
    names: ['ID', '标题', '分类', '创建时间'],
    attrs: ['id', {
      type: 'link',
      name: 'title',
      express: '/articles/'
    }, 'classes.name', 'date'],
    data: []
  }
  // computed
  get filter() {
    return this.$route.query.filter || '全部'
  }

  // methods
  change(item) {
    this.$router.push({ path: '/admin/articles/' + item.id })
  }
  remove(item) {
    let params = { id: item.id },
      data = { data: JSON.stringify({ classes: item.classes.id }) }
    fetchItem(resource.articles.delete, { data: data }, (res) => {
      handleRes(res)
    })
    // resource.articles.delete(params, data).then(res => {
    //   handleRes(res)
    // })
  }

  beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    // !
    let temp
    resource.classes.get()
      .then(res => {
        temp = res.classes
        return resource.articles.get(to.query).then(json => json.data)
      })
      .then(res => {
        next((vm: List) => {
          vm.classes = temp
          vm.articles.data = res.articles
        })
      })
  }


  // todo 用beforeRouteUpdate 看行不行
  @Watch('$route')
  onRouteChange() {
    fetchItem(resource.articles.get, { params: this.$route.query }, (res) => {
      this.articles.data = res.articles
    })
    // resource.articles.get(this.$route.query)
    //   .then(res => {
    //     this.articles.data = res.articles
    //   })
  }

}