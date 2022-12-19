<template>
  <div class="home">
    <HomeNavVar></HomeNavVar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBoxVue></homeSearchBoxVue>
  </div>
</template>

<script setup>
import HomeNavVar from './cpns/home-nav-var.vue';
import homeSearchBoxVue from './cpns/home-search-box.vue';
</script>

<style lang="less" scoped>
.banner{
  img {
    width: 100%;
  }
}

</style>