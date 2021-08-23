import request from './http'

export function getRequest (url, data) {
  return request({
    url,
    method: 'get',
    params: data
  })
}

export function postRequest (url, data) {
  return request({
    url,
    method: 'post',
    data
  })
}

