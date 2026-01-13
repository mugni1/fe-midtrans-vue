<script setup lang="ts">
  import { Gamepad2 } from 'lucide-vue-next'
  import { RouterLink } from 'vue-router'
  import { useGetGames } from '@/hooks/useGetGames'
  import { computed, ref, watch, type Ref } from 'vue'
  import type { GetParamsType } from '@/types/global.type'
  import type { GetGameType } from '@/types/games.type'
  import { Button } from '../ui/button'
  import { useWindowSize } from '@/libs/window-size'
  import { Skeleton } from '../ui/skeleton'

  const { width } = useWindowSize()
  const games = ref<GetGameType[]>([])
  const page = ref<number>(1)
  const limit = ref<number>(7)
  const isMobile = computed(() => width.value > 0 && width.value < 768)
  const isPad = computed(() => width.value >= 768 && width.value < 1024)
  const params: Ref<GetParamsType> = computed(() => ({
    limit: limit.value,
    page: page.value,
    orderBy: 'createdAt',
    sortBy: 'desc',
    search: '',
  }))
  const { isPending, data } = useGetGames(params)

  // methods
  const nextGames = () => {
    page.value++
  }

  // watcher
  watch(data, (newValue) => {
    if (page.value === 1) {
      games.value = newValue?.data || []
    } else {
      games.value = [...games.value, ...(newValue?.data || [])]
    }
  })
  watch(
    width,
    () => {
      page.value = 1
      games.value = []
      if (isMobile.value) {
        limit.value = 6
      } else if (isPad.value) {
        limit.value = 10
      } else {
        limit.value = 14
      }
    },
    { immediate: true }
  )
</script>

<template>
  <section class="py-5 mx-auto container px-4">
    <span class="title"> <Gamepad2 class="size-6" /> TOP UP GAMES</span>

    <!-- games -->
    <div class="container-game mb-4" v-if="games.length > 1">
      <div v-for="(game, i) in games" :key="game.id" class="card-game">
        <RouterLink :to="`/games/${game.id}`">
          <img
            class="card-game-image"
            :src="game.imageUrl"
            :alt="'image' + i"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
          <div class="px-2 lg:px-3 py-2">
            <b class="card-game-title">{{ game.title }}</b>
            <p class="card-game-description">{{ game.studio }}</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- skeleton  -->
    <div class="container-game" v-if="isPending">
      <div v-for="value in limit">
        <Skeleton class="aspect-10/13" />
      </div>
    </div>

    <!-- button show -->
    <div
      class="w-full flex items-center justify-center"
      v-if="!isPending && games.length != data?.meta?.total"
    >
      <Button size="sm" variant="outline" @click="nextGames"> Show more...</Button>
    </div>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .title {
    @apply text-base font-semibold flex gap-2 items-center mb-3 text-primary;
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
