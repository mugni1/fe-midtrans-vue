<script setup lang="ts">
  import { Menu, X } from 'lucide-vue-next'
  import { Button } from '../ui/button'
  import { motion } from 'motion-v'

  const isOpen = defineModel<boolean>()
  const emits = defineEmits<{
    (e: 'changeIsOpen', value: boolean): void
  }>()

  // methods
  const changeIsOpen = () => emits('changeIsOpen', !isOpen.value)
</script>

<template>
  <Button variant="outline" size="icon" @click="changeIsOpen">
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, X: 40 }"
      :animate="{ opacity: !isOpen ? 1 : 0, x: !isOpen ? 0 : 20 }"
      :transition="{ duration: 0.2 }"
    >
      <Menu />
    </motion.div>
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, x: 40 }"
      :animate="{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }"
      :transition="{ duration: 0.2 }"
    >
      <X />
    </motion.div>
  </Button>
</template>
