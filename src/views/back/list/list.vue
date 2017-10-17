<template lang="jade">
	div
		//- div.control.uk-margin-bottom.uk-flex
		//- 	div 筛选 : 
		//- 		div.uk-button-dropdown(data-uk-dropdown="{mode:'click'}")
		//- 			button.uk-button {{filter}} 
		//- 				i.uk-icon-caret-down
		//- 			div.uk-dropdown.uk-dropdown-bottom
		//- 				ul.uk-nav.uk-nav-dropdown
		//- 					li
		//- 						router-link(to="/admin/articles") 全部
		//- 					li(v-for="item in classes")
		//- 						router-link(:to="{ path: '/admin/articles', query: {filter: item.name} }") {{item.name}}
		//- 	div.uk-margin-left
		//- 		router-link.uk-button(to="/admin/articles/create") 新建文章
		div
			mu-dropDown-menu( :value="filter", @change="handleChange")
				mu-menu-item(value="全部" ,title="全部", to="/admin/articles")
				mu-menu-item(v-for="item,index in classes",
					:key="item.name", 
					:title="item.name",
					:value="item.name",
					:to="{ path: '/admin/articles', query: {filter: item.name} }"
				)
			
			mu-raised-button(label="新建文章",:secondary="true",to="/admin/articles/create")
		div.articles
			article-list(
				:names="articles.names"
				:attrs="articles.attrs"
				:data="articles.data"
				@change="change"
				@remove="remove")
</template>