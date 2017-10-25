/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 21:43:43 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-10-24 21:06:25
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './create.vue'
import { resource, isProduction } from '@/req'
import { handleRes, fetchItem } from '@/handle'

const reload = (vm, data?) => {
  vm.status = 1
  vm.disabled = true
  vm.oldBg = data ? data.bg.name : vm.article.bg.name
  vm.oldClasses = data ? data.classes : vm.article.classes
}

@Component({
  mixins: [template]
})
export default class Create extends Vue {
  article: { [key: string]: any } = {
    title: '',
    digest: '',
    markdown: '',
    classes: '',
    bg: {
      name: '',
      ctn: ''
    }
  }
  classes: any = []
  // control variable
  status: number = 0 // create or change, change is 1, create is 0, default create
  disabled: boolean = false
  oldBg: any = ''
  oldClasses: any = ''

  // method
  submit() {
    this.status ? this.change() : this.create()
  }

  create() {
    let data
    if (!this.article.bg.name) {
      this.$toast.error('请添加背景图')
      return false
    }
    if (!this.article.classes) {
      this.$toast.error('请选择分类')
      return false
    }
    // process data
    data = Object.assign({}, this.article, { timestamp: Date.now() })
    data = { data: JSON.stringify(data) }

    fetchItem(resource.articles.put, { data: data }, (res) => {
      let r = handleRes(res, { successMsg: '添加成功' })
      if (r) {
        this.$router.push(String(res.result.id))
        reload(this)
      }
    })
  }

  change() {
    let data
    // process data
    data = Object.assign({}, { article: this.article }, { changeBg: this.changeBg, changeClasses: this.changeClasses, oldClasses: this.oldClasses })
    data = { data: JSON.stringify(data) }
    fetchItem(resource.articles.update, { params: this.$route.params, data: data }, res => {
      handleRes(res, { successMsg: '修改成功' })
      reload(this)
    })
  }

  toggle() {
    this.disabled = !this.disabled
  }

  uploadImg(e) {
    let _self = this,
      _file = e.target.files[0],
      render = new FileReader()
    render.onload = function (e) {
      _self.article.bg.name = _file.name
      _self.article.bg.ctn = e.target['result']

    }
    render.readAsDataURL(_file)
  }

  // computed
  get changeBg() {
    return !(this.article.bg.name === this.oldBg)
  }
  get changeClasses() {
    return !(this.article.classes === this.oldClasses)
  }

  beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    // if from 'create' page, do nothing
    if (from.path === '/admin/articles/create') {
      next()
      return
    }
    let params = to.params, // id:xxx
      task: any[] = []
    task.push(fetchItem(resource.classes.get))
    params.id && task.push(fetchItem(resource.articles.getOne, { params }))

    Promise.all(task)
      .then(res => {
        let classes = res[0].classes, article
        if (res[1]) {
          article = res[1].article
          article.classes = article.classes.id
          article.bg.ctn = (isProduction ? '' : 'http://localhost:3000') + article.bg.ctn
        }
        next((vm: Create) => {
          vm.classes = classes
          if (article) {
            vm.article = article
            reload(vm, article)
          }
        })
      })
      .catch(e => console.log(e))
  }
}

