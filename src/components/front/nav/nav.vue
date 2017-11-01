<template lang="jade">
	mu-flexbox.nav(:gutter="0")
		mu-flexbox-item LinDong Blog
		div
			mu-tabs(value="home").text
				//- to会变成router-link
				mu-tab(value="home" title="HOME" to="/articles")
				mu-tab(value="about" title="ABOUT" href="http://xu-snow.github.io/")
				
</template>

<style lang="stylus">
	.nav
		position absolute
		z-index 99
		top 0
		left 0
		width 100%
		padding 0 20px
		color #fff
		line-height 60px

		li
			display inline

		a
			padding  0 20px
			color inherit
			font-size 14px
			font-weight bold
</style>