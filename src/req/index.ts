import articles from './articles'
import classes from './classes'
import authorisation from './authorisation'
import { isProduction } from './url'

let resource = {
  articles: articles,
  classes: classes
}

export { resource, authorisation, isProduction }