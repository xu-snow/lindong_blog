import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './nav.vue'

@Component({
    mixins: [template]
})
export default class Nav extends Vue {

}