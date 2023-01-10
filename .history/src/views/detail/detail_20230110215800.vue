<template>
  <div class="detail top-page">
      <DetailNavBar></DetailNavBar>
    <div class="main" v-if="mainPart">
      <DetailSwipe
        :swipe-data="mainPart.topModule.housePicture.housePics"
      ></DetailSwipe>
      <DetailInfos :top-infos="mainPart.topModule" />
      <DetailArea
        :house-facility="dynamicModule.facilityModule.houseFacility"
      />
      <DetailLandlord
        :landlord="dynamicModule?.landlordModule"
      ></DetailLandlord>
      <DetailComment :comment="dynamicModule.commentModule"></DetailComment>
      <DetailMap :position="mainPart.dynamicModule.positionModule"></DetailMap>
      <DetailIntro :priceIntro="mainPart.introductionModule"></DetailIntro>
    </div>
    <div class="footer">
      <div class="text">殿珅旅途，永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/service/modules/detail";
import { ref, computed, onMounted} from "vue";
import DetailSwipe from "./cpns/detail_01-swipe.vue";
import DetailInfos from "./cpns/detail_02-infos.vue";
import DetailArea from "./cpns/detail_03-area.vue";
import DetailLandlord from "./cpns/detail_04-landlord.vue";
import DetailComment from "./cpns/detail_05-comment.vue";
import DetailMap from "./cpns/detail_06-map.vue";
import DetailIntro from "./cpns/detail_07-intro.vue";
import DetailNavBar from "@/components/detail-navBar/detail-navBar.vue"

const route = useRoute();

//发送网络请求获取数据
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
const dynamicModule = computed(
  () => detailInfos.value.mainPart.dynamicModule
);
getDetailInfos(route.params.id).then((res) => {
  detailInfos.value = res.data;
});


mounted() {
            // 监听页面滚动事件
            window.addEventListener("scroll", this.showSearch)
        };


</script>

<style lang="less" scoped>
// .detail{
//   // --van-nav-bar-title-text-color: #ff9854;
// }
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
