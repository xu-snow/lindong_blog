import articles from './articles'
import classes from './classes'
import authorisation from './authorisation'
import uploadImage from './uploadImage'
import { isProduction } from './url'
import axios from 'axios'

if (!isProduction) {
  axios.defaults.withCredentials = true
}

// `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
// validateStatus: function (status) {
//   return status >= 200 && status < 300; // 默认的
// },

axios.defaults.validateStatus = undefined


let resource = {
  articles: articles,
  classes: classes
}

export { resource, authorisation, uploadImage, isProduction }