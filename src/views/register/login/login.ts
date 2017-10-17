/*
 * @Author: zhengxu 
 * @Date: 2017-10-12 21:46:03 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-10-17 17:28:23
 */
import Vue from '@/Base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './login.vue'
import { authorisation } from '@/req'
import { handleRes, fetchItem } from '@/handle'

@Component({
  mixins: [template]

})
export default class Login extends Vue {
  user: string = ''
  password: string = ''

  // method
  submit() {
    fetchItem(authorisation.login, { data: { user: this.user, password: this.password } }, res => {
      let r = handleRes(res, { errorMsg: '账号或密码错误', successMsg: '登录成功' })
      if (r) {
        sessionStorage.setItem('isLogin', '1')
        
        this.$router.push({ path: this.$route.query.redirect || '/admin/articles' })
      }
    })
  }
}
