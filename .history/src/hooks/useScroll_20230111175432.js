import { onMounted, onUnmounted, ref } from "vue"
//节流
import { throttle } from "underscore"

export default function useScroll(elRef) {
  let el = window
  const isReturnBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReturnBottom.value = true
    }
  }, 100)

    onMounted(() => {
      window.addEventListener("scroll", scrollListenerHandler)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollListenerHandler)
    })

    return {isReturnBottom, scrollTop, scrollHeight, clientHeight}
  }
