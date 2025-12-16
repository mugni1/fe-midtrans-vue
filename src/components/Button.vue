<script setup lang="ts">
const emits = defineEmits<{
  (e: 'onClick'): void
}>()
const handleClick = () => {
  emits('onClick')
}
</script>

<template>
  <button @click="handleClick" class="bg-black w-full py-2 text-center text-white rounded-md font-bold cursor-pointer">
    <slot></slot>
  </button>
</template>
