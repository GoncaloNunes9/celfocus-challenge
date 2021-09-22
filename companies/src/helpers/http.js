import axios from 'axios'
import { appConstants } from '../constants'

export const http = axios.create({
  baseURL: appConstants.API_URL
})

http.interceptors.request.use((c) => {
  const cloneConfig = { ...c }
  cloneConfig.headers.common['Content-Type'] = 'application/json'
  cloneConfig.headers.common['Accept'] = 'application/json'

  return cloneConfig
})

http.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error && error.response && error.response.status === 401) {
      const err = { ...error, message: 'Unauthorized' }
      return Promise.reject(err)
  } else {
    return Promise.reject(error)
  }
})

http.interceptors.response.use(function (response) {
  if (Object.keys(response.headers).includes('x-page')) {
    response.data = {
      data: response.data,
      page: response.headers['x-page'],
      total_pages: Math.ceil(response.headers['x-total'] / response.headers['x-per-page']),
      total_records: response.headers['x-total']
    }
  }
  return response
})