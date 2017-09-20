import Vue from '@/Base'
// import Vue,{ComponentOptions} from 'vue'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './list.vue'
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

    articles: any =[]
    beforeRouteEnter(to: any, from: any, next: any) {
        resource.articles.get(to.query).then(res => {
            next(vm => {
                vm.articles = res.articles
            })
        })
    }

    @Watch('$route')
    onRouteChanged() {
        let _self = this
        resource.articles.get(_self.$route.query).then(res => {
            _self.articles = res.articles
        })
    }
    // mounted () {
    //     this.greet()
    //   }
    
    //   // computed
    //   get computedMsg () {
    //     return 'computed 11'
    //   }
    
    //   // method
    //   greet () {
    //     alert('greeting: 22')
    //   }
} 
