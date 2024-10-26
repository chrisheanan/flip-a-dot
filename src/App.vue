<script setup lang="ts">
import Button from '@/components/Button.vue';
import Controls from '@/components/Controls.vue';
import Grid from '@/components/Grid.vue';
import Layout from '@/components/Layout.vue';

type ButtonType = InstanceType<typeof Button>;
type ControlsType = InstanceType<typeof Controls>;
type GridType = InstanceType<typeof Grid>;
type LayoutType = InstanceType<typeof Layout>;

import { usePixelStore } from '@/stores/pixels';

const store = usePixelStore();
</script>

<template>
  <header class="h-12 flex items-center justify-center">
    <h1 class="h1 text-xl">Flip a dot</h1>
  </header>

  <Layout>
    <Controls>
      <Button @click="store.changeColour(true)" :active="store.colourWhite">White</Button>
      <Button @click="store.changeColour(false)" :active="!store.colourWhite">Black</Button>
    </Controls>

    <Grid />

    <Controls>
      <Button @click="store.resetBoard(true)">Reset white</Button>
      <Button @click="store.resetBoard(false)">Reset black</Button>
    </Controls>
  </Layout>
</template>

<style scoped>
.h1 {
  background: var(--gradient);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-fill-color: transparent;
}
</style>
