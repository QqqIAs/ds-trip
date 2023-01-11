<template>
  <div class="message">
    <van-nav-bar
      title="消息中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <img src="@/assets/img/message/icon_message.png" alt="">
      <div class="text">暂无聊天消息</div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';

const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.message{
  --van-nav-bar-title-text-color: #ff9854;
}

.content{
  display: flex;
  flex-direction: column;
  
}

</style>