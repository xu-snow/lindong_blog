/*
 * @Author: zhengxu
 * @Date: 2017-09-21 15:44:41
 * @Last Modified by: zhengxu
 * @Last Modified time: 2018-02-15 02:02:27
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './list.vue'
import myHead from '@/components/front/head'
import myFoot from '@/components/front/foot'
import sideClass from '@/components/front/class'
import sideAbout from '@/components/front/about'
import listItem from '@/components/front/item'
import { pageSize } from '@/constant/pageSize'
import { resource } from '@/req'
import { fetchItem } from '@/handle'
import assign from 'lodash/assign'

interface FetchArticlesInterface {
    (data: any, cb: { (res: ArticlesResponse): void }): void
}

const fetchArticles: FetchArticlesInterface = function (data, cb) {
    data.limit = pageSize
    fetchItem(resource.articles.get, { data }, (res: ArticlesResponse) => {
        cb(res)
    })
}
@Component({
    mixins: [template],
    components: {
        myHead,
        myFoot,
        sideClass,
        sideAbout,
        listItem
    }
})
export default class List extends Vue {
    total: number = 1// 数据总量
    defaultPageSize: number = pageSize
    current: number = 1
    articles: any = [] // 具体数据



    get isShowPag(){
        return this.total > pageSize
    }

    /**
     * 点击分页控件
     *
     * @param {number} page
     * @memberof List
     */
    pageChange(page: number) {
        const data = assign({}, this.$route.query, { offset: (page - 1) * pageSize })
        fetchArticles(data, (res) => {
            this.articles = res.articles
        })
    }


    beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
        fetchArticles(to.query, (res) => {
            next((vm: List) => {
                vm.articles = res.articles
                vm.total = res.totalAmount
            })
        })
    }


    // watch
    // @Watch('$route')
    // onRouteChanged() {
    //   let _self = this

    //   fetchItem(resource.articles.get, { data: _self.$route.query }, (res) => {
    //     _self.articles = res.articles
    //   })
    // }

    beforeRouteUpdate(to: Vue.Route, from: Vue.Route, next: Vue.next) {
        // !
         this.total = 1
        fetchArticles(to.query, (res) => {
            next()
            this.articles = res.articles
            this.total = res.totalAmount
        })
    }


}
