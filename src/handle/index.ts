import { AxiosPromise, AxiosResponse } from 'axios'

export const handleRes = (res, options: { errorMsg?: string, successMsg?: string } = {}) => {
  let status
  if (res.code === -1) {
    UIkit.notify({
      message: '系统错误 code: ' + res.code,
      status: 'danger',
      timeout: 1500,
    })
    status = false
  }
  else if (res.code === 1) {
    UIkit.notify({
      message: options.errorMsg || res.msg || ('操作失败 code: ' + res.code),
      status: 'warning',
      timeout: 1500,
    })
    status = false
  } else {
    UIkit.notify({
      message: options.successMsg || res.msg || '操作成功',
      status: 'success',
      timeout: 1500,
    })
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
export function fetchItem(task: Function, body: { params?: Object, data?: Object } = {}, cb?: Function, cb2?: Function) {
  if (body.params) {
    task = task.bind(null, body.params)
  }
  return task(body.data)
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
