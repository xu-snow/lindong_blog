<template lang="jade">
	div
		my-head(:article="article")

		section.g-container.f-flex
			main.g-mn.f-flex-item-1
				div.markdown-body(v-html="article.html")

			aside.g-sd
				side-class
				side-about

		my-foot
</template>
