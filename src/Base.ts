/*
 * @Author: zhengxu 
 * @Date: 2017-09-20 14:22:13 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-10-19 15:12:50
 */
/**
 * 所有组件的基类
 */

/// <reference path="./index.d.ts"/>

import Vue from 'vue'
import * as R from 'vue-router'

class Base extends Vue {
  readonly zx: string = 'zx'

}

declare namespace Base {
  type Route = R.Route
  type next = (to?: R.RawLocation | false | ((vm: Vue) => any) | void) => void
}

export default Base

