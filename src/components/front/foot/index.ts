import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './foot.vue'

@Component({
    mixins: [template]
})
export default class Foot extends Vue {

}