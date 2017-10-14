import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

interface AuthorisationInterface {
  login(reqUrl: UrlConfig): AxiosPromise
}

let authorisation: AuthorisationInterface = {
  login: reqUrl => {
    return axios.post(getUrl('login'), reqUrl.data)
  }
}



export default authorisation