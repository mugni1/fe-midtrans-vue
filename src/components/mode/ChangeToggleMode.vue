<script setup lang="ts">
  import { useColorMode } from '@vueuse/core'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '../ui/dropdown-menu'
  import { Button } from '../ui/button'
  import { Monitor, Moon, Sun } from 'lucide-vue-next'

  const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <Moon v-show="mode == 'dark'" />
        <Sun v-show="mode == 'light'" />
        <Monitor v-show="mode == 'auto'" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'"><Sun /> Light</DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'"><Moon /> Dark</DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'"><Monitor /> System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
