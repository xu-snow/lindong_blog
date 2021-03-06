import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

interface ArticlesInterface {
  get(reqUrl: UrlConfig): AxiosPromise
  getOne(reqUrl: UrlConfig): AxiosPromise
  update(reqUrl: UrlConfig): AxiosPromise
  post(reqUrl: UrlConfig): AxiosPromise
  delete(reqUrl: UrlConfig): AxiosPromise
}

let articles: ArticlesInterface = {
  get: (reqUrl) => {
    return axios.get(getUrl('articles'), {
      params: reqUrl.data,
      responseType: 'json' // 默认
    })
  },
  getOne: reqUrl => {
    return axios.get(getUrl('articlesOne', reqUrl.params))
  },
  update: reqUrl => {
    return axios.put(getUrl('articlesOne', reqUrl.params), reqUrl.data)
  },
  post: reqUrl => {
    return axios.post(getUrl('articles'), reqUrl.data)
  },
  delete: reqUrl => {

    return axios.delete(getUrl('articlesOne', reqUrl.params), {
      data: reqUrl.data,
    })
  }
}



export default articles
