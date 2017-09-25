import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

interface ArticlesInterface {
  get(data: { [key: string]: string }): AxiosPromise
  getOne(params: { [key: string]: string }): AxiosPromise
  update(params: { [key: string]: string }, data: Object): AxiosPromise
  put(data: Object): AxiosPromise
  delete(params: { [key: string]: string }, data: Object): AxiosPromise
}

let articles: ArticlesInterface = {
  get: (data = {}) => {

    return axios.get(getUrl('articles'), {
      params: data,
      responseType: 'json' // 默认
    })

  },
  getOne: params => {
    return axios.get(getUrl('articlesOne', params))
  },
  update: (params, data) => {

    return axios.post(getUrl('articlesOne', params), data)
  },
  put: data => {

    return axios.put(getUrl('articles'), data)
  },
  delete: (params, data) => {

    return axios.delete(getUrl('articlesOne', params), {
      data: data,
    })
  }
}



export default articles
