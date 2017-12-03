<template lang="jade">
	mu-drawer.admin-nav(:open="open",:docked="docked")
		mu-list
			mu-list-item(v-for="item,key in lists", :title="item.title",:to="item.href" ,:key="key",:exact="true")
				mu-icon(slot="left" ,:value="item.icon")
</template>

<style lang="scss">
.admin-nav {
	.router-link-active {
		.mu-icon,
		.mu-item-title {
			color: #ff4081;
		}
	}
	a:hover {
		text-decoration: none;
	}
}
</style>