<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        show-action
        shape="round"
        v-model="searchValue"
        placeholder="城市/区域/位置"
        @cancel="cancelCancel"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <cityGroup v-show="tabActive === key" :group-data="value"></cityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import cityGroup from "./cpns/city-group.vue";

const router = useRouter();

const searchValue = ref("");
//搜索框功能
const cancelCancel = () => {
  router.back();
};

//tab的切换
const tabActive = ref();

//从store拿取请求的城市数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

// //获取选中标签后的数据
// //1.获取正确的key，将tabs中绑定的tabActive正确绑定到key上，默认是index，即将:name="key" 即可
// //2.根据key从allCities获取数据，默认不是响应式的，需要用计算属性变为响应式
// const currentGroup = computed(() => allCities.value[tabActive.value])


</script>

<style lang="less" scoped>

.top{
  position: relative;
  z-index: 9;
}

.city{

  .content{
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
