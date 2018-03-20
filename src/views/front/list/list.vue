<template lang="jade">
	div
		my-head

		section.g-container.f-flex
			main.g-mn.f-flex-item-1
				transition(name="fade")
					div.article-list(v-show="articles.length")
						mu-list
							list-item(v-for="item in articles", :item="item",:key="item.id")

						mu-pagination.article-list-pagination(v-show="isShowPag",:current="current" ,:defaultPageSize="defaultPageSize",:total="total" ,@pageChange="pageChange")

				p.none(v-show="!articles.length") 暂无内容

			aside.g-sd
				side-class
				side-about

		my-foot
</template>
<style lang="scss">
.article-list {
  .info {
    color: #999;
    font-size: 14px;
  }

  .digest {
    line-height: 1.8;
    text-align: justify;
  }
}

.article-list-pagination {
	justify-content: center;
	margin-top: 12px;

}
</style>
