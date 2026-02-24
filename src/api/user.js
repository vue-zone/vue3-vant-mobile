import request from '@/utils/request'

export function login(data) {
  return request.post('/auth/login', data)
}

export function logout() {
  return request.post('/user/logout')
}

export function getUserInfo() {
  return request('/user/me')
}

export function getEmailCode() {
  return request.get('/user/email-code')
}

export function resetPassword() {
  return request.post('/user/reset-password')
}

export function register() {
  return request.post('/user/register')
}
