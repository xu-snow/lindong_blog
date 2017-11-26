/*
 * @Author: zhengxu 
 * @Date: 2017-09-20 14:18:12 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-27 01:43:17
 */
import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './classes.vue'
import classList from '@/components/back/Table'
import { resource } from '@/req'
import { handleRes, fetchItem } from '@/handle'


@Component({
  mixins: [template],
  components: {
    classList
  }
})
export default class Classes extends Vue {
  classes: { [key: string]: string[] } = {
    names: ['ID', '名称', '文章数'],
    attrs: ['id', 'name', 'articles.length'],
    data: []
  }
  create() {
    this.$prompt({
      title: '请输入分类名称',
      callback: (value: string) => {
        if (!value) {
          this.$toast.info('分类名称不能为空')
          return
        }
        fetchItem(resource.classes.post, { data: { name: value } }, res => {
          let r = handleRes(res)
          if (r) {
            this.classes.data.push(res.result)
          }
        })
      }
    })
  }
  change(item) {
    let oldName = item.name,
      index = item._index  // class索引
    this.$prompt({
      defaultValue: oldName,
      title: '请输入新分类名称',
      callback: (value) => {
        if (oldName !== value) {
          fetchItem(resource.classes.update, { params: { id: item.id }, data: { name: value } }, res => {
            let r = handleRes(res, { successMsg: '修改成功' })
            if (r) {
              item.name = value
            }
          })
        }
      }
    })
  }

  remove(item) {
    this.$toast.info('删除未生效, 暂未提供删除分类')
  }

  beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
    fetchItem(resource.classes.get, undefined, res => {
      next((vm: Classes) => {
        vm.classes.data = res.classes
      })
    })
  }
}
