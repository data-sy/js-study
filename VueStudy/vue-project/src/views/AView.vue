<template>
  <div><h1> 버튼 클릭 시 B 페이지로 이동 </h1></div>
  <button @click="goToNextPage">다음</button>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    // // 일반 객체로는 잘 넘어가
    // const data = {
    //   studentId: 3
    // }
    const data = ref(null);
    // 뭔가 상황에 의해 값이 담기겠지?!
    const studentId = 3
    data.value = studentId;
    // 추가해볼 것 : json 객체 보내는 것. 그냥 ref로는 안 갔어서 reactive 사용해보려고
    // 그냥 ref에 이렇게 보냈더니 에러남
    // const requestData = {
    //   studentId : 3
    // }
    // data.value = requestData;
 
    const router = useRouter()

    const goToNextPage = () => {
      router.push({
        name: 'b',
        state: {dataToSend: data},
      })
    };

    return{
      goToNextPage,
      data,
      // requestData,
    }
  }
};

</script>
