import { getUrl } from './url'

import axios from 'axios'

let api: { login } = {
  login: data => {
    return new Promise((resolve, reject) => {

      $.post(getUrl('login'), data, res => {
        resolve(res)
      }, 'json')

    })
  }
}



export default api