<script setup lang="ts">
  import { CalendarClockIcon, LogIn, Scale, Search, ShoppingBag } from 'lucide-vue-next'
  import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
  import { Button } from '../ui/button'
  import ChangeToggleMode from '../mode/ChangeToggleMode.vue'
  import BurgerToggle from './BurgerToggle.vue'
  import { ref } from 'vue'
  import NavbarMenuPhone from './NavbarMenuPhone.vue'

  // state
  const isOpen = ref(false)

  // methods
  const handleChangeIsOpen = (value: boolean) => {
    isOpen.value = value
  }
</script>

<template>
  <header class="w-full fixed backdrop-blur-xs bg-card/70 border-b z-50">
    <nav class="container mx-auto">
      <div class="flex justify-between items-center gap-4 py-4 px-4">
        <!-- brand  -->
        <img src="/anu.gif" alt="brand.logo" class="h-10" />

        <!-- show on lg -->
        <InputGroup class="hidden lg:flex">
          <InputGroupInput class="rounded-full" placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <div class="space-x-2 flex items-center overflow-hidden">
          <ChangeToggleMode />
          <BurgerToggle class="lg:hidden" v-model="isOpen" @change-is-open="handleChangeIsOpen" />
        </div>
      </div>

      <!-- show on lg -->
      <div class="hidden lg:flex items-center justify-between w-full px-2">
        <div>
          <Button variant="ghost" class="w-fit"> <ShoppingBag /> Top Up </Button>
          <Button variant="ghost" class="w-fit"> <CalendarClockIcon /> Transaction </Button>
          <Button variant="ghost" class="w-fit"> <Scale /> Calculator </Button>
        </div>
        <div>
          <Button variant="link" class="w-fit"> <LogIn /> Login </Button>
        </div>
      </div>
    </nav>
  </header>

  <NavbarMenuPhone v-model="isOpen" />
</template>
