<script setup lang="ts">
  import type { GetDetailGameCategoryItem } from '@/types/games.type'
  import { Button } from '@/components/ui/button'
  import { LogIn, ShoppingBag, Loader2 } from 'lucide-vue-next'
  import { useRoute, useRouter } from 'vue-router'
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
  import Separator from '../ui/separator/Separator.vue'

  // state
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

  // methods
  const handleLogin = () => {
    const path = btoa(route.path)
    router.push(`/login?redirect=${path}`)
  }
  const handleCheckout = () => {
    emits('onCheckout')
  }
</script>

<template>
  <section class="content">
    <div class="main-container">
      <div v-if="!item" class="product">
        <span>No product items have been selected yet.</span>
      </div>
      <Accordion v-if="item" type="single" collapsible class="px-4 border border-dashed rounded-md">
        <AccordionItem value="item-1">
          <AccordionTrigger class="items-center">
            <div class="wraped-acordiont-triggerd">
              <img :src="item.imageUrl" alt="image" class="item-image" />
              <div>
                <p class="item-title">{{ title }}</p>
                <p class="item-subtitle">{{ item.name }}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div class="wraped-acordiont-content">
              <div class="row">
                <p>Price</p>
                <p>Rp {{ item.price.toLocaleString('id-ID') }}</p>
              </div>
              <div class="row">
                <p>Count</p>
                <p>{{ item.quantity }}</p>
              </div>
              <Separator />
              <div class="row text-sm font-medium">
                <p>Total Price</p>
                <p>Rp {{ item.price.toLocaleString('id-ID') }}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button v-if="isPending" class="w-full" :disabled="disabled" @click="handleCheckout">
        <Loader2 class="animate-spin" />
      </Button>
      <Button v-else-if="token" class="w-full" :disabled="disabled" @click="handleCheckout">
        <ShoppingBag /> Checkout now
      </Button>
      <Button v-if="!token" class="w-full" :disabled="false" @click="handleLogin">
        <LogIn /> Please login to continue
      </Button>
    </div>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .content {
    @apply fixed bottom-0 w-full bg-popover rounded-t-md md:hidden border-t z-30;
  }
  .main-container {
    @apply container w-full h-full mx-auto p-4 space-y-4;
  }
  .product {
    @apply font-normal text-sm text-center w-full py-4 px-0 border border-dashed rounded-md;
  }
  .row {
    @apply flex justify-between items-center;
  }
  .item-image {
    @apply w-2/12 aspect-square rounded;
  }
  .item-title {
    @apply line-clamp-1 font-medium;
  }
  .item-subtitle {
    @apply text-muted-foreground line-clamp-1 font-medium;
  }
  .wraped-acordiont-content {
    @apply flex flex-col text-xs gap-2 font-normal;
  }
  .wraped-acordiont-triggerd {
    @apply flex gap-4 items-center;
  }
</style>
