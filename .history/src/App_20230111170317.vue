<template>
  <div class="app">
      <RouterView v-slot="props">
        <keep-alive includes="home">
          <component :is="props.Component"></compomemt>
        </keep-alive>
      </RouterView>
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <loading></loading>
  </div>
</template>

<script setup>
import tabBar from "./components/tab-bar/tab-bar.vue"
import Loading from "@/components/loading/loading.vue"
import { useRoute } from "vue-router";

const route = useRoute()
  
</script>

<style scoped>

</style>
 