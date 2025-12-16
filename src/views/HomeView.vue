<script setup lang="ts">
import ProductList from '@/components/Cart/ProductList.vue'
import Summary from '@/components/Cart/Summary.vue'
import { onMounted, reactive, ref, watch } from 'vue'

// dumy
let items = reactive([
  {
    id: "asdjiqw129asd",
    image_url: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1cbcc3f2-2ea4-4a9c-a1f0-74c661d9f3c9/NIKE+SHOX+RIDE+2.png",
    category: "Men's Shoes",
    name: "Nike Shox Ride 2",
    price: 2669000,
    total_price: 2669000,
    quantity: 1,
  },
  {
    id: "as234daj1fif23",
    image_url: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/bdd58285-1b45-456c-aef8-a0f08bd6cbd2/NIKE+SHOX+TL.png",
    category: "Men's Shoes",
    name: "Nike Shox TL",
    price: 2669000,
    total_price: 2669000,
    quantity: 1,
  },
  {
    id: "asjas8123ioasdij",
    image_url: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/5dc83afa-3afb-40a4-940d-6d65e7cc89ef/TOTAL+90.png",
    category: "Men's Shoes",
    name: "Nike Total 90",
    price: 1729000,
    total_price: 1729000,
    quantity: 1,
  }
])

// state
const total = ref(0)

// methods
const increment = (index: number) => {
  if (!items[index]) { return }
  items[index].quantity++
  items[index].total_price = items[index].quantity * items[index].price
}
const decrement = (index: number) => {
  if (!items[index]) { return }
  if (items[index].quantity > 1) {
    items[index].quantity--
    items[index].total_price = items[index].quantity * items[index].price
  }
}

// mounted
onMounted(() => {
  const amounts = items.map((prod) => prod.total_price)
  const amountTotal = amounts.reduce((prev, current) => prev + current, 0)
  total.value = amountTotal
})

// watcher
watch(items, (newProduct) => {
  const amounts = newProduct.map((prod) => prod.total_price)
  const amountTotal = amounts.reduce((prev, current) => prev + current, 0)
  total.value = amountTotal
})
</script>

<template>
  <section class="container mx-auto grid grid-cols-6 w-full pt-5 gap-10 px-5 pb-5">
    <ProductList v-model="items" @increment="increment" @decrement="decrement" />
    <Summary :items="items" :total="total" />
  </section>
</template>
