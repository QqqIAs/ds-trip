<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section data-range" @click="calendarShow = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar 
    v-model:show="calendarShow" 
    type="range" 
    color="#ff9854"
    :round="false"
    @confirm="onConfirm" />
    <!-- 价格人数 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggest">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <div 
        class="item"
        :style="{color: item.tagText.color, background: item.tagText.background.color} "
        >
        {{ item.tagText.text }}
      </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn" @click="searchBtnClick">
      <div class="btn">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ref } from 'vue'; 
import { formatMonthDay,getDIffDays } from "@/utlis/format_date"
import useHomeStore from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main';
import { computed } from '@vue/reactivity';


const router = useRouter()

//位置/城市
const cityClick = () => {
  router.push("/city")
}

//当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

 //日期范围的处理

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value)) 
const stayCount = ref(getDIffDays(startDate.value, endDate.value))

//引入日历
const calendarShow = ref(false)
const onConfirm = (value) => {
  //设置日期
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayCount.value = getDIffDays(selectStartDate, selectEndDate)
  //隐藏日历
  calendarShow.value = false
}

//拿取网络请求的热门城市数据并解构  热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

//开始搜索
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName,
    }
  })
}
</script>

<style lang="less" scoped>

.search-box{
  --van-calendar-popup-height: 100%;
}

.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city{
    flex: 1;
    color: #333333;
    font-size: 15px;
  }
  .position{
    width: 74px;
    display: flex;
    align-items: center;

    .text{
      position:relative;
      top: 1px;
      font-size: 12px;
      color: #666666;
    }
    img{
      margin-left: 5px;
      height: 18px;
      font-weight: 18px;
    }
  }
}

.section{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 13px;
      font-weight: 500;
    }
  }
}

.price-counter {
  .start {
    border-right: 1px solid #f8f9f9;
  }
}

.hot-suggest {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient)
  }
}
</style>