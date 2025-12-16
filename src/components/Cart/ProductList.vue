<script setup lang="ts">
const modelItems = defineModel<{
  id: string;
  image_url: string;
  category: string;
  name: string;
  price: number;
  total_price: number;
  quantity: number;
}[]>()

const emits = defineEmits<{
  (e: "decrement", value: number): void,
  (e: "increment", value: number): void,
}>()

const handleDecrement = (index: number) => {
  emits('decrement', index)
}
const handleIncrement = (index: number) => {
  emits('increment', index)
}

</script>

<template>
  <div class=" col-span-6 lg:col-span-4">
    <div class="text-black/50 p-4 bg-gray-200 rounded-lg mb-5">
      <b>FREE DELIVERY</b>
      <p>However, buying more than Rp. 100.000</p>
    </div>

    <div class="grid grid-cols-4 gap-5 mb-4" v-for="(product, index) in modelItems">
      <div class="col-span-1 w-full aspect-square overflow-hidden rounded-lg shadow-sm">
        <img :src="product.image_url" alt="Nike Vomero Premium" class="w-full h-full object-cover object-center" />
      </div>
      <div class="col-span-3 space-y-5">
        <div>
          <b class="text-2xl">{{ product.name }}</b>
          <p class="text-base text-black/50">{{ product.category }}</p>
        </div>

        <div class="text-black/50 flex items-center gap-4">
          <button @click="handleDecrement(index)" :class="product.quantity > 1 ? 'btn-counter' : 'btn-disable'">
            -
          </button>
          <span class="font-medium text-black">
            Quantity : {{ product.quantity }}
          </span>
          <button @click="handleIncrement(index)" class="btn-counter">
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/main.css";

.btn-counter {
  @apply px-3 py-1 border rounded hover:bg-gray-100 transition cursor-pointer
}

.btn-disable {
  @apply px-3 py-1 border rounded hover:bg-gray-100 transition cursor-not-allowed opacity-50
}
</style>
