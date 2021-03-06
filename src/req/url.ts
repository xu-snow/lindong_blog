// NODE_ENV 
const isProduction = process.env.NODE_ENV === 'production'
const urlMap = {
  articles: '/resource/articles',
  articlesOne: '/resource/articles/:id',
  classes: '/resource/classes',
  classesOne: '/resource/classes/:id',
  login: '/api/login',
  uploadImage: '/api/uploadImage'
}

// util method
// replace url-template to params

const getUrl = (name: string, params: { [key: string]: string } = {}): string => {
  let url = urlMap[name]
  url = url.replace(/:(\w+)/g, (match, key) => {
    return params[key]
  })
  // return url
  return isProduction ? url : 'http://localhost:3000' + url
}



export { isProduction, getUrl }