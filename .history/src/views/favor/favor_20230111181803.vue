<template>
  <div class="favor" ref="favorRef">
    <template v-for="item in 100">
      <div>{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useScroll from '@/hooks/useScroll';

const favorRef =ref()
const { isReturnBottom, scrollTop }  = useScroll(favorRef)
watch(isReturnBottom, (newvalue) => {
  if(newvalue) {
    console.log("到达底部")
    }}
  )
</script>

<style lang="less" scoped>

.favor{
  height: 300px;
  background-color: ;
}
</style>