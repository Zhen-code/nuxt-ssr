import Cookies from 'js-cookie'

const TokenKey = 'Token'

export function getToken (name) {
  if (name !== undefined) {
    return Cookies.get(name)
  } else {
    return Cookies.get(TokenKey)
  }
}

export function setToken (token, name) {
  if (name !== undefined) {
    return Cookies.set(name, token)
  } else {
    return Cookies.set(TokenKey, token)
  }
}

export function removeToken (name) {
  if (name !== undefined) {
    return Cookies.remove(name)
  } else {
    return Cookies.remove(TokenKey)
  }
}