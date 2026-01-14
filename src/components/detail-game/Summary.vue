<script setup lang="ts">
  import { Separator } from '@/components/ui/separator'
  import { useRoute, useRouter } from 'vue-router'
  import { Headphones, LogInIcon, ShoppingBag, Loader2 } from 'lucide-vue-next'
  import { data } from './data'
  import { Button } from '../ui/button'
  import type { GetDetailGameCategoryItem } from '@/types/games.type'

  // STATE
  const props = defineProps<{
    isPending: boolean
    disabled: boolean
    token: string | undefined
    title: string
    item: GetDetailGameCategoryItem | undefined
  }>()
  const emits = defineEmits<{
    (e: 'onCheckout'): void
  }>()
  const route = useRoute()
  const router = useRouter()

  // METHODS
  const handleLogin = () => {
    const path = btoa(route.path)
    router.push(`/login?redirect=${path}`)
  }
  const handleCheckout = () => {
    emits('onCheckout')
  }
</script>

<template>
  <div class="main-container-summary">
    <div class="container-summary">
      <div class="card-item-summary">
        <Headphones class="size-10" />
        <div class="text-sm">
          <p>You need help?</p>
          <p class="font-normal">You can call customer service in here.</p>
        </div>
      </div>
      <div v-if="item" class="card-item-summary flex flex-col border-dashed">
        <div class="flex items-center gap-4 w-full">
          <img :src="item.imageUrl" alt="image" class="w-14 rounded-sm aspect-square object-cover object-center" />
          <div class="flex flex-col text-sm">
            <p class="title-summary">{{ title }}</p>
            <p class="sub-title-summary">{{ item.name }}</p>
          </div>
        </div>
        <div class="flex flex-col text-sm w-full space-y-2">
          <div class="flex items-center justify-between">
            <p class="font-medium">Price</p>
            <p class="font-normal">Rp {{ item.price.toLocaleString('id-ID') }}</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="font-medium">Count</p>
            <p class="font-normal">{{ item.quantity }}</p>
          </div>
        </div>
        <Separator />
        <div class="flex items-center justify-between w-full">
          <p class="font-semibold text-lg">Total Price</p>
          <p class="font-semibold text-primary text-lg">Rp {{ item.price.toLocaleString('id-ID') }}</p>
        </div>
      </div>
      <div v-if="!item" class="card-item-summary flex flex-col border-dashed">
        <span class="font-medium text-sm">No product items have been selected yet.</span>
      </div>
      <Button v-if="isPending" class="btn" :disabled="true"> <Loader2 class="animate-spin" /> </Button>
      <Button v-else-if="token" class="btn" :disabled="disabled" @click="handleCheckout">
        <ShoppingBag /> Checkout Now
      </Button>
      <Button v-if="!token" class="btn" @click="handleLogin"> <LogInIcon />Login To Continue </Button>
    </div>
  </div>
</template>

<style scoped>
  @import '../../assets/main.css';

  .main-container-summary {
    @apply col-span-2 relative hidden md:block;
  }

  .container-summary {
    @apply w-full sticky top-30 space-y-4;
  }

  .card-item-summary {
    @apply w-full p-4 flex items-center bg-popover rounded-md gap-4 border;
  }

  .sub-title-summary {
    @apply font-normal;
  }

  .btn {
    @apply w-full text-background font-medium;
  }
</style>
