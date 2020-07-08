import axios from 'axios'
import { Message } from 'element-ui'
import Vue from 'Vue'
Vue.use(Message)
let http = axios.create({
  // 线上测试
  // baseURL: 'http://platform.taogoucloud.com',
  baseURL: 'http://192.168.0.101:9090',
  withCredentials: true
});
//  请求拦截
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
http.interceptors.response.use(
  response => {
    console.log('响应拦截response', response)
    if(response.data.code === 500) {
      Vue.prototype.$message({
        type: 'warning',
        message: response.data.msg
      })
      this.$router.push({
        name: 'error'
      })
    } else if(response.data.code === 4003) {
      Vue.prototype.$message({
        type: 'warning',
        message: response.data.msg
      })
      localStorage.clear()
    }
    return response
  },
  error => {
    console.log('错误处理', error, error.response)
    return error
  }
)
  export default http
// 请求方法二次封装
// function apiAxios(method, url, params, response) {
//   http({
//     method: method,
//     url: url,
//     data: method === 'POST' || method === 'PUT' ? params : null,
//     params: method === 'GET' || method === 'DELETE' ? params : null,
//   }).then(function (res) {
//     response(res);
//   }).catch(function (err) {
//     response(err);
//   })
// }

// export default {
//   get: function (url, params, response) {
//     return apiAxios('GET', url, params, response)
//   },
//   post: function (url, params, response) {
//     return apiAxios('POST', url, params, response)
//   },
//   put: function (url, params, response) {
//     return apiAxios('PUT', url, params, response)
//   },
//   delete: function (url, params, response) {
//     return apiAxios('DELETE', url, params, response)
//   }
// }
