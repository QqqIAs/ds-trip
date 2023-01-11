<template>
  <div class="home" ref="homeRef">
    <HomeNavVar></HomeNavVar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBoxVue></homeSearchBoxVue>
    <homeCategories></homeCategories>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar></search-bar>
    </div>
    <homeContent></homeContent>

  </div>
</template>

<script setup>
import HomeNavVar from './cpns/home-nav-var.vue';
import homeSearchBoxVue from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home';
import homeCategories from "./cpns/home-categories.vue"
import searchBar from "@/components/search-bar/search-bar.vue"
import homeContent from "./cpns/home-content.vue"
import useScroll from "@/hooks/useScroll"
import { watch, ref } from 'vue';
import { computed } from 'vue';

//获取pinia数据
const homeStore =useHomeStore()
//发送请求拿取hotcities
homeStore.fetchAllHotCitiesData()
//发送请求拿取推荐类别
homeStore.fetchCategoriesData()
//发送请求拿取首页展示列表
homeStore.fetchHouseListData()


const homeRef =ref()
//加载更多
const { isReturnBottom, scrollTop }  = useScroll(homeRef)
watch(isReturnBottom, (newvalue) => {
  if(newvalue) {
    console.log("213")
    homeStore.fetchHouseListData().then(() => {
      isReturnBottom.value = false
    })
  }
})

//下拉一定距离显示搜索框
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })
//计算属性
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 350
})
</script>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="less" scoped>

.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
  .search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
}
.banner{
  img {
    width: 100%;
  }
}

</style>