<script setup lang="ts">
  import { motion } from 'motion-v'
  import { Button } from '../ui/button'
  import { CalendarClockIcon, Scale, ShoppingBag } from 'lucide-vue-next'

  const isOpen = defineModel<boolean>()
</script>

<template>
  <motion.section
    :class="
      isOpen
        ? 'fixed inset-0 z-40 px-4 lg:hidden backdrop-blur-sm transition-all duration-200'
        : 'invisible fixed inset-0 z-40 px-4 lg:hidden transition-all duration-200'
    "
  >
    <motion.div
      class="container mx-auto bg-card border rounded-md mt-24 p-4 space-y-4"
      :initial="{ opacity: 0, y: -100 }"
      :animate="{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }"
      :transition="{ duration: 0.2 }"
    >
      <Button variant="outline" class="w-full"><ShoppingBag /> Top Up</Button>
      <Button variant="outline" class="w-full"><CalendarClockIcon /> Transaction </Button>
      <Button variant="outline" class="w-full"><Scale /> Calculator </Button>
    </motion.div>
  </motion.section>
</template>
