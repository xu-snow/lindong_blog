<template lang="jade">
	div
		div
			mu-raised-button(:label="filter" ref="button" @click="toggle",labelPosition="before",icon="arrow_drop_down")
			mu-popover(:trigger="trigger", :open="open" @close="handleClose")
				mu-menu(@itemClick="handleClose")
					mu-menu-item(title="全部", to="/admin/articles")
					mu-menu-item(v-for="item,index in classes",
						:key="index", 
						:title="item.name",
						:to="{ path: '/admin/articles', query: {filter: item.name} }"
					)

			mu-raised-button(label="新建文章",:secondary="true",to="/admin/articles/create",tag="button")
		div.articles
			article-list(
				:names="articles.names"
				:attrs="articles.attrs"
				:data="articles.data"
				@change="change"
				@remove="remove")
</template>

<style lang="scss">
	.admin-g-mn{
		.mu-raised-button:not(:last-of-type){
			margin-right: 12px;
		}
	}
</style>
