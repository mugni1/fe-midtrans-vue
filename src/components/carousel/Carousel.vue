<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Separator } from '../ui/separator'
import { ChevronLeft, Newspaper, ChevronRight } from 'lucide-vue-next'

const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay]
const navigation = {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
}

const images = [
    {
        url: 'https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Fbanner%2Fweb-banner-m7passgranger-jan.webp&w=1920&q=100'
    },
    {
        url: 'https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Fbanner%2Fbanner-new-year.webp&w=1920&q=100'
    },
    {
        url: 'https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Fbanner%2Fweb-banner-annualstarlight-mlbb.webp&w=1920&q=100'
    },
    {
        url: 'https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Fbanner%2Fxavier-bannner.webp&w=1920&q=100'
    },
]

const onSwiper = (swiper: any) => {
    console.log('Swiper instance:', swiper)
}

const onSlideChange = () => {
    console.log('slide change')
}

</script>

<template>
    <section class="pt-24 pb-10 lg:pt-35 mx-auto container px-4">
        <Swiper :navigation="navigation" :mousewheel="true" :keyboard="true" :modules="modules" :space-between="0"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false
            }" @swiper="onSwiper" @slideChange="onSlideChange" loop
            class="rounded-md overflow-hidden shadow-md border">

            <!-- SLIDE  -->
            <SwiperSlide v-for="(image, index) in images" :key="image">
                <img class="w-full aspect-video lg:aspect-[9/3.4] object-cover object-center" :src="image.url"
                    :alt="'image' + index">
            </SwiperSlide>

            <!-- CHEVRON PREV -->
            <button class="swiper-button-prev-custom ">
                <ChevronLeft />
            </button>
            <!-- CHEVRON NEXT -->
            <button class="swiper-button-next-custom ">
                <ChevronRight />
            </button>
        </Swiper>
    </section>
</template>

<style scoped>
@import "../../assets/main.css";

.title {
    @apply text-base font-medium flex gap-2 items-center;
}

.description {
    @apply text-xs lg:text-sm font-normal line-clamp-2;
}

.swiper-button-next-custom {
    @apply absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full transition;
}

.swiper-button-prev-custom {
    @apply absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full transition;
}
</style>