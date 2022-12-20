<template>
  <div class="home">
    <HomeNavVar></HomeNavVar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBoxVue></homeSearchBoxVue>
    <homeCategories></homeCategories>
    <homeContent></homeContent>

  </div>
</template>

<script setup>
import HomeNavVar from './cpns/home-nav-var.vue';
import homeSearchBoxVue from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home';
import homeCategories from "./cpns/home-categories.vue"
import homeContent from "./cpns/home-content.vue"

//发送请求拿取hotcities
const homeStore =useHomeStore()
homeStore.fetchAllHotCitiesData()

//发送请求拿取推荐类别
homeStore.fetchCategoriesData()

</script>

<style lang="less" scoped>
.banner{
  img {
    width: 100%;
  }
}

</style>