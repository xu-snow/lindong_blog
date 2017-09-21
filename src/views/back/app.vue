<template lang="jade">
	div.uk-flex.uk-position-absolute.uk-width-1-1.uk-height-1-1
		div.g-sd
			my-nav
		div.g-mn.uk-flex-item-1
			router-view
</template>

<script>
	import '../../assets/uikit.ts'
	import myNav from '../../components/back/nav.vue'

	export default {
		components: {
			myNav
		}
	}
</script>

<style lang="stylus">
	.g-sd
		width 200px
		border-right 1px solid #e5e5e5

	.g-mn
		padding 30px 15px
</style>