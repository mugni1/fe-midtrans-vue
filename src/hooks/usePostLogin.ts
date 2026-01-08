import { postLoginService } from "@/api/Services";
import { handleErrorResponse } from "@/libs/response";
import type { PostLoginPayload, PostLoginResponse } from "@/types/auth";
import { useMutation } from "@tanstack/vue-query";

const fetch = async (payload: PostLoginPayload): Promise<PostLoginResponse> => {
  try {
    const results = await postLoginService(payload)
    return results.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}


export const usePostLogin = () => {
  return useMutation({
    mutationFn: (payload: PostLoginPayload) => fetch(payload)
  })
}
