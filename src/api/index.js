import request from '@/utils/request'

export async function queryProse() {
  return request('/prose')
}
