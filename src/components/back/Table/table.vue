<template lang="jade">
	div.admin-table
		table.uk-table(v-show="data.length")
			tr
				th(v-for="name in names") {{name}}
				th 操作
			tr(v-for="item in data")
				td(v-for="attr in attrs")
					p(v-if="typeof attr == 'object'" v-html="renderHtml(item, attr)", v-bind:class="attr.name")
					p(v-else, v-bind:class="attr") {{untie(item, attr) || 0}}
				td
					button.uk-button.uk-margin-small-right(data-uk-tooltip, title="change", @click="change($event, item)")
						i.uk-icon-pencil
					button.uk-button(data-uk-tooltip, title="remove", @click="remove($event, item)")
						i.uk-icon-remove


		p.none(v-show="!data.length") 暂无内容
</template>
<style lang="stylus">

	.admin-table
		.none 
			font-size 1.6em
			text-align center
			padding 2em 0
</style>