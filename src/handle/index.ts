import { AxiosResponse, AxiosPromise } from 'axios'
import Vue from 'vue'
import identity from 'lodash/identity'

/**
 * 提示框
 * @param res [请求结果]
 * @param options [成功或失败的回调文字]
 */
export const handleRes = (res, options: { errorMsg?: string, successMsg?: string } = {}) => {
  let status: boolean
  if (res.code === -1) {
    Vue.$toast.error('系统错误 code: ' + res.code)
    status = false
  }
  else if (res.code === 1) {
    Vue.$toast.error(options.errorMsg || res.msg || ('操作失败 code: ' + res.code))
    status = false
  } else {
    Vue.$toast.success(options.successMsg || res.msg || '操作成功')
    status = true
  }
  return status
}

/**
 * 检查请求数据
 * @export
 * @param {AxiosResponse} response 
 * @returns 
 */
export function checkStatus(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else { // todo 这里还有东西要写
    let error = new Error(response.statusText)
    error['response'] = response
    throw error
  }
}

export function parseJson(response: AxiosResponse) {
  return response.data
}

/**
 * 通用取数据并处理
 * 
 * @export
 * @param {Function} task  请求任务
 * @param {{params?:Object,data?:Object}} body [params通常是组成api的参数，data为请求参数]
 * @param {Function} cb 成功回调
 * @param {Function} cb2 失败回调
 */
export function fetchItem(task: { (reqUrl: UrlConfig): AxiosPromise }, body: UrlConfig = {}, cb?: Function, cb2?: Function) {
  return task(body)
    .then(checkStatus)
    .then(parseJson)
    .then(json => {
      cb && cb(json)
      return json
    })
    .catch(e => {
      Vue.$toast.error(e && e.message)
      cb2 && cb2()
    })
}

// export function returnfetchData(...arg) {
//   return fetchItem(arg[0], arg[1], identity)
// }
