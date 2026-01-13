<script setup lang="ts">
  import { Gamepad2 } from 'lucide-vue-next'
  import { data } from './dumy'
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-5 mx-auto container px-4">
    <span class="title"> <Gamepad2 class="size-6" /> TOP UP GAMES</span>
    <div class="container-game">
      <div v-for="(game, i) in data.games" :key="game.name" class="card-game">
        <RouterLink :to="`/games/${game.name}`">
          <img class="card-game-image" :src="game.img_url" :alt="'image' + i" loading="lazy" />
          <div class="px-2 lg:px-3 py-2">
            <b class="card-game-title">{{ game.name }}</b>
            <p class="card-game-description">{{ game.studio }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .title {
    @apply text-base font-medium flex gap-2 items-center mb-2;
  }

  .container-game {
    @apply grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4;
  }

  .card-game {
    @apply cursor-pointer overflow-hidden shadow-md rounded-md border bg-popover hover:rotate-2 hover:scale-105 hover:ring-2 hover:ring-primary transition-all duration-300;
  }

  .card-game-image {
    @apply w-full aspect-square object-cover;
  }

  .card-game-title {
    @apply text-xs font-medium lg:text-base line-clamp-1;
  }

  .card-game-description {
    @apply text-xs text-muted-foreground font-normal line-clamp-1;
  }
</style>
