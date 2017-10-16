import articles from './articles'
import classes from './classes'
import authorisation from './authorisation'
import { isProduction } from './url'
import axios from 'axios'

if (!isProduction) {
  axios.defaults.withCredentials = true
}


let resource = {
  articles: articles,
  classes: classes
}

export { resource, authorisation, isProduction }