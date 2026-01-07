<script setup lang="ts">
  import { motion } from 'motion-v'
  import { Button } from '../ui/button'
  import { ShoppingBag } from 'lucide-vue-next'

  const isOpen = defineModel<boolean>()
</script>

<template>
  <section
    class="fixed inset-0 w-full z-40 px-4 lg:hidden transition-all duration-200"
    :class="isOpen && 'backdrop-blur-sm'"
  >
    <motion.div
      class="container mx-auto bg-card border rounded-md mt-24 p-4 space-y-4"
      :initial="{ opacity: 0, y: -100 }"
      :animate="{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }"
      :transition="{ duration: 0.2 }"
    >
      <Button variant="outline" class="w-full"><ShoppingBag /> Top Up</Button>
      <Button variant="outline" class="w-full"><ShoppingBag /> Top Up</Button>
      <Button variant="outline" class="w-full"><ShoppingBag /> Top Up</Button>
    </motion.div>
  </section>
</template>
