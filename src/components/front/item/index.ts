import Vue from '@/Base'
import { Component, Prop } from 'vue-property-decorator'
import template from './item.vue'

@Component({
    mixins: [template]
})
export default class Item extends Vue {
    @Prop() item: { [key: string]: any }
    @Prop() index: number
    get preView() {
        return this.item.html
            .replace(/<[^>]+>/g, '')
            .replace(/\s/g, '')
            .substring(0, 100) + '......'
    }
}