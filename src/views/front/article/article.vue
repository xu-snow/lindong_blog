<template lang="jade">
	div
		my-head(:article="article",
			:title="getProperty('title')",
			:digest="getProperty('digest')",
			:date="getProperty('date')",
			:classesName="getProperty('classes.name')",
			:bg="getProperty('bg.ctn')")

		section.g-container.f-flex
			main.g-mn.f-flex-item-1
				div.markdown-body(v-html="article.html")

			aside.g-sd
				side-class
				side-about

		my-foot
</template>
