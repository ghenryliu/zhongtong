import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}



export function removeToken() {
  return Cookies.remove(TokenKey)
}



export function setCode(code) {
  console.log("Cookies.set(TokenKey, code)",Cookies.set(TokenKey, code))
  return Cookies.set(TokenKey, code)
}

export function getCode() {
  console.log("Cookies.get(TokenKey)",Cookies.get(TokenKey))
  return Cookies.get(TokenKey)
}
