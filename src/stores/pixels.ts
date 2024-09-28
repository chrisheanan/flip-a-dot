import { defineStore } from 'pinia';
import { ref } from 'vue';
// import { toRaw } from 'vue';
import { useLocalStorage } from '@vueuse/core';

export const usePixelStore = defineStore('pixel', () => {
  const colourWhite = ref<boolean>(true);

  const pixelDots = useLocalStorage('pixelDots', ref<number[][]>([]));

  resetBoard(false);

  function flip(x: number, y: number): void {
    pixelDots.value[x][y] = pixelDots.value[x][y] ? 0 : 1;
  }

  function colourIn(x: number, y: number): void {
    pixelDots.value[x][y] = colourWhite.value ? 1 : 0;
  }

  function resetBoard(resetWhite: boolean = false): void {
    pixelDots.value = Array(28)
      .fill(0)
      .map(() => Array(28).fill(resetWhite ? 1 : 0));
  }

  function changeColour(toWhite = true): void {
    colourWhite.value = toWhite;
  }

  return { colourWhite, pixelDots, flip, colourIn, resetBoard, changeColour };
});