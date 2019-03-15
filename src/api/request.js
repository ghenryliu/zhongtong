import axios from 'axios'
import { Message } from 'element-ui'
//import store from '@/store'
//import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url

  baseURL:'http://repairmgr.indoorun.com',

  timeout: 5000, // request timeout
  withCredentials: true
})

// request interceptor
service.interceptors.request.use(
  config => {
    console.log("请求...",config)
    //Do something before request is sent
    // if (store.getters.token) {                                                 //zt
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    //}                                                                            //zt
    return config
  },
  error => {
    // Do something with request error
    console.log("error:>>>>",error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  // response => response,  //Zt

  response=>{
    console.log('返回',response)
    return response
  },




  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       // 请自行在引入 MessageBox
  //       // import { Message, MessageBox } from 'element-ui'
  //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //         confirmButtonText: '重新登录',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service





// import axios from 'axios'
//
// // create an axios instance
// const service = axios.create({
//   //baseURL: process.env.BASE_API, // api的base_url
//
//   baseURL:'http://repair.indoorun.com',
//
//
//   // baseURL:window.configUrls.requestUrls,
//   timeout: 60000 // request timeout
// })
//
// service.interceptors.request.use(config => {
//
//   console.log('请求', config)
//
//   return config
//
// }, error => {
//
//   console.log(error)
//
//   Promise.reject(error)
// })
//
// // respone interceptor
// service.interceptors.response.use(
//   response => {
//
//     console.log('返回', response.data)
//
//     const {msg,code,data} = response.data
//
//     // console.log(msg)
//     // console.log(code)
//     // console.log(data)
//
//     // if (response.data.hasOwnProperty('userId')) {
//     //   return response.data.userId
//     // }
//
//     // if(!userId ){
//     //   return userId
//     // }
//
//
//     if (code === 0) {    //使用0 和使用'0' 有区别
//       //console.log("heh",response.data)
//       return response.data
//     }
//     if (code===901){
//       const getOpenidUrl = response.data.getOpenidUrl
//       console.log("abc>>>>>>>>>>",getOpenidUrl)
//       return {
//         url:getOpenidUrl,
//         code:901
//       }
//     }
//     return Promise.reject(msg)
//   },
//   error => {
//     console.log('err' + error)// for debug
//     return Promise.reject(error)
//   })
//
// export default service







