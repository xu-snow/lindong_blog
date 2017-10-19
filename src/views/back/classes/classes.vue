<template lang="jade">
	div
		div
			mu-raised-button(label="新建分类",@click="create",labelPosition="before" icon="add",:secondary="true")
		div
			class-list(
				:names="classes.names"
				:attrs="classes.attrs"
				:data="classes.data"
				@change="change"
				@remove="remove"
			)
</template>