import { AxiosResponse, AxiosPromise } from 'axios'
import Vue from 'vue'

export const handleRes = (res, options: { errorMsg?: string, successMsg?: string } = {}) => {
  let status
  if (res.code === -1) {
    // UIkit.notify({
    //   message: '系统错误 code: ' + res.code,
    //   status: 'danger',
    //   timeout: 1500,
    // })
    Vue['$toast'].error('系统错误 code: ' + res.code)
    status = false
  }
  else if (res.code === 1) {
    // UIkit.notify({
    //   message: options.errorMsg || res.msg || ('操作失败 code: ' + res.code),
    //   status: 'warning',
    //   timeout: 1500,
    // })
    Vue['$toast'].error(options.errorMsg || res.msg || ('操作失败 code: ' + res.code))
    status = false
  } else {
    // UIkit.notify({
    //   message: options.successMsg || res.msg || '操作成功',
    //   status: 'success',
    //   timeout: 1500,
    // })
    Vue['$toast'].success(options.successMsg || res.msg || '操作成功')
    status = true
  }
  return status
}
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
      // todo 这里还有东西要写
      cb && cb(json)
    })
    .catch(e => {
      cb2 && cb2()
    })
}
