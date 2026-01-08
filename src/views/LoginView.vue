<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { data } from '../components/form/data'
  import LoginForm from '@/components/form/LoginForm.vue'
  import { X } from 'lucide-vue-next'
</script>

<template>
  <section class="grid min-h-svh lg:grid-cols-5">
    <!-- form  -->
    <div class="flex flex-col gap-4 p-6 md:p-10 lg:col-span-2">
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>

    <!-- image  -->
    <div class="bg-muted relative hidden lg:block lg:col-span-3">
      <img
        :src="data.right_image_url"
        alt="Image"
        class="absolute inset-0 h-full w-full object-cover object-left dark:brightness-[0.5]"
      />
    </div>
  </section>
</template>
