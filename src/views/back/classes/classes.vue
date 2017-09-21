<template lang="jade">
	div
		div.control.uk-margin-bottom.flex
			button.uk-button(@click="create") 新建分类 
				i.uk-icon-plus

		div
			class-list(
				:names="classes.names"
				:attrs="classes.attrs"
				:data="classes.data"
				@change="change"
				@remove="remove"
			)
</template>
