<template>
  <div class="favor">
    <h2>favor</h2>
    <template v-for="item in 30">
    <div>{{ item }}</div>
    </template>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.favor{
  height: 300px;
}
</style>