/*
 * @Author: zhengxu 
 * @Date: 2017-09-20 14:18:12 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-20 16:08:21
 */
import Vue from '@/Base'
import { Component,Watch ,Prop } from 'vue-property-decorator'
import template from './app.vue'
import '@/assets/css/reset.css'
import myNav from '@/components/front/nav.vue'

@Component({
    mixins:[template],
    components:{
        myNav
    }
})
export default class App extends Vue{

}
