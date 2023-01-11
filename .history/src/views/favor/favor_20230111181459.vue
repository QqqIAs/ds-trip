<template>
  <div class="favor" ref="favorRef">
    <h2>favor</h2>
    <template v-for="item in 1000">
    <div>{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useScroll from '@/hooks/useScroll';

const favorRef =ref()
const { isReturnBottom, scrollTop }  = useScroll(favorRef)
watch(isReturnBottom, (newvalue) => {
  if(newvalue) {
    console.log("到达底部")
    })
  )
</script>

<style lang="less" scoped>

.favor{
  height: 300px;
}
</style>