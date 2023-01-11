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
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      console.log(scrollTop.value)
      scrollHeight.value = el.scrollHeight
      console.log(scrollHeight.value)

    }
    if (clientHeight.value + scrollTop.value + 1 >= scrollHeight.value) {
      isReturnBottom.value = true
    }
  }, 100)

    onMounted(() => {
      if(elRef) {
        el = elRef.value
      }
      el.addEventListener("scroll", scrollListenerHandler)
    })

    onUnmounted(() => {
      el.removeEventListener("scroll", scrollListenerHandler)
    })

    return {isReturnBottom, scrollTop, scrollHeight, clientHeight}
  }
