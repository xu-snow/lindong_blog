<template lang="jade">
	div
		my-head
		section.g-container.f-flex
			main.g-mn.f-flex-item-1
				transition(name="fade")
					mu-list.article-list(v-show="articles.length")
						list-item(v-for="item in articles", :item="item",:key="item.id")
				p.none(v-show="!articles.length") 暂无内容

			aside.g-sd
				side-class
				side-about

		my-foot
</template>
<style lang="stylus">
	.article-list
		.info
			color #999
			font-size 14px

		.digest
			line-height 1.8
			text-align justify
</style>