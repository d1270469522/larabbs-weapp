import { request } from '@/utils/request'
import store from '@/store'

export function login(data) {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}

export function refresh(token) {
  return request('authorizations/current', {
    method: 'put',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}

export function logout(token) {
  return request('authorizations/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}
