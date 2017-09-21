/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:50:09 
 * @Last Modified by:   zhengxu 
 * @Last Modified time: 2017-09-21 15:50:09 
 */
import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './nav.vue'

@Component({
	mixins: [template]
})
export default class Nav extends Vue {

}