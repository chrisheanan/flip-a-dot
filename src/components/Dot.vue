<script setup lang="ts">
interface Props {
    readonly isWhite: boolean;
    readonly row: number;
    readonly column: number;
}

defineProps<Props>();

defineEmits<{
    flip: [];
    flipPointer: [PointerEvent];
}>();
</script>

<template>
    <button type="button" :data-row="row" :data-column="column" @pointermove="$emit('flipPointer', $event)"
        @click="$emit('flip')"
        class="aspect-square rounded-full transition-colors select-none bg-clip-content p-0.5 sm:p-1"
        :class="{ 'bg-white': isWhite, 'bg-black': !isWhite }" :aria-label="isWhite ? 'white' : 'black'">
        <div class="sr-only">{{ isWhite ? 'White' : 'Black' }}</div>
    </button>
</template>
