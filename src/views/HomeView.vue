<script setup lang="ts">
import Article from "../components/article/Article.vue";
import Carousel from "../components/carousel/Carousel.vue";

const games = [
  {
    img_url: 'https://cdn1.codashop.com/S/content/mobile/images/product-tiles/MLBB-2025-tiles-178x178.jpg',
    name: 'Mobile Legend Bang Bang',
    studio: 'Moontoon',
  },
  {
    img_url: 'https://cdn1.codashop.com/S/content/mobile/images/product-tiles/pubgm_tile_aug2024.jpg',
    name: 'PUBG Mobile',
    studio: 'Tencent',
  },
  {
    img_url: 'https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ef-launch.png',
    name: 'eFootball',
    studio: 'Konami',
  },
  {
    img_url: 'https://play-lh.googleusercontent.com/1wE91ae_1YIJtIjQ1YJz5RhAajxEpF1TfrXGg7tcrKl90MOnF7XdFj71pw_MSQbyhM5PYz-eRdeBFQBzSGrV=w240-h480-rw',
    name: 'Free Fire',
    studio: 'Garena',
  },
  {
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnCSiq87iXsRNlIv6oqD4ZEoI9YDplR703Q&s',
    name: 'FC Mobile',
    studio: 'EA Sport Games',
  },
]
</script>

<template>
  <!-- CAROUSEL  -->
  <Carousel />

  <!-- GRID GAME -->
  <section class="py-10 mx-auto container px-4">
    <div class="grid grid-cols-3 lg:grid-cols-6 gap-5">
      <div v-for="game in games" :key="game.name" class="card-game">
        <img :src="game.img_url" class="w-full aspect-square object-cover" alt="" />
        <div class="px-3 py-2">
          <b class="text-sm font-medium lg:text-base line-clamp-1">{{ game.name }}</b>
          <p class="text-xs font-normal">{{ game.studio }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ARTICLE  -->
  <Article />
</template>

<style scoped>
@import "../assets/main.css";

.card-game {
  @apply cursor-pointer overflow-hidden shadow-md rounded-md border bg-accent dark:bg-card hover:rotate-2 hover:scale-105 transition-all duration-300;
}
</style>
