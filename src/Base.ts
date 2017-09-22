/*
 * @Author: zhengxu 
 * @Date: 2017-09-20 14:22:13 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-09-22 19:29:08
 */
/**
 * 所有组件的基类
 */

import Vue from 'vue'
import * as R from 'vue-router'

class Base extends Vue {
  readonly zx: string = 'zx'

}

declare namespace Base {
  type Route = R.Route
  type next = (to?: R.RawLocation | false | ((vm: Vue) => any) | void) => void
}
// namespace Base {
//   Route: R.Route,
//   next: (to?: R.RawLocation | false | ((vm: Vue) => any) | void) => void
//   beforeRouteEnter(
//     to: R.Route,
//     from: R.Route,
//     next: (to?: R.RawLocation | false | ((vm: Vue) => any) | void) => void
//   ): void
// }
export default Base

