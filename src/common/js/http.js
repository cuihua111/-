import axios from 'axios'
axios.defaults.timeout = 30000
axios.defaults.baseURL = process.env.baseURL

// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  return config
}, function (error) {
  // 请求失败的处理
  return Promise.reject(error)
})

// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(function (response) {
  // 处理响应数据
  return response
}, function (error) {
  // 处理响应失败
  return Promise.reject(error)
})
export default axios
