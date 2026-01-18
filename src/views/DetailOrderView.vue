<script setup lang="ts">
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
  import { Button } from '@/components/ui/button'
  import { useOrderStore } from '@/stores/order'
  import { useCountdown } from '@vueuse/core'
  import { computed, ref } from 'vue'
  import { toast } from 'vue-sonner'

  // state
  const { orderDetail } = useOrderStore()
  const tickCount = ref(0)
  const { remaining } = useCountdown(60 * 5, {
    interval: 1000,
    immediate: true,
    onComplete() {
      toast.success('selesai')
    },
    onTick() {
      tickCount.value++
      if (tickCount.value % 10 === 0) {
        toast.info(`⏱️ ${tickCount.value} second berlalu`)
      }
    },
  })

  const formattedTime = computed(() => {
    const totalSeconds = remaining.value
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${hours} Hour ${minutes} Minutes ${seconds} Second`
  })
</script>

<template>
  <section class="header">
    <h1 class="header-title">Waiting For Payment</h1>
    <p>Silahkan melakukan pembayaran dengan metode yang kamu pilih</p>
  </section>
  <section class="container">
    <Button variant="destructive" class="time"> {{ formattedTime }}</Button>
    <div class="wraped-content">
      <div class="left-content">
        <div class="left-content-header">
          <div class="bg-popover border rounded-md overflow-hidden w-3/12">
            <div class="w-full aspect-square bg-red-300"></div>
            <div class="font-normal p-2">
              <p class="text-sm text-center line-clamp-1">Magic Chess Go Go</p>
              <p class="text-xs text-center">10 Diamond</p>
            </div>
          </div>
          <div class="text-sm font-medium space-y-2">
            <p>Account Information</p>
            <p>ID : 923234923 (23779)</p>
          </div>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" class="space-y-4">
            <AccordionTrigger class="bg-popover border px-4">Rincian Pembayaran</AccordionTrigger>
            <AccordionContent class="bg-popover border p-4 rounded-md">
              <div class="flex justify-between">
                <span>Harga</span>
                <span>Rp 2.000</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div class="h-40 w-full"></div>
    </div>
  </section>
</template>

<style scoped>
  @import '../assets/main.css';
  .container {
    @apply container mx-auto px-4 space-y-4;
  }
  .header {
    @apply bg-amber-400 h-50 gap-2 flex flex-col items-center justify-center mb-5;
  }
  .header-title {
    @apply font-bold text-3xl;
  }
  .time {
    @apply ring-2 ring-destructive;
  }
  .wraped-content {
    @apply grid grid-cols-2 gap-4;
  }
  .left-content {
    @apply w-full space-y-4;
  }
  .left-content-header {
    @apply border rounded-md bg-popover p-4 flex gap-4;
  }
</style>
