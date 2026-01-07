<script setup lang="ts">
  import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
</script>

<template>
  <InputGroup class="hidden lg:flex">
    <InputGroupInput class="rounded-full" placeholder="Search..." />
    <InputGroupAddon>
      <Search />
    </InputGroupAddon>
  </InputGroup>
</template>
