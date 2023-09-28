<template>
  <div><h1> 버튼 클릭 시 B 페이지로 이동 </h1></div>
  <button @click="goToNextPage">다음</button>
</template>

<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goToNextPage = () => {
      // // $router는 setup() 함수 내에서 직접 사용할 수 없으므로 inject를 사용하여 주입받습니다.
      // const router = Vue.inject('router')
      router.push({ name: 'b' }) // 다음 페이지
    };

    return{
      goToNextPage
    }
  }
};

</script>
