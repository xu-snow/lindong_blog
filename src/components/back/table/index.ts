/*
 * @Author: zhengxu
 * @Date: 2017-09-22 14:36:05
 * @Last Modified by: zhengxu
 * @Last Modified time: 2018-03-27 00:31:38
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
  datas: any[]
  @Prop()
  names: any[]
  @Prop()
  attrs: any[]

  // method
  change(event, item) {
    this.$emit('change', item)
  }
  remove(event, item, index) {
    this.$confrim({
      title: '提示',
      defaultValue: '确定删除该条数据?',
      callback: () => {
        // $(event.target).parents('tr').remove()
        this.$emit('remove', item, index)
      }
    })
  }
  renderHtml($data, attr) {
    return '<a href="' + attr.express + $data.id + '" target="_blank">' + $data.title + '</a>'
  }
  untie(data, attr) {
    return get(data, attr)
  }
}
