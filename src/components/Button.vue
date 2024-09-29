<script setup lang="ts">
interface Props {
  active?: boolean,
}

defineProps<Props>();
</script>

<template>
  <button
    class="text-sm text-center leading-tight size-16 rounded-full transition-transform border-2 border-solid border-black bg-black text-white dark:border-white dark:bg-white dark:text-black p-2 overflow-hidden"
    :class="{ 'border-white dark:border-black scale-110': active }">
    <slot />
  </button>
</template>
