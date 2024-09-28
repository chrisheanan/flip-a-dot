<script setup>
defineProps({
    isWhite: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['flip', 'flipPointer']);
</script>

<template>
    <button type="button" @pointermove="$emit('flipPointer')" @click="$emit('flip')" aria-label=""
        class="aspect-square rounded-full transition-colors touch-none m-0.5 sm:m-1"
        :class="{ 'bg-white': isWhite, 'bg-black': !isWhite }">
        <div class="sr-only">{{ isWhite ? 'White' : 'Black' }}</div>
    </button>
</template>
