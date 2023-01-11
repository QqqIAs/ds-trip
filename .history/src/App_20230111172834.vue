<template>
  <div class="app">
    1. 缓存所有组件
<keep-alive></keep-alive>

2. 缓存name名称为DemoA和DemoB的组件
<keep-alive include="DemoA, DemoB"></keep-alive> 

3. 缓存除了name名称为DemoC以外的其他所有组件 
<keep-alive exclude="DemoC"></keep-alive>
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
 