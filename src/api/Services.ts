import type { AxiosResponse } from 'axios';
import { ENDPOINT } from './Endpoints'
import { httpClient } from './HttpClient'
import type { PostPaymentPayload, PostPaymentResponse } from '@/types/payment.type';
import type { PostLoginPayload, PostLoginResponse } from '@/types/auth';
import type { GetParamsType } from '@/types/global.type';
import type { GetDetailGameResponse, GetGamesResponse } from '@/types/games.type';

// PAYMENT SERVICES
export const postPaymentService = async (payload: PostPaymentPayload): Promise<AxiosResponse<PostPaymentResponse>> => {
  return httpClient.post(ENDPOINT.ORDER, payload)
}

// AUTH SERVICE
export const postLoginService = async (payload: PostLoginPayload): Promise<AxiosResponse<PostLoginResponse>> => {
  return httpClient.post(ENDPOINT.LOGIN, payload)
}

// GET GAMES SERVICE
export const getGamesService = async (params: GetParamsType): Promise<AxiosResponse<GetGamesResponse>> => {
  return httpClient.get(ENDPOINT.GAME, { params })
}
export const getDetailGameService = async (id: string): Promise<AxiosResponse<GetDetailGameResponse>> => {
  return httpClient.get(`${ENDPOINT.GAME}/${id}`)
}
