<script setup lang="ts">
  import { Separator } from '../ui/separator'
  import Wafe from './Wafe.vue'
  import { data } from './data'
</script>

<template>
  <Wafe class="text-muted" />
  <footer class="w-full bg-muted">
    <section class="container mx-auto px-4 space-y-4 mb-12">
      <div>
        <img
          src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F85ee9e2e-cbda-4e15-955e-1696e2ff9f27.png&w=640&q=100"
          alt="brand"
          class="w-4/12 lg:w-1/12"
        />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-8">
        <div class="space-y-8 col-span-2 lg:col-span-3">
          <p class="font-normal text-sm">{{ data.description }}</p>
          <div class="flex gap-8">
            <a v-if="data.facebook_url" :href="data.facebook_url" target="_blank">
              <img
                class="size-6"
                src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Ff6a1857c-6ced-41ab-99fb-2340b2dbe09c.webp&w=32&q=75"
                alt=""
              />
            </a>
            <a v-if="data.email_url" :href="data.email_url" target="_blank">
              <img
                class="size-6"
                src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F8f4f6f16-4763-4733-a595-c37c9aae94f1.webp&w=32&q=75"
                alt=""
              />
            </a>
            <a v-if="data.instagram_url" :href="data.instagram_url" target="_blank">
              <img
                class="size-6"
                src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F509573ad-c36d-467e-884a-72a984a95330.webp&w=32&q=75"
                alt=""
              />
            </a>
            <a v-if="data.telegram_url" :href="data.telegram_url" target="_blank">
              <img
                class="size-6"
                src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Ff233c760-d50d-40f6-a425-800559888c18.webp&w=32&q=75"
                alt=""
              />
            </a>
          </div>
          <div class="space-y-1">
            <p class="text-sm font-normal">
              Download {{ data.brand_name }} Mobile App on:
            </p>
            <div class="flex gap-2">
              <a v-if="data.play_store_url" :href="data.play_store_url" target="_blank">
                <img
                  class="h-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="play_store"
                />
              </a>
              <a v-if="data.app_store" :href="data.app_store" target="_blank">
                <img
                  class="h-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="app_store"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Partnership</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>
              <a
                v-if="data.partnership.reseller"
                :href="data.partnership.reseller"
                target="_blank"
                >Reseller</a
              >
            </li>
            <li>
              <a
                v-if="data.partnership.web_creation"
                :href="data.partnership.web_creation"
                target="_blank"
                >Web Creation</a
              >
            </li>
            <li>
              <a
                v-if="data.partnership.affiliate"
                :href="data.partnership.affiliate"
                target="_blank"
                >Affiliate</a
              >
            </li>
            <li>
              <a
                v-if="data.partnership.career"
                :href="data.partnership.career"
                target="_blank"
                >Career</a
              >
            </li>
          </ul>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Site Map</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>
              <a
                v-if="data.site_map.contac_us"
                :href="data.site_map.contac_us"
                target="_blank"
                >Contac Us</a
              >
            </li>
            <li>
              <a
                v-if="data.site_map.reviews"
                :href="data.site_map.reviews"
                target="_blank"
                >Reviews</a
              >
            </li>
            <li>
              <a v-if="data.site_map.tnc" :href="data.site_map.tnc" target="_blank"
                >Terms & Conditions</a
              >
            </li>
            <li>
              <a v-if="data.site_map.pp" :href="data.site_map.pp" target="_blank"
                >Privacy Police</a
              >
            </li>
          </ul>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Support</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>
              <a
                v-if="data.support.telegram"
                :href="data.support.telegram"
                target="_blank"
              >
                Telegram
              </a>
            </li>
            <li>
              <a v-if="data.support.line" :href="data.support.line" target="_blank">
                Line
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Separator class="bg-muted-foreground" />
    <section class="container mx-auto px-4 font-normal py-6">
      <p class="text-muted-foreground text-sm text-center md:text-start">
        &copy; {{ new Date().getFullYear() }} {{ data.brand_name }}. All right reserved.
      </p>
    </section>
  </footer>
</template>
