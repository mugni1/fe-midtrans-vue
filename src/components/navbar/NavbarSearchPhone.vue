<script setup lang="ts">
  import { motion } from 'motion-v'
  import { Button } from '../ui/button'
  import { Search, SearchSlashIcon } from 'lucide-vue-next'
  import { Separator } from '../ui/separator'
  import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
  import { watch } from 'vue'
  import { useRoute } from 'vue-router'

  // state
  const isSearch = defineModel<boolean>()
  const route = useRoute()

  // watcher
  watch(
    () => route.path,
    () => {
      isSearch.value = false
    }
  )
</script>

<template>
  <motion.section
    @click.self="isSearch = false"
    :class="isSearch ? 'container-open' : 'container-close'"
  >
    <motion.div
      class="container mx-auto bg-popover border rounded-md mt-24 p-4 space-y-4"
      :initial="{ opacity: 0, y: 200 }"
      :animate="{ opacity: isSearch ? 1 : 0, y: isSearch ? 0 : 200 }"
      :transition="{ duration: 0.3 }"
    >
      <InputGroup>
        <InputGroupInput class="rounded-full" placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <Separator />
      <Button variant="ghost" class="w-full text-muted-foreground">
        <SearchSlashIcon /> No Results
      </Button>
    </motion.div>
  </motion.section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .container-open {
    @apply fixed inset-0 z-30 px-4 lg:hidden backdrop-blur-sm transition-all duration-300;
  }

  .container-close {
    @apply invisible fixed inset-0 z-30 px-4 lg:hidden transition-all duration-300;
  }
</style>
