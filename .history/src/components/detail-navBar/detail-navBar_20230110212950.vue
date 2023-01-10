<template>
  <div class="detail-navBar">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useScroll from '@/hooks/useScroll';


const router = useRouter()





//监听返回按钮的点击
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>

</style>