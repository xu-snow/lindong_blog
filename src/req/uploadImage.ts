import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

interface UploadImageInterface {
  post(reqUrl: UrlConfig): AxiosPromise
  delete(reqUrl: UrlConfig): AxiosPromise
}

const uploadImage: UploadImageInterface = {
  post: reqUrl => {
    return axios.post(getUrl('uploadImage'), reqUrl.data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  delete: reqUrl => {

    return axios.delete(getUrl('articlesOne', reqUrl.params), {
      data: reqUrl.data,
    })
  }
}



export default uploadImage
