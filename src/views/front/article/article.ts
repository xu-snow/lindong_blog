/*
 * @Author: zhengxu
 * @Date: 2017-09-21 15:44:53
 * @Last Modified by: zhengxu
 * @Last Modified time: 2018-03-21 00:57:15
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import * as MarkdownIt from 'markdown-it'
import mh from '@/handle/markdown-it-highlightjs'
import template from './article.vue'
import myHead from '@/components/front/head'
import myFoot from '@/components/front/foot'
import sideClass from '@/components/front/class'
import sideAbout from '@/components/front/about'
import listItem from '@/components/front/item'
import { resource } from '@/req'
import { fetchItem } from '@/handle'
import get from 'lodash/get'

let md = new MarkdownIt({
    html: true,        // Enable HTML tags in source
    xhtmlOut: true,        // Use '/' to close single tags (<br />).
    breaks: true,        // Convert '\n' in paragraphs into <br>
    langPrefix: 'lang-',  // CSS language prefix for fenced blocks. Can be
    linkify: false,        // 自动识别url
    typographer: true,
    quotes: '“”‘’'
}).use(mh)

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
export default class Article extends Vue {
    article: any = {}
    beforeRouteEnter(to: Vue.Route, from: Vue.Route, next: Vue.next) {
        fetchItem(resource.articles.getOne, { params: to.params }, (res) => {
            next((vm: Article) => {
                vm.article = res.article
            })
        })
    }

    get _html() {
        return md.render(this.article.markdown || '')
    }

    getProperty(path) {
        return get(this.article, path)
    }
}
