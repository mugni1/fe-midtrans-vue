<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import { Separator } from '../ui/separator'
  import { Newspaper } from 'lucide-vue-next'

  const modules = [Navigation, Pagination, Scrollbar, A11y]

  const onSwiper = (swiper: any) => {
    console.log('Swiper instance:', swiper)
  }

  const onSlideChange = () => {
    console.log('slide change')
  }
</script>

<template>
  <section class="pt-5 mx-auto container px-4">
    <div class="w-full lg:w-6/12 flex flex-col gap-1">
      <b class="title"> <Newspaper class="size-5" /> NEW ARTICLE & NEWS GAME </b>
      <p class="description">
        Dapatkan informasi terbaru seputar dunia game! Temukan panduan lengkap untuk
        meningkatkan pengalaman bermain, serta berita terkini mengenai promo, update
        top-up, dan komunitas gamer.
      </p>
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="20"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      loop
      :breakpoints="{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.4 },
        1024: { slidesPerView: 3 },
        1420: { slidesPerView: 4 },
      }"
    >
      <SwiperSlide v-for="i in 4" :key="i" class="py-4">
        <div class="card-article group">
          <div
            class="aspect-[12/16] transition-all duration-300 group-hover:scale-105 w-full mask mask-b-from-0% mask-b-to-70% bg-top bg-[url('https://news.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Fnews%2Fgallery%2F4.%20Akun%20Sultan%20FF.jpg&w=1080&q=75')]"
          ></div>
          <div class="card-article-content">
            <p class="card-article-title">
              Cara Mendapatkan Akun FF Sultan Gratis yang Aman (Metode Legal & Giveaway)
            </p>
            <Separator />
            <div class="flex flex-col gap-1 pb-4">
              <p class="text-xs lg:text-sm font-medium text-start">Redaksi</p>
              <p
                class="text-xs lg:text-sm font-normal text-start line-clamp-2 text-primary"
              >
                Cara Mendapatkan Akun FF Sultan Gratis yang Aman (Metode Legal & Giveaway)
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .title {
    @apply text-base font-medium flex gap-2 items-center;
  }

  .description {
    @apply text-xs lg:text-sm text-muted-foreground font-normal line-clamp-2;
  }

  .card-article {
    @apply text-center bg-background rounded-md overflow-hidden shadow-md relative border cursor-pointer;
  }

  .card-article-content {
    @apply space-y-4 absolute z-50 bottom-0 w-full px-4;
  }

  .card-article-title {
    @apply font-medium text-start text-sm lg:text-lg line-clamp-2;
  }
</style>
