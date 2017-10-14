/**
 *  params为合成url的参数
 *  data为请求主体发送的数据,包括get请求
 * @interface UrlConfig
 */
interface UrlConfig{
  params?: { [key: string]: string }
  data?:Object
}