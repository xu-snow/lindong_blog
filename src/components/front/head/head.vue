<template lang="jade">
	header.g-hd(:class="{'g-hd-1':article}",:style="style")
		div.intro
			p.title {{title ? title : 'LinDong BLOG'}}
			p.descript {{digest ? digest : '当幸福来敲门'}}
			p.date(v-if="article") {{date + ' | ' + classesName}}
			p.data(v-if="lastTime") {{'Updated: ' + lastTime }}
</template>
<style lang="stylus">
	.g-hd
		margin-bottom 60px
		background-color #808080
		background-image url(../../../assets/images/banner.jpg)
		background-repeat no-repeat
		background-position center
		background-size cover

		.intro
			max-width 80%
			padding 150px 0
			margin 0 auto
			color #fff
			text-align center

		.title
			font-size 60px
			font-weight bold
			margin 0px
			line-height 1.2

		.descript
			font-size 18px
			margin 0px
			
		&-1
			display flex

			.intro
				text-align left

			.title
				font-weight normal
				margin-bottom 5px

			.descript
				margin-bottom 5px
</style>