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


let classes1: { get, update, delete, put } = {
  get: () => {
    return new Promise((resolve, reject) => {
      $.get(getUrl('classes'), res => {
        resolve(res)
      }, 'json')

    })
  },
  update: (params, data) => {
    return new Promise((resolve, reject) => {

      $.post(getUrl('classesOne', params), data, res => {
        resolve(res)
      }, 'json')

    })
  },
  put: data => {
    return new Promise((resolve, reject) => {

      $.ajax({
        url: getUrl('classes'),
        type: 'put',
        data: data,
        dataType: 'json',
        success: res => { resolve(res) }
      })

    })
  },
  delete: params => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: getUrl('classesOne', params),
        type: 'delete',
        dataType: 'json',
        success: res => { resolve(res) }
      })
    })
  }

}







export default classes
