/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:47:14 
 * @Last Modified by:   zhengxu 
 * @Last Modified time: 2017-09-21 15:47:14 
 */
import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './about.vue'

@Component({
	mixins: [template]
})
export default class About extends Vue {

}