<script setup lang="ts">
  import { Separator } from '../ui/separator'
  import Wafe from './wafe.vue'
</script>

<template>
  <Wafe class="text-muted" />
  <footer class="w-full bg-muted">
    <section class="container mx-auto px-4 space-y-4 mb-12">
      <div>
        <img
          src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F85ee9e2e-cbda-4e15-955e-1696e2ff9f27.png&w=640&q=100"
          alt=""
          class="w-4/12 lg:w-1/12"
        />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-8">
        <div class="space-y-4 col-span-2 lg:col-span-3">
          <p class="font-normal text-sm">
            No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24
            Jam dengan channel pembayaran terlengkap Indonesia.
          </p>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Partnership</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>Reseller</li>
            <li>Web Creation</li>
            <li>Affiliate</li>
            <li>Career</li>
          </ul>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Site Map</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>Contac Us</li>
            <li>Reviews</li>
            <li>Terms & Conditions</li>
            <li>Privacy Police</li>
          </ul>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Support</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>Telegram</li>
            <li>Line</li>
          </ul>
        </div>
      </div>
    </section>
    <Separator class="bg-muted-foreground" />
    <section class="container mx-auto px-4 font-normal py-6">
      <p class="text-muted-foreground text-sm text-center md:text-start">
        &copy; {{ new Date().getFullYear() }} BANGJEFF. All right reserved.
      </p>
    </section>
  </footer>
</template>
