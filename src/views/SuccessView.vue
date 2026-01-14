<script setup lang="ts">
  import IconCheckFlower from '@/icons/IconCheckFlower.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <main class="w-full min-h-screen bg-gray-200/10">
    <section class="container min-h-screen mx-auto px-5 flex justify-center items-center">
      <div class="h-[80vh] w-full bg-white shadow-md rounded-lg flex flex-col justify-between p-10">
        <div class="w-full flex justify-center flex-col items-center space-y-2">
          <IconCheckFlower class="size-20 text-emerald-500" />
          <h1 class="text-emerald-500 font-extrabold text-4xl">Payment Success</h1>
          <h1 class="text-red-500 font-extrabold text-2xl">Sorry, Belum jadi wey</h1>
        </div>
        <div>
          <button
            @click="router.push('/')"
            class="w-full bg-emerald-500 py-2 rounded-full text-white font-extrabold cursor-pointer"
          >
            Back to home
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
