<template>
  <div class="favor" ref="favorRef">
    <h2>favor</h2>
    <template v-for="item in 1000">
    <div>{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import use

const favorRef =ref()
</script>

<style lang="less" scoped>

.favor{
  height: 300px;
}
</style>