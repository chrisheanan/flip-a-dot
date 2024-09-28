<script setup lang="ts">
import { ref } from 'vue';
import Dot from './Dot.vue';
import { usePixelStore } from '@/stores/pixels';

const store = usePixelStore();

const isTouchDown = ref<boolean>(false);

function touchDown(): void {
    isTouchDown.value = true;
}

function touchUp(): void {
    isTouchDown.value = false;
}
</script>

<template>
    <div class="landscape:basis-[calc(100dvh-3rem)] portrait:max-h-[100dvw] portrait:grow flex justify-center items-center touch-none"
        @pointerdown="touchDown" @pointerup="touchUp" @pointercancel="touchUp">
        <div
            class="aspect-square landscape:w-[stretch] landscape:max-w-[calc(100dvh-3rem)] portrait:h-[stretch] portrait:max-h-[100dvw]">
            <div
                class="px-1 grid grid-cols-[repeat(28,minmax(0,1fr))] grid-rows-[repeat(28,minmax(0,1fr))] landscape:px-2 landscape:pb-4">
                <template v-for="(row, rowIndex) in store.pixelDots" :key="rowIndex">
                    <Dot v-for="(dot, columnIndex) in row" :key="columnIndex" :isWhite="!!dot"
                        @flip="store.colourIn(rowIndex, columnIndex)"
                        @flip-pointer="isTouchDown ? store.colourIn(rowIndex, columnIndex) : null" />
                </template>
            </div>
        </div>
    </div>
</template>
