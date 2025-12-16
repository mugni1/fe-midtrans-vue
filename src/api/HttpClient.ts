import router from '@/router'
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

// INTIALIZATION
const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({ baseURL: import.meta.env.VITE_BASE_API_URL || "http://localhost:5051" })
  instance.interceptors.response.use(
    (response: any) => {
      return response
    },
    (error: any) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        router.push('/login')
      }
      return Promise.reject(error)
    },
  )
  return instance
}

// HTTP CLIENT
export const httpClient = {
  get: (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().get(url, config)
  },
  delete: (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().delete(url, config)
  },
  post: (url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().post(url, data, config)
  },
  put: (url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return createAxiosInstance().put(url, data, config)
  }
}
