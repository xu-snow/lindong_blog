<template lang="jade">
	footer.g-footer
		p 
			mu-badge(style="padding-right:10px") Copyright
				span(style="font-size: 20px",slot="content" ) &copy;
			span(style="padding-left:10px") {{time}} | LinDong
</template>

<style lang="stylus">
	.g-footer
		font-size 14px
		border-top 1px solid #eee
		line-height 40px
		text-align center
		
		.mu-badge
			background-color inherit
			color inherit
</style>
