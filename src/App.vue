<script setup lang="ts">
  import { RouterView, useRoute } from 'vue-router'
  import { computed } from 'vue'
  import Navbar from './components/navbar/Navbar.vue'
  import Footer from './components/footer/Footer.vue'
  import { Toaster } from './components/ui/sonner'

  // state
  const route = useRoute()
  const showLayout = computed(() => {
    const hiddenRoutes = ['login', 'not_found']
    return !hiddenRoutes.includes(String(route.name))
  })
</script>

<template>
  <Navbar v-if="showLayout" />
  <RouterView />
  <Footer v-if="showLayout" />
  <Toaster position="bottom-right" :toast-options="{ class: 'font-sans' }" />
</template>
