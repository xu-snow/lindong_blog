import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

interface AuthorisationInterface {
  login(reqUrl: UrlConfig): AxiosPromise
  isLogin(): AxiosPromise
}

let authorisation: AuthorisationInterface = {
  login: reqUrl => {
    return axios.post(getUrl('login'), reqUrl.data)
  },
  isLogin: () => {
    return axios.get(getUrl('login'))
  }
}



export default authorisation