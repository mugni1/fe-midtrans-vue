<script setup lang="ts">
  import IconInstan from '@/icons/IconInstan.vue'

  defineProps<{
    id: string
    image_url: string
    title: string
    price: number
  }>()
</script>

<template>
  <div class="main-container">
    <div class="header">
      <span class="title">{{ title }}</span>
      <div class="flex items-center gap-2">
        <img loading="lazy" :src="image_url" alt="logo" class="w-8 md:w-10" />
        <span class="price">Rp {{ price.toLocaleString('id-ID') }}</span>
      </div>
    </div>
    <div class="footer">
      <div class="wraped-icon-instan">
        <IconInstan class="text-background" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../../assets/main.css';

  .main-container {
    @apply bg-muted rounded-md overflow-hidden border cursor-pointer;
  }

  .header {
    @apply w-full p-2 md:p-4;
  }

  .footer {
    @apply w-full bg-popover p-2 md:p-4 flex justify-end;
  }

  .price {
    @apply text-primary font-semibold text-xs md:text-base;
  }

  .title {
    @apply text-xs md:text-sm font-medium;
  }

  .wraped-icon-instan {
    @apply bg-foreground w-fit p-1 rounded;
  }
</style>
