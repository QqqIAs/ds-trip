<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>

.categories {
  background-color: #f5f5f5;
  overflow-x: auto;
  display: flex;
  height: 60px;
  padding: 0 10px;
  margin-top: 4px;
  //隐藏滚动条(给categories设置一个伪元素)
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>