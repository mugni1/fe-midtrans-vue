<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { RouterLink } from 'vue-router'
  import IconNotFoundTop from '../icons/IconNotFoundTop.vue'
  import IconNotFoundBottom from '../icons/IconNotFoundBottom.vue'

  const data = {
    image_url:
      'https://www.bangjeff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotfound-image.9054fd48.png&w=828&q=75',
  }
</script>

<template>
  <section class="min-h-svh bg-primary/40 flex justify-center items-center relative overflow-hidden">
    <IconNotFoundTop />
    <div class="content">
      <img class="w-40 lg:w-80" :src="data.image_url" alt="image" />
      <div class="flex flex-col">
        <b>404</b>
        <h3 class="text-xl lg:text-3xl">This page does not exist</h3>
        <b class="text-sm lg:text-base font-normal"> Sorry, we couldn’t find the page you’re looking for. </b>
        <RouterLink to="/">
          <Button variant="default" class="w-fit mt-4 font-medium">Go back home</Button>
        </RouterLink>
      </div>
    </div>
    <IconNotFoundBottom />
  </section>
</template>

<style scoped>
  @import '../assets/main.css';

  .content {
    @apply flex flex-col lg:flex-row items-center gap-0 lg:gap-10 px-4 absolute inset-0 justify-center z-50 mb-25 lg:mb-0;
  }
</style>
