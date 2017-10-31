import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

// server should need header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
interface ClassesInterface {
  get(reqUrl?: UrlConfig): AxiosPromise
  update(reqUrl: UrlConfig): AxiosPromise
  post(reqUrl: UrlConfig): AxiosPromise
  delete(reqUrl: UrlConfig): AxiosPromise
}
let classes: ClassesInterface = {
  get: reqUrl => {
    return axios.get(getUrl('classes'), {
      params: reqUrl ? reqUrl.data : undefined
    })
  },
  update: reqUrl => {
    return axios.put(getUrl('classesOne', reqUrl.params), reqUrl.data)
  },
  post: reqUrl => {
    return axios.post(getUrl('classes'), reqUrl.data)
  },
  delete: reqUrl => {
    return axios.delete(getUrl('classesOne', reqUrl.params), {
      data: reqUrl.data,
    })
  }
}


export default classes
