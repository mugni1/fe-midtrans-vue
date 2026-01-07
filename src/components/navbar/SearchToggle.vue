<script setup lang="ts">
  import { Search, X } from 'lucide-vue-next'
  import { Button } from '../ui/button'
  import { motion } from 'motion-v'

  const isSearch = defineModel<boolean>()
  const emits = defineEmits<{
    (e: 'changeIsSearch', value: boolean): void
  }>()

  // methods
  const changeIsSearch = () => emits('changeIsSearch', !isSearch.value)
</script>

<template>
  <Button variant="outline" size="icon" @click="changeIsSearch">
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: !isSearch ? 1 : 0, y: !isSearch ? 0 : 20 }"
      :transition="{ duration: 0.2 }"
    >
      <Search />
    </motion.div>
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: isSearch ? 1 : 0, y: isSearch ? 0 : -20 }"
      :transition="{ duration: 0.2 }"
    >
      <X />
    </motion.div>
  </Button>
</template>
