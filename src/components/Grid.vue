<script setup lang="ts">
import { ref } from 'vue';
import Dot from '@/components/Dot.vue';
import { usePixelStore } from '@/stores/pixels';

type DotType = InstanceType<typeof Dot>;

const store = usePixelStore();

const isTouchDown = ref<boolean>(false);

function touchDown(): void {
    isTouchDown.value = true;
}

function touchUp(): void {
    isTouchDown.value = false;
}

function flip(rowIndex: number, columnIndex: number): void {
    store.colourIn(rowIndex, columnIndex);
}

function flipPointer($event: PointerEvent): void {
    const el = document.elementFromPoint($event.clientX, $event.clientY) as HTMLElement;

    if (el && el.dataset.row && el.dataset.column) {
        isTouchDown.value ? store.colourIn(parseInt(el.dataset.row), parseInt(el.dataset.column)) : null;
    }
}
</script>

<template>
    <div
        class="landscape:basis-[calc(100dvh-3rem)] portrait:max-h-[100dvw] portrait:grow flex justify-center items-center touch-none">
        <div
            class="aspect-square landscape:w-[stretch] landscape:max-w-[calc(100dvh-3rem)] portrait:h-[stretch] portrait:max-h-[100dvw]">
            <div
                class="px-1 grid grid-cols-[repeat(28,minmax(0,1fr))] grid-rows-[repeat(28,minmax(0,1fr))] landscape:px-2 landscape:pb-4">
                <template v-for="(row, rowIndex) in store.pixelDots" :key="rowIndex">
                    <Dot v-for="(dot, columnIndex) in row" :key="columnIndex" :isWhite="!!dot" @pointerdown="touchDown"
                        :row="rowIndex" :column="columnIndex" @flip-pointer="flipPointer"
                        @flip="flip(rowIndex, columnIndex)" @pointerup="touchUp" @pointercancel="touchUp" />
                </template>
            </div>
        </div>
    </div>
</template>
