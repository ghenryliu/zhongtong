import request from '@/utils/request'



export function loginByUsername(account,pwd) {
  const data = "account="+account+"&pwd="+pwd
  return request({
    url: '/s/login',                //  /login/login
    method: 'post',
    data
  })
}


export function Logout() {
  const data=""
  return request({
    url: '/s/logout',
    method: 'post',
    data
  })
}



export function updatePersonalInfo(account,name,phone){
  const data="account="+account+"&name="+name+"&phone="+phone
  return request({
    url:'/s/mgr/modifySelfInfo',
    method:'post',
    data
  })
}

export function modifyPwd(oldPwd,newPwd){
  const data="oldPwd="+oldPwd+"&newPwd="+newPwd
  return request({
    url:'/s/mgr/modifySelfPwd',
    method:'post',
    data
  })
}







