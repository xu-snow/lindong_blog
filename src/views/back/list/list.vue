<template lang="jade">
	div
		div.control.uk-margin-bottom.uk-flex
			div 筛选 : 
				div.uk-button-dropdown(data-uk-dropdown="{mode:'click'}")
					button.uk-button {{filter}} 
						i.uk-icon-caret-down
					div.uk-dropdown.uk-dropdown-bottom
						ul.uk-nav.uk-nav-dropdown
							li
								router-link(to="/admin/articles") 全部
							li(v-for="item in classes")
								router-link(:to="{ path: '/admin/articles', query: {filter: item.name} }") {{item.name}}
			div.uk-margin-left
				router-link.uk-button(to="/admin/articles/create") 新建文章

		div.articles
			article-list(
				:names="articles.names"
				:attrs="articles.attrs"
				:data="articles.data"
				@change="change"
				@remove="remove")
</template>