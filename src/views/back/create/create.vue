<template lang="jade">
	div
		form(@submit.prevent="submit")
			mu-content-block
				div
					mu-text-field(label="标题" ,v-model="article.title",type="text",required, :disabled="disabled")
				div
					mu-text-field(label="摘要",v-model="article.digest",type="text",required,:disabled="disabled")
				div
					mu-select-field(label="分类" v-model="article.classes" )
						mu-menu-item(v-for="item,index in classes",:key="index",:title="item.name" ,:value="item.id",:disabled="disabled")
				div
					mu-raised-button(label="背景选择",:disabled="disabled")
						input.file-img(type="file", @change="uploadImg($event)", :disabled="disabled")
				div
					img(:src="article.bg.ctn", v-show="article.bg.ctn")
				//- div.uk-grid.uk-grid-small
				//- 	div.uk-width-1-10 背景图
				//- 	div.uk-width-4-10
				//- 		button.uk-button.uk-position-relative(type="button", :disabled="disabled")
				//- 			i.uk-icon-plus
				//- 			input#file.file-img(type="file", @change="uploadImg($event)", :disabled="disabled")
				//- div.uk-grid.uk-grid-small.uk-margin-top-remove
				//- 	div.uk-width-1-10
				//- 	div#bg-wrap.uk-width-4-10
				//- 		img.uk-margin-small-top(:src="article.bg.ctn", v-show="article.bg.ctn")
				div
					mu-text-field(label="正文" ,:multiLine="true",:fullWidth ="true",:rows="5" ,:rowsMax="10",v-model="article.markdown", :disabled="disabled")
				div(style="text-align: center")
					mu-raised-button(label="提交" type="submit", v-show="!disabled") 
					mu-raised-button(label="修改" type="button", @click="toggle", v-show="disabled") 
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