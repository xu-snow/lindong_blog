import Vue from '@/Base'
// import Vue,{ComponentOptions} from 'vue'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './article.vue'
import myHead from '@/components/front/head.vue'
import myFoot from '@/components/front/foot.vue'
import sideClass from '@/components/front/class.vue'
import sideAbout from '@/components/front/about.vue'
import listItem from '@/components/front/item.vue'
import { resource } from '@/req'
import VueRouter from 'vue-router' 
// import Component from 'vue-class-component'
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
    article:any={classes:{},bg:{}}
    beforeRouteEnter(to:any, from:any, next:any) {
        resource.articles.getOne(to.params).then((res:any) => {
            next((vm:any) => {
                vm.article = res.article
            })
        })
    }
} 
