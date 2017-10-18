/*
 * @Author: zhengxu 
 * @Date: 2017-09-22 14:36:05 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-10-18 22:08:08
 */
import Vue from '@/Base'
import { Component, Prop } from 'vue-property-decorator'
import template from './table.vue'
import get from 'lodash/get'


@Component({
  mixins: [template]
})
export default class Table extends Vue {
  count: number = 0

  // Prop
  @Prop()
  data: any[]
  @Prop()
  names: any[]
  @Prop()
  attrs: any[]

  // method
  change(event, item) {
    this.$emit('change', item)
  }
  remove(event, item) {
    let vm = this
    UIkit.modal.confirm('确定删除该条数据?', () => {
      $(event.target).parents('tr').remove()
      vm.$emit('remove', item)
    })
  }
  renderHtml($data, attr) {
    return '<a href="' + attr.express + $data.id + '" target="_blank">' + $data.title + '</a>'
  }
  untie(data, attr) {
    return get(data, attr)
  } 
}
