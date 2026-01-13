<script setup lang="ts">
  import type { GetDetailGame } from '@/types/games.type'
  import { CheckCircleIcon, CloudLightningIcon, MessageCircleMore } from 'lucide-vue-next'
  import { Skeleton } from '../ui/skeleton'

  const props = defineProps<{
    isPending: boolean
    data: GetDetailGame | null | undefined
  }>()
</script>

<template>
  <section class="main-content">
    <Skeleton v-if="isPending" class="cover rounded-none" />
    <img v-else loading="lazy" decoding="async" class="cover" alt="cover-image" :src="data?.coverUrl || ''" />
    <section class="main-container">
      <div class="content">
        <Skeleton v-if="isPending" class="profile-container" />
        <div v-else class="profile-container">
          <img class="profile" loading="lazy" decoding="async" alt="image-profile" :src="data?.imageUrl || ''" />
        </div>
        <div class="w-5/12 md:w-3/12 lg:w-2/12"></div>
        <div class="space-y-1 md:space-y-2 md:ps-8">
          <h3 class="title" v-if="!isPending">{{ data?.title || 'Anonym Game' }}</h3>
          <h3 class="title" v-else>Loading..</h3>
          <b class="studio" v-if="!isPending">{{ data?.studio || 'Anonym Studio' }}</b>
          <b class="studio" v-else>Loading..</b>
          <div class="content-large">
            <p class="row"><CloudLightningIcon class="size-4" /> Fast Process</p>
            <p class="row"><CheckCircleIcon class="size-4" /> Secure Payment</p>
            <p class="row"><MessageCircleMore class="size-4" /> Customer Service 24/7</p>
          </div>
        </div>
      </div>
      <div class="content-phone">
        <p class="row"><CloudLightningIcon class="size-4" /> Fast Process</p>
        <p class="row"><CheckCircleIcon class="size-4" /> Secure Payment</p>
        <p class="row"><MessageCircleMore class="size-4" /> CS 24/7</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .main-content {
    @apply w-full items-end pt-18 lg:pt-26 mb-4;
  }

  .cover {
    @apply h-50 md:h-80 lg:h-100 w-full object-cover object-center;
  }

  .content {
    @apply container mx-auto px-4 flex items-center relative py-4;
  }

  .main-container {
    @apply bg-muted dark:bg-popover w-full bottom-0 relative bg-cover bg-center;
  }

  .profile-container {
    @apply border w-4/12 md:w-3/12 lg:w-2/12 aspect-square absolute bottom-4 md:bottom-8 rounded-md overflow-hidden object-cover object-center;
  }

  .profile {
    @apply h-full w-full object-cover object-center;
  }

  .content-phone {
    @apply container mx-auto px-4 flex flex-wrap md:hidden items-center relative gap-4 text-xs font-normal pb-4;
  }

  .content-large {
    @apply hidden md:flex gap-10 py-4 font-normal text-sm;
  }

  .title {
    @apply text-base md:text-2xl font-semibold line-clamp-1;
  }

  .studio {
    @apply text-sm md:text-xl font-medium line-clamp-1;
  }
  .row {
    @apply flex gap-2;
  }
</style>
