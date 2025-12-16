import { postPaymentService } from '@/api/Services'
import type { PostPaymentPayload, PostPaymentResponse } from '@/types/payment.type'
import { useMutation } from '@tanstack/vue-query'
import { AxiosError } from 'axios'

const fetch = async (payload: PostPaymentPayload): Promise<PostPaymentResponse> => {
  try {
    const res = await postPaymentService(payload)
    return res.data
  } catch (error: unknown) {
    let message = 'Terjadi kesalahan saat mengambil data payment method.';
    if (error instanceof AxiosError) {
      message = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }
    return {
      message: message,
      data: null,
      meta: null,
      errors: null
    };
  }
}

export const usePostPayment = () => {
  return useMutation({
    mutationFn: (payload: PostPaymentPayload) => fetch(payload),
  })
}
