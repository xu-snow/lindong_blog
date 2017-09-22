/*
 * @Author: zhengxu 
 * @Date: 2017-09-22 14:05:25 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-22 14:10:38
 */

import Vue from '@/Base'
import { Component } from 'vue-property-decorator'
import template from './login.vue'
import { api } from '@/req'
import { handleRes } from '@/handle'

@Component({
  mixins: [template]
})
export default class Login extends Vue {
  user: string = ''
  password: string = ''

  // mehtod
  submit() {
    let _self = this
    api.login({ user: _self.user, password: _self.password }).then(res => {
      let r = handleRes(res, { errorMsg: '账号或密码错误', successMsg: '登录成功' })

      if (r) {
        sessionStorage.setItem('isLogin', '1')
        _self.$router.push({ path: '/admin/articles' })
      }
    })
  }
}
