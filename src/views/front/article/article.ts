/*
 * @Author: zhengxu 
 * @Date: 2017-09-21 15:44:53 
 * @Last Modified by:   zhengxu 
 * @Last Modified time: 2017-09-21 15:44:53 
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './article.vue'
import myHead from '@/components/front/head'
import myFoot from '@/components/front/foot'
import sideClass from '@/components/front/class'
import sideAbout from '@/components/front/about'
import listItem from '@/components/front/item'
import { resource } from '@/req'

@Component({
		mixins: [template],
		components: {
				myHead,
				myFoot,
				sideClass,
				sideAbout,
				listItem
		}
})
export default class Article extends Vue {
		article: any = { classes: {}, bg: {} }
		beforeRouteEnter(to: any, from: any, next: any) {
				resource.articles.getOne(to.params).then((res: any) => {
						next((vm: any) => {
								vm.article = res.article
						})
				})
		}
}
