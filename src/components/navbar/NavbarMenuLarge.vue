<script setup lang="ts">
  import { LogIn } from 'lucide-vue-next'
  import { Button } from '../ui/button'
  import { data } from './data'
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <nav class="hidden lg:flex items-center justify-between w-full">
    <div class="container flex mx-auto justify-between px-2">
      <div class="flex">
        <Button
          v-for="link in data.links"
          size="sm"
          class="w-fit"
          :variant="$route.path == link.href ? 'link' : 'default_link'"
          @click="router.push(link.href)"
        >
          <component :is="link.icon" /> {{ link.name }}
        </Button>
      </div>
      <div>
        <Button variant="link" size="sm" class="w-fit" @click="router.push('/login')">
          <LogIn /> Login
        </Button>
      </div>
    </div>
  </nav>
</template>
