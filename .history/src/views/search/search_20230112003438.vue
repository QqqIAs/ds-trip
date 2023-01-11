<template>
  <div class="search">
    <van-nav-bar
      title="search页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <h2>正在开发中···</h2>
  </div>
</template>

<script setup>
import router from '@/router';

const onClickLeft = () => {
  router.back()
}

</script>

<style lang="less" scoped>

</style>