import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './about.vue'

@Component({
    mixins: [template]
})
export default class About extends Vue {

}