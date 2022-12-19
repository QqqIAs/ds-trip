<template>
  <div class="home">
    <HomeNavVar></HomeNavVar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">江苏</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeNavVar from './cpns/home-nav-var.vue';
</script>

<style lang="less" scoped>
.banner{
  img {
    width: 100%;
  }
}

.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city{
    flex: 1;
  }
  .position{
    width: 74px;
    display: flex;
    align-items: center;

    .text{
      position:relative;
      top: 1px;
      font-size: 12px;
    }
    img{
      margin-left: 5px;
      height: 18px;
      font-weight: 18px;
    }
  }
}
</style>