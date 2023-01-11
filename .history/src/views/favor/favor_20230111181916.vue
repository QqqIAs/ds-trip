<template>
  <div class="favor" ref="favorRef">
    <template v-for="item in 100">
      <div>{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useScroll from '@/hooks/useScroll';

const favorRef =ref()
useScroll(favorRef)
</script>

<style lang="less" scoped>

.favor{
  height: 300px;
  background-color: orange;
  overflow-y: auto;
}
</style>