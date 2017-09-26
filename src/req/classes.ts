import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

// server should need header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
interface ClassesInterface {
  get(params?: { [key: string]: string }): AxiosPromise
  update(params: { [key: string]: string }, data: Object): AxiosPromise
  put(data: Object): AxiosPromise
  delete(params: { [key: string]: string }, data: Object): AxiosPromise
}
let classes: ClassesInterface = {
  get: (data = {}) => {
    return axios.get(getUrl('classes'), {
      params: data
    })
  },
  update: (params, data) => {
    return axios.post(getUrl('classesOne', params), data)
  },
  put: data => {
    return axios.put(getUrl('classes'), data)
  },
  delete: (params, data) => {
    return axios.delete(getUrl('classesOne', params), {
      data: data,
    })
  }
}


export default classes
