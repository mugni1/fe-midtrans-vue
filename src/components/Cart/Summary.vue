<script setup lang="ts">
import Button from '../Button.vue';
import type { Item, PostPaymentResponse } from '@/types/payment.type';
import { loadMidtrans } from '@/libs/midtrans';
import { usePostPayment } from '@/hooks/usePostPayment';

// props
const props = defineProps<{
  total: number,
  items: {
    id: string
    price: number
    total_price: number
    quantity: number
    name: string
    category: string
  }[]
}>()

// hooks
const { mutateAsync, isPending } = usePostPayment()

// methods
const handlePayment = async () => {
  await loadMidtrans()
  const orderId = "TRX_" + new Date().getFullYear() + new Date().getHours() + new Date().getSeconds() + new Date().getMilliseconds()
  const itemDetails: Item[] = props.items.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    total_price: item.total_price,
    price: item.price,
    quantity: item.quantity
  }))
  const payload = {
    order_id: orderId,
    item_details: itemDetails
  }
  try {
    const result = await mutateAsync(payload)
    window.snap.pay(result.data?.token || "", {
      onSuccess: function (result: any) {
        console.log("SUCCESS", result)
      },
      onPending: function (result: any) {
        console.log("PENDING", result)
      },
      onError: function (result: any) {
        console.log("ERROR", result)
      },
      onClose: function () {
        console.log("Popup ditutup")
      }
    })
  } catch (err: unknown) {
    const error = err as PostPaymentResponse
    alert(error.message)
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Summary</h1>
    <div class="card">
      <div class="col-span-4 grid grid-cols-4" v-for="item in props.items">
        <div class="row">
          <p class="truncate">{{ item.name }}</p>
          <p>x{{ item.quantity }}</p>
        </div>
        <div class="row flex justify-end">
          <p>Rp {{ item.total_price.toLocaleString("id-ID") }}</p>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="row">
        <b>Total</b>
      </div>
      <div class="row flex justify-end">
        <b>Rp {{ props.total.toLocaleString("id-ID") }}</b>
      </div>
    </div>
    <Button @onClick="handlePayment">
      {{ isPending ? "Pending.." : "Order Now" }}
    </Button>
  </div>
</template>

<style scoped>
@import "../../assets/main.css";

.container {
  @apply col-span-6 lg:col-span-2
}

.row {
  @apply col-span-2 text-black/70
}

.title {
  @apply text-xl font-bold mb-2
}

.card {
  @apply grid grid-cols-4 gap-2 mb-2
}

.horizontal-line {
  @apply h-[1px] col-span-4 bg-black/50 w-full
}
</style>
