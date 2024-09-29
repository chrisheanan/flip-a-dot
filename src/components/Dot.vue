<script setup lang="ts">
interface Props {
    isWhite: boolean,
};

defineProps<Props>();

defineEmits<{
    flip: [],
    flipPointer: [],
}>();
</script>

<template>
    <button type="button" @pointermove="$emit('flipPointer')" @click="$emit('flip')"
        class="aspect-square rounded-full transition-colors touch-none m-0.5 sm:m-1"
        :class="{ 'bg-white': isWhite, 'bg-black': !isWhite }" :aria-label="isWhite ? 'white' : 'black'">
        <div class="sr-only">{{ isWhite ? 'White' : 'Black' }}</div>
    </button>
</template>
