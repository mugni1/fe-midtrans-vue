<script setup lang="ts">
  import { motion } from 'motion-v'
  import { Button } from '../ui/button'
  import { LogIn } from 'lucide-vue-next'
  import { Separator } from '../ui/separator'
  import { data } from './data'
  import { useRoute, useRouter } from 'vue-router'
  import { watch } from 'vue'

  // state
  const router = useRouter()
  const route = useRoute()
  const isOpen = defineModel<boolean>()

  // methods
  const redirectTo = (value: string) => {
    isOpen.value = false
    router.push(value)
  }

  // watcher
  watch(
    () => route.path,
    () => {
      isOpen.value = false
    }
  )
</script>

<template>
  <motion.section
    @click.self="isOpen = false"
    :class="isOpen ? 'container-open' : 'container-close'"
  >
    <motion.div
      class="container mx-auto bg-popover border rounded-md mt-24 p-4 space-y-4"
      :initial="{ opacity: 0, y: 200 }"
      :animate="{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 200 }"
      :transition="{ duration: 0.3 }"
    >
      <Button
        v-for="link in data.links"
        class="w-full"
        :variant="$route.path == link.href ? 'link' : 'default_link'"
        @click="redirectTo(link.href)"
      >
        <component :is="link.icon" /> {{ link.name }}
      </Button>
      <Separator />
      <Button variant="primary_outline" class="w-full" @click="router.push('/login')">
        <LogIn /> Login
      </Button>
    </motion.div>
  </motion.section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .container-open {
    @apply fixed inset-0 z-40 px-4 lg:hidden backdrop-blur-sm transition-all duration-300;
  }

  .container-close {
    @apply invisible fixed inset-0 z-40 px-4 lg:hidden transition-all duration-300;
  }
</style>
