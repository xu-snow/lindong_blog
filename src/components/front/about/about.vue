<template lang="jade">
	section.about-panel
		mu-divider
		h4.title ABOUT
		img.avatar(src="../../../assets/images/avatar.jpg")
		p.intro 世界在我面前臣服，敌人在我眼前倒下
		div.web-link
			mu-icon-button(icon=":fa fa-github" tooltip="github",  tooltipPosition="top-center", href="https://github.com/xu-snow")
			mu-icon-button(icon=":fa fa-twitter" tooltip="twitter",  tooltipPosition="top-center" href="https://twitter.com/lindongxuer")
		mu-divider
</template>

<style lang="stylus">
	.about-panel
		.avatar
			overflow hidden
			width 160px
			height 160px
			border-radius 4px

		.intro
			color #666
			font-size 14px
		.web-link
			.mu-icon-button
				width 60px
				height 60px
			.mu-icon
				font-size 36px
</style>