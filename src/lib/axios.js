// import axios from 'axios'
import Vue from 'vue'
import { baseURL } from '@/config'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局loading...
      // Spin.show()
      // if (!Object.keys(this.queue).length) !Spin.show()
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      console.log(res)
      return res
    }, error => {
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = Vue.axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options, options.url)
  }
}

export default HttpRequest
