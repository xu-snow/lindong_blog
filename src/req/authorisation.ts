import { getUrl } from './url'
import axios, { AxiosPromise } from 'axios'

interface AuthorisationInterface {
  login(data: Object): AxiosPromise
}

let authorisation: AuthorisationInterface = {
  login: data => {
    return axios.post(getUrl('login'), data)
  }
}



export default authorisation