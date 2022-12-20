<template>
  <div class="app">
    <RouterView></RouterView>
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup>
  import tabBar from "./components/tab-bar/tab-bar.vue"
  import { useRoute } from "vue-router";

  const route = useRoute()
  
</script>

<style scoped>

</style>
 