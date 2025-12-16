import type { AxiosResponse } from 'axios';
import { ENDPOINT } from './Endpoints'
import { httpClient } from './HttpClient'
import type { PostPaymentPayload, PostPaymentResponse } from '@/types/payment.type';

// PAYMENT SERVICES
export const postPaymentService = async (payload: PostPaymentPayload): Promise<AxiosResponse<PostPaymentResponse>> => {
  return httpClient.post(ENDPOINT.PAYMENT, payload)
}
