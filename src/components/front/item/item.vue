<template lang="jade">
	li.item.f-spacing
		h3.title
			router-link(:to="{ path: '/articles/' + item.id }") {{item.title}}
		p.info
			|发表于 
			span.date {{item.date}} | 
			| 分类于 
			router-link(:to="{ path: '/articles', query: {filter: item.classes.name} }") {{item.classes.name}}
		p.digest(v-html="preView")
</template>