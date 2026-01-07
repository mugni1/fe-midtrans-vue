<script setup lang="ts">
  import { CalendarClockIcon, LogIn, Scale, ShoppingBag } from 'lucide-vue-next'
  import { Button } from '../ui/button'
  import ChangeToggleMode from '../mode/ChangeToggleMode.vue'
  import BurgerToggle from './BurgerToggle.vue'
  import { ref } from 'vue'
  import NavbarMenuPhone from './NavbarMenuPhone.vue'
  import SearchToggle from './SearchToggle.vue'
  import NavbarSearchPhone from './NavbarSearchPhone.vue'
  import { Separator } from '../ui/separator'
  import { data } from './data'
  import NavbarSearchLarge from './NavbarSearchLarge.vue'
  import NavbarMenuLarge from './NavbarMenuLarge.vue'

  // state
  const isOpen = ref(false)
  const isSearch = ref(false)

  // methods
  const handleChangeIsOpen = (value: boolean) => {
    if (value) {
      isSearch.value = false
    }
    isOpen.value = value
  }
  const handleChangeIsSearch = (value: boolean) => {
    if (value) {
      isOpen.value = false
    }
    isSearch.value = value
  }
</script>

<template>
  <header class="w-full fixed backdrop-blur-sm bg-popover/70 border-b z-50">
    <nav class="container mx-auto">
      <div class="flex justify-between items-center gap-4 py-4 px-4">
        <img :src="data.brand_image_url" alt="brand" class="h-10" />
        <NavbarSearchLarge />
        <div class="space-x-2 relative flex items-center overflow-hidden">
          <ChangeToggleMode />
          <SearchToggle
            class="lg:hidden"
            v-model="isSearch"
            @change-is-search="handleChangeIsSearch"
          />
          <BurgerToggle
            class="lg:hidden"
            v-model="isOpen"
            @change-is-open="handleChangeIsOpen"
          />
        </div>
      </div>
    </nav>
    <Separator class="hidden lg:block" />
    <NavbarMenuLarge />
  </header>

  <NavbarMenuPhone v-model="isOpen" />
  <NavbarSearchPhone v-model="isSearch" />
</template>
