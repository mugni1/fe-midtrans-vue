<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import { Separator } from '../ui/separator'
  import { Newspaper } from 'lucide-vue-next'
  import { data } from './dumy.ts'

  const modules = [Navigation, Pagination, Scrollbar, A11y]
</script>

<template>
  <section class="container-articles">
    <div class="w-full lg:w-6/12 flex flex-col gap-1">
      <b class="title"> <Newspaper class="size-5" /> {{ data.title }} </b>
      <p class="description">{{ data.description }}</p>
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="20"
      :breakpoints="{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.4 },
        1024: { slidesPerView: 3 },
        1420: { slidesPerView: 4 },
      }"
      loop
    >
      <SwiperSlide v-for="(article, i) in data.articles" :key="i" class="py-4">
        <div class="card-article group">
          <div
            class="aspect-12/18 transition-all duration-300 group-hover:scale-105 w-full mask mask-b-from-0% mask-b-to-70% bg-top"
            :style="{ backgroundImage: `url(${article.img_url})` }"
          ></div>
          <div class="card-article-content">
            <p class="card-article-title">{{ article.title }}</p>
            <Separator />
            <div class="flex flex-col gap-1 pb-4">
              <p class="card-article-description text-foreground font-medium">Redaksi</p>
              <p class="card-article-description text-muted-foreground">
                {{ article.title }}
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

  .container-articles {
    @apply pt-5 mx-auto container px-4;
  }

  .title {
    @apply text-base font-semibold flex gap-2 items-center text-primary;
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

  .card-article-description {
    @apply text-xs lg:text-sm font-normal text-start line-clamp-2;
  }
</style>
