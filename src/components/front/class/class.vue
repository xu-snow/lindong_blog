<template lang="jade">
	section.class-panel.panel.f-spacing.f-spacing-little
		mu-divider
		h4.title CLASS
		div.class-list
			mu-chip(:backgroundColor="$route.query.filter?grey200:blue100" @click="routerPush()" ) all
				span.number {{total}}

			mu-chip(:backgroundColor="$route.query.filter===item.name?blue100:grey200" , v-for="item in classes" ,:key="item.id", @click="routerPush(item.name)") {{item.name}}
				span.number {{item.articles.length}}
</template>

<style lang="stylus">
	.class-panel
		.class-list
			padding-bottom 20px

		.mu-chip
			margin 0 5px 5px 0
		
		.number
			margin-left 5px
			color #9e9e9e
</style>