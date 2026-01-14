import { postPaymentService } from '@/api/Services'
import { handleErrorResponse } from '@/libs/response'
import { useMutation } from '@tanstack/vue-query'
import type { PostPaymentPayload, PostPaymentResponse } from '@/types/payment.type'

const fetch = async (payload: PostPaymentPayload): Promise<PostPaymentResponse> => {
  try {
    const res = await postPaymentService(payload)
    return res.data
  } catch (error: unknown) {
    return handleErrorResponse(error)
  }
}

export const usePostPayment = () => {
  return useMutation({
    mutationFn: (payload: PostPaymentPayload) => fetch(payload),
  })
}
