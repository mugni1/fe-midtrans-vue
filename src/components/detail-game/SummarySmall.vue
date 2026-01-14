<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { LogIn, ShoppingBag } from 'lucide-vue-next'
  import { useRoute, useRouter } from 'vue-router'

  // state
  defineProps<{
    token: string | undefined
  }>()
  const route = useRoute()
  const router = useRouter()

  // methods
  const handleLogin = () => {
    const path = btoa(route.path)
    router.push(`/login?redirect=${path}`)
  }
</script>

<template>
  <section class="content">
    <div class="main-container">
      <div class="not-have-product">
        <span>No product items have been selected yet.</span>
      </div>
      <Button v-if="token" class="w-full"> <ShoppingBag /> Checkout now </Button>
      <Button v-if="!token" @click="handleLogin" class="w-full"> <LogIn /> Please login to continue </Button>
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
  .not-have-product {
    @apply font-normal text-xs flex justify-center items-center w-full p-4 border border-dashed rounded-md;
  }
</style>
