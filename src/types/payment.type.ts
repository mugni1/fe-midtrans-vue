export interface PostPaymentResponse {
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
  price: number
  total_price: number
  quantity: number
  name: string
  category: string
}
export interface PostPaymentPayload {
  order_id: string
  item_details: Item[]
}
