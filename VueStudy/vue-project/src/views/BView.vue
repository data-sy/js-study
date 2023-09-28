<template>
  <div>
    <h1> A페이지에서 넘어옴</h1>
    <div> <h2> 버튼 클릭 시 이전 페이지 A로 이동 </h2></div>
    <button @click="goBack">이전</button>
  </div>

</template>
<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goBack = () => {
      // 이전 페이지로 돌아가기
      router.go(-1) // 또는 router.back()
    }

    return {
      goBack
    }
  }
}
</script>
