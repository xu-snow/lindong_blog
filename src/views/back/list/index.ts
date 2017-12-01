/*
 * @Author: zhengxu 
 * @Date: 2017-09-22 10:09:16 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-27 01:43:36
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

  names: string[] = ['ID', '标题', '分类', '创建时间']
  attrs: any[] = ['id', {
    type: 'link',
    name: 'title',
    express: '/articles/'
  }, 'classes.name', 'date']

  datas: any[] = []

  // computed
  get filter(): string {
    return this.$route.query.filter || '全部'
  }

  // methods
  change(item) {
    this.$router.push({ path: '/admin/articles/' + item.id })
  }
  remove(item, index) {
    let params = { id: item.id },
      data = { data: JSON.stringify({ classes: item.classes.id }) }
    fetchItem(resource.articles.delete, { params: params, data: data }, (res) => {
      this.datas.splice(index, 1)
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
          vm.datas = res[1].articles
        })
      })
      .catch(e => console.log(e))
  }

  beforeRouteUpdate(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    fetchItem(resource.articles.get, { data: to.query }, (res) => {
      next()
      this.datas = res.articles
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