/*
 * @Author: zhengxu 
 * @Date: 2017-09-20 14:22:13 
 * @Last Modified by: zhengxu
 * @Last Modified time: 2017-11-26 16:12:56
 */
/**
 * 所有组件的基类
 */

/// <reference path="./index.d.ts"/>

import Vue from 'vue'
import * as R from 'vue-router'

class Base extends Vue {

}

declare namespace Base {
  type Route = R.Route
  type next = (to?: R.RawLocation | false | ((vm: any) => any) | void) => void
}

export default Base

