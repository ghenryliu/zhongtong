import request from '@/utils/request'

// export function loginByUsername(username,password) {
//   const data = {
//     username,
//     //"account":username,
//     password
//     //"pwd":password
//   }
//   return request({
//     url: '/s/login',                //  /login/login
//     method: 'post',
//     data
//   })
// }

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}


export function loginByUsername(data) {
  // const data = {
  //   account,
  //   pwd
  // }
  console.log(">>>",data)
  return request({
    url: '/s/login',                //  /login/login
    method: 'post',
    data
  })
}

