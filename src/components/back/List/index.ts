/*
 * @Author: zhengxu 
 * @Date: 2017-09-22 14:21:26 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-22 14:24:01
 */
import Vue from '@/Base'
import { Component, Prop } from 'vue-property-decorator'
import template from './list.vue'


@Component({
  mixins: [template]
})
export default class Login extends Vue {
  @Prop()
  articles: Object
}
