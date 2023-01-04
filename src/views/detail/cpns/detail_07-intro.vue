<template>
  <div class="intro">
    <h2 class="title">{{ priceIntro.title }}</h2>
    <div class="comment">
      {{ priceIntro.introduction }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  priceIntro: {
    type: Object,
    default: () => ({})
   } 
})

</script>

<style lang="less" scoped>
.intro{
  padding: 16px 12px;
  .title{
    font-size: 14px;
    font-weight: 700;
    padding-bottom: 6px;
    color: #000;
  }

  .comment{
    font-size: 12px;
    line-height: 18px;
  }
}
</style>