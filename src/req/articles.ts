import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

interface ArticlesInterface {
  get(params: { [key: string]: string }): AxiosPromise
  getOne(params: { [key: string]: string }): AxiosPromise
  update(params: { [key: string]: string }, data: Object): AxiosPromise
  put(data: Object): AxiosPromise
  delete(params: { [key: string]: string }, data: Object): AxiosPromise
}

let articles: ArticlesInterface = {
  get: (data = {}) => {
    // return new Promise((resolve, reject) => {
    //   $.get(getUrl('articles'), data, res => {
    //     resolve(res)
    //   }, 'json')
    // })
    return axios.get(getUrl('articles'), {
      params: data,
      responseType: 'json' // 默认
    })

  },
  getOne: params => {
    // return new Promise((resolve, reject) => {
    //   $.get(getUrl('articlesOne', params), res => {
    //     resolve(res)
    //   }, 'json')
    // })
    return axios.get(getUrl('articlesOne', params))

  },
  update: (params, data) => {
    // return new Promise((resolve, reject) => {

    //   $.post(getUrl('articlesOne', params), data, res => {
    //     resolve(res)
    //   }, 'json')

    // })
    return axios.post(getUrl('articlesOne', params), {
      data: data,
    })
  },
  put: data => {
    // return new Promise((resolve, reject) => {
    //   $.ajax({
    //     url: getUrl('articles'),
    //     type: 'put',
    //     data: data,
    //     dataType: 'json',
    //     success: res => { resolve(res) }
    //   })
    // })
    return axios.put(getUrl('articles'), {
      data: data,
    })
  },
  delete: (params, data) => {
    // return new Promise((resolve, reject) => {
    //   $.ajax({
    //     url: getUrl('articlesOne', params),
    //     type: 'delete',
    //     data: data,
    //     dataType: 'json',
    //     success: res => { resolve(res) }
    //   })
    // })
    return axios.delete(getUrl('articlesOne', params), {
      data: data,
    })
  }
}



export default articles
