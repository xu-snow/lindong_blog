/*
 * @Author: zhengxu 
 * @Date: 2017-09-22 10:09:16 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-10-19 16:04:16
 */
import Vue from '@/Base'
import { Component, Watch } from 'vue-property-decorator'
import template from './list.vue'
import articleList from '@/components/back/table'
import { resource } from '@/req'
import { handleRes, fetchItem, parseJson } from '@/handle'

@Component({
  mixins: [template],
  components: {
    articleList
  }
})
export default class List extends Vue {
  classes: any[] = []
  trigger = null
  open: boolean = false
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
  get filter(): string {
    return this.$route.query.filter || '全部'
  }

  // methods
  change(item) {
    this.$router.push({ path: '/admin/articles/' + item.id })
  }
  remove(item) {
    let params = { id: item.id },
      data = { data: JSON.stringify({ classes: item.classes.id }) }
    fetchItem(resource.articles.delete, { params: params, data: data }, (res) => {
      handleRes(res)
    })
  }
  toggle() {
    this.open = !this.open
  }
  handleClose() {
    this.open = false
  }

  mounted() {
    this.trigger = this.$refs.button['$el']
  }

  beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    let temp
    Promise.all([resource.classes.get({}).then(parseJson), resource.articles.get({ data: to.query }).then(parseJson)])
      .then(res => {
        next((vm: List) => {
          vm.classes = res[0].classes
          vm.articles.data = res[1].articles
        })
      })
      .catch(e => console.log(e))
  }

  beforeRouteUpdate(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    fetchItem(resource.articles.get, { data: to.query }, (res) => {
      next()
      this.articles.data = res.articles
    })
  }

  //  用beforeRouteUpdate 看行不行
  // @Watch('$route')
  // onRouteChange() {
  //   fetchItem(resource.articles.get, { params: this.$route.query }, (res) => {
  //     this.articles.data = res.articles
  //   })
  // }

}