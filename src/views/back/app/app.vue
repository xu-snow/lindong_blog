
<template lang="jade">
	//- div.uk-flex.uk-position-absolute.uk-width-1-1.uk-height-1-1
	div
		div
			my-nav
		div.admin-g-mn
			mu-content-block
				router-view
</template>

<style lang="stylus">
	.admin-g-sd
		width 200px
		border-right 1px solid #e5e5e5

	.admin-g-mn
		padding-left 256px
</style>