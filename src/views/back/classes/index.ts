/*
 * @Author: zhengxu 
 * @Date: 2017-09-20 14:18:12 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-21 21:39:32
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './classes.vue'
import classList from '@/components/back/table.vue'
import { resource } from '@/req'
import { handleRes } from '@/handle'

@Component({
	mixins: [template],
	components: {
		classList
	}
})
export default class App extends Vue {
	classes: { [key: string]: string[] } = {
		names: ['ID', '名称', '文章数'],
		attrs: ['id', 'name', 'articles.length'],
		data: []
	}
	create() {
		let _self = this
		UIkit.modal.prompt('请输入分类名称', '', value => {
			if (!value) {
				UIkit.notify({
					message: '分类名称不能为空',
					status: 'warning',
					timeout: 1000
				})
				return
			}
			resource.classes.put({ name: value }).then(res => {
				let r = handleRes(res)
				if (r) {
					_self.classes.data.push(res.result)
				}
			})
		})
	}
	change(item) {
		let oldName = item.name,
			index = item._index  // class索引
		UIkit.modal.prompt('请输入新分类名称', oldName, value => {
			if (oldName !== value) {
				resource.classes.update({ id: item.id }, { name: value }).then(res => {
					let r = handleRes(res, { successMsg: '修改成功' })
					if (r) {
						item.name = value
					}
				})
			}
		})
	}
	remove(item) {
		UIkit.notify({
			message: '删除未生效, 暂未提供删除分类',
			status: 'message',
			timeout: 1000
		})
	}
	beforeRouteEnter (to, from, next) {
		resource.classes.get().then(res => {
			next(vm => {
				vm.classes.data = res.classes
			})
		})
	}
}
