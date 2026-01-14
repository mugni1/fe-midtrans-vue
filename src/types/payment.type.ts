import type { HttpStatusCode } from "axios"

export interface PostPaymentResponse {
  status: HttpStatusCode
  message: string
  data: {
    token: string
    redirect_url: string
  } | null
  meta: null
  errors: null
}

export interface Item {
  id: string
  name: string
  category: string
  price: number
  quantity: number
}
export interface PostPaymentPayload {
  destination: string
  item_details: Item[]
}
