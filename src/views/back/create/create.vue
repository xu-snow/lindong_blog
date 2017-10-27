<template lang="jade">
	div.admin-create
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
				mu-row.small-top
					mu-col( width="100" tablet="50" desktop="33")
						img.bg-img(:src="article.bg.ctn", v-show="article.bg.ctn")		
				mu-text-field(label="正文" ,:multiLine="true",:fullWidth ="true",:rows="5" ,:rowsMax="10",v-model="article.markdown", :disabled="disabled")
				div(style="text-align: center")
					mu-raised-button(label="提交" type="submit", v-show="!disabled") 
					mu-raised-button(label="修改" type="button", @click="toggle", v-show="disabled")
				div
					mavon-editor(ref="md" v-model="editorValue",@imgAdd="$imgAdd", @imgDel="$imgDel")
</template>

<style lang="stylus">
	.file-img
		position absolute
		width 100%
		height 100%
		left 0
		top 0
		opacity 0
	.admin-create
		.bg-img
			width 100%
		.small-top
			margin-top 10px
	#editor
		margin auto
		width 80%;
		height  580px
    
</style>