<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="min-h-svh bg-primary/40 flex justify-center items-center relative overflow-hidden">
    <svg
      width="1024"
      height="244"
      viewBox="0 0 1024 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute right-0 top-0 text-primary"
    >
      <path
        d="M61.5 65C33.1 55.4 8.66667 17.6667 0 0H1024V244C970.833 196.667 847.1 97 777.5 77C690.5 52 97 77 61.5 65Z"
        fill="currentColor"
      ></path>
    </svg>
    <div
      class="flex flex-col lg:flex-row items-center gap-0 lg:gap-10 px-4 absolute inset-0 justify-center z-50 mb-25 lg:mb-0"
    >
      <img
        class="w-40 lg:w-80"
        src="https://www.bangjeff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotfound-image.9054fd48.png&w=828&q=75"
        alt="image"
      />
      <div class="flex flex-col">
        <b>404</b>
        <h3 class="text-xl lg:text-3xl">This page does not exist</h3>
        <b class="text-sm lg:text-base font-normal"> Sorry, we couldn’t find the page you’re looking for. </b>
        <RouterLink to="/">
          <Button variant="default" class="w-fit mt-4 font-medium">Go back home</Button>
        </RouterLink>
      </div>
    </div>
    <svg
      width="1024"
      height="244"
      viewBox="0 0 1024 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-0 left-0 text-primary"
    >
      <path
        d="M962.5 179C990.9 188.6 1015.33 226.333 1024 244H0V0C53.1667 47.3333 176.9 147 246.5 167C333.5 192 927 167 962.5 179Z"
        fill="currentColor"
      ></path>
    </svg>
  </section>
</template>
