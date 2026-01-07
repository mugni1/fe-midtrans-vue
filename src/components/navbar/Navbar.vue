<script setup lang="ts">
  import ChangeToggleMode from '../mode/ChangeToggleMode.vue'
  import ToggleBurger from './ToggleBurger.vue'
  import { ref, watch } from 'vue'
  import NavbarMenuPhone from './NavbarMenuPhone.vue'
  import ToggleSearch from './ToggleSearch.vue'
  import NavbarSearchPhone from './NavbarSearchPhone.vue'
  import { Separator } from '../ui/separator'
  import { data } from './data'
  import NavbarSearchLarge from './NavbarSearchLarge.vue'
  import NavbarMenuLarge from './NavbarMenuLarge.vue'

  // state
  const isOpen = ref(false)
  const isSearch = ref(false)
  const isOpenMode = ref(false)

  // methods
  const handleChangeIsOpen = (value: boolean) => {
    if (value) {
      isSearch.value = false
      isOpenMode.value = false
    }
    isOpen.value = value
  }
  const handleChangeIsSearch = (value: boolean) => {
    if (value) {
      isOpen.value = false
      isOpenMode.value = false
    }
    isSearch.value = value
  }
  const handleChangeIsOpenMode = (value: boolean) => {
    console.log(value)
    if (value) {
      isSearch.value = false
      isOpen.value = false
    }
    isOpenMode.value = value
  }
</script>

<template>
  <header class="w-full fixed backdrop-blur-sm bg-popover/70 border-b z-50">
    <nav class="container mx-auto">
      <div class="flex justify-between items-center gap-4 py-4 px-4">
        <img :src="data.brand_image_url" alt="brand" class="h-10" />
        <NavbarSearchLarge />
        <div class="space-x-2 relative flex items-center overflow-hidden">
          <ChangeToggleMode
            v-model="isOpenMode"
            @change-is-open-mode="handleChangeIsOpenMode"
          />
          <ToggleSearch
            class="lg:hidden"
            v-model="isSearch"
            @change-is-search="handleChangeIsSearch"
          />
          <ToggleBurger
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
