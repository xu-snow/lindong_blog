import Vue from "@/Base";
import { Component } from 'vue-property-decorator'
import template from './class.vue'
import { resource } from '@/req'

@Component({
    mixins: [template]
})
export default class Class extends Vue {
    classes: any[] = []
    created() {
        resource.classes.get().then(res => {
            this.classes = res.classes
        })
    }
    get total() {
        let total = 0
        this.classes.forEach((element, index) => {
            total += element.articles.length
        })
        return total
    }

}