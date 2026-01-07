<script setup lang="ts">
  import { motion } from 'motion-v'
  import { Button } from '../ui/button'
  import { LogIn } from 'lucide-vue-next'
  import { Separator } from '../ui/separator'
  import { data } from './data'
  import { useRouter } from 'vue-router'

  const isOpen = defineModel<boolean>()
  const router = useRouter()
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
      class="container mx-auto bg-popover border rounded-md mt-24 p-4 space-y-4"
      :initial="{ opacity: 0, y: -100 }"
      :animate="{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }"
      :transition="{ duration: 0.2 }"
    >
      <Button
        v-for="link in data.links"
        class="w-full"
        :variant="$route.path == link.href ? 'link' : 'default_link'"
        @click="router.push(link.href)"
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
