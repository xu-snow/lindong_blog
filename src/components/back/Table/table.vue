<template lang="jade">
	div.admin-table
		mu-table(:showCheckbox="false",v-show="data.length")
			mu-thead
				mu-tr
					mu-th(v-for="name in names" key="name") {{name}}
					mu-th 操作
			mu-tbody
				mu-tr(v-for="item in data", :key="data.id")
					mu-td(v-for="attr,index in attrs",:key="index")
						p(v-if="typeof attr == 'object'" v-html="renderHtml(item, attr)")
						p(v-else, v-bind:class="attr") {{untie(item, attr) || 0}}
					mu-td 
						mu-icon-button(icon="create",tooltip="修改",iconClass="change-icon", @click="change($event, item)")
						mu-icon-button(icon="delete",tooltip="删除",iconClass="delete-icon", @click="remove($event, item)")
		p.none(v-show="!data.length") 暂无内容
</template>
<style lang="stylus">

	.admin-table
		.none 
			font-size 1.6em
			text-align center
			padding 2em 0
		.change-icon
			color #2196f3
		.delete-icon 
			color #f44336
</style>