<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Navbar from './components/navbar/Navbar.vue'
  import Footer from './components/footer/Footer.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
