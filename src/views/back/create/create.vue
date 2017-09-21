<template lang="jade">
	div.uk-container.uk-container-center.uk-margin-bottom
		form.uk-form.uk-margin-top(@submit.prevent="submit")

			div.uk-grid.uk-grid-small
				div.uk-width-1-10 标题
				div.uk-width-4-10
					input#title.uk-width-1-1(type="text", placeholder="标题", required, v-model="article.title", :disabled="disabled")

			div.uk-grid.uk-grid-small
				div.uk-width-1-10 摘要
				div.uk-width-4-10
					input#digest.uk-width-1-1(type="text", placeholder="摘要", required, v-model="article.digest", :disabled="disabled")

			div.uk-grid.uk-grid-small
				div.uk-width-1-10 分类
				div.uk-width-4-10
					select#class(required, v-model="article.classes", :disabled="disabled")
						option(value="") unclassed
						option(v-for="item in classes", :value="item.id") {{item.name}}

			div.uk-grid.uk-grid-small
				div.uk-width-1-10 背景图
				div.uk-width-4-10
					button.uk-button.uk-position-relative(type="button", :disabled="disabled")
						i.uk-icon-plus
						input#file.file-img(type="file", @change="uploadImg($event)", :disabled="disabled")

			div.uk-grid.uk-grid-small.uk-margin-top-remove
				div.uk-width-1-10
				div#bg-wrap.uk-width-4-10
					img.uk-margin-small-top(:src="article.bg.ctn", v-show="article.bg.ctn")

			div.uk-grid.uk-grid-small
				div.uk-width-1-10 正文
				div.uk-width-6-10
					div#editor
						textarea(v-model="article.markdown", :disabled="disabled")

			div.uk-grid.uk-grid-small
				div.uk-width-1-10
				div.uk-width-6-10
					button.uk-button.uk-button-large.uk-button-primary.uk-float-right(type="submit", v-show="!disabled") 提交
					button.uk-button.uk-button-large.uk-float-right(type="button", @click="toggle", v-show="disabled") 修改
</template>

<style lang="stylus">
	.file-img
		position absolute
		width 100%
		height 100%
		left 0
		top 0
		opacity 0

	#editor
		textarea
			width 100%
			height 300px
</style>