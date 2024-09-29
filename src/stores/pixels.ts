import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';

export const usePixelStore = defineStore('pixel', () => {
  const colourWhite = ref<boolean>(true);

  const pixelDots = useLocalStorage('pixelDots', ref<number[][]>(generateArray(0)));

  function flip(x: number, y: number): void {
    pixelDots.value[x][y] = pixelDots.value[x][y] ? 0 : 1;
  }

  function colourIn(x: number, y: number): void {
    pixelDots.value[x][y] = colourWhite.value ? 1 : 0;
  }

  function resetBoard(resetWhite: boolean = false): void {
    pixelDots.value = generateArray(resetWhite ? 1 : 0);
  }

  function generateArray(defaultValue: number = 0): number[][] {
    return Array(28)
      .fill(0)
      .map(() => Array(28).fill(defaultValue));
  }

  function changeColour(toWhite = true): void {
    colourWhite.value = toWhite;
  }

  return { colourWhite, pixelDots, flip, colourIn, resetBoard, changeColour };
});
