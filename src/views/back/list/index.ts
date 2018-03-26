/*
 * @Author: zhengxu
 * @Date: 2017-09-22 10:09:16
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-27 01:43:36
 */
import Vue from '@/Base'
import { Component, Watch } from 'vue-property-decorator'
import template from './list.vue'
import articleList from '@/components/back/table'
import { resource } from '@/req'
import { pageSize } from '@/constant/pageSize'
import { handleRes, fetchItem, parseJson, fetchArticles } from '@/handle'
import assign from 'lodash/assign'

@Component({
    mixins: [template],
    components: {
        articleList
    }
})
export default class List extends Vue {
    classes: any[] = []
    trigger = null
    open: boolean = false

    // 给分页用的
    defaultPageSize: number = pageSize
    current: number = 1
    total: number = 1// 数据总量

    names: string[] = ['ID', '标题', '分类', '创建时间']
    attrs: any[] = ['id', {
        type: 'link',
        name: 'title',
        express: '/articles/'
    }, 'classes.name', 'date']

    datas: any[] = []

    // computed
    get filter(): string {
        return this.$route.query.filter || '全部'
    }

    get isShowPag() {
        return this.total > pageSize
    }

    // methods
    change(item) {
        this.$router.push({ path: '/admin/articles/' + item.id })
    }
    remove(item, index) {
        let params = { id: item.id },
            data = { data: JSON.stringify({ classes: item.classes.id }) }
        fetchItem(resource.articles.delete, { params: params, data: data }, (res) => {
            this.datas.splice(index, 1)
            handleRes(res)
        })
    }
    toggle() {
        this.open = !this.open
    }
    handleClose() {
        this.open = false
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
            this.datas = res.articles
        })
    }

    mounted() {
        this.trigger = this.$refs.button['$el']
    }

    beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
        let temp
        Promise.all([resource.classes.get({}).then(parseJson), fetchArticles( to.query )])
            .then(res => {
                next((vm: List) => {
                    vm.classes = res[0].classes
                    vm.datas = res[1].articles
                    vm.total = res[1].totalAmount
                })
            })
            .catch(e => console.log(e))
    }

    beforeRouteUpdate(to: Vue.Route, from: Vue.Route, next: Vue.next) {
        this.total = 1
        fetchArticles(to.query , (res) => {
            next()
            this.datas = res.articles
            this.total = res.totalAmount
        })
    }

    //  用beforeRouteUpdate 看行不行
    // @Watch('$route')
    // onRouteChange() {
    //   fetchItem(resource.articles.get, { params: this.$route.query }, (res) => {
    //     this.articles.data = res.articles
    //   })
    // }

}
