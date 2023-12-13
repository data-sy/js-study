<template>
  <div>
    <h1> A 페이지에서 넘어옴</h1>
    <p>받은 데이터: {{ receivedData }}</p>
    <div> <h2> 버튼 클릭 시 이전 페이지 A로 이동 </h2></div>
    <button @click="goBack">이전</button>
  </div>

</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const receivedData = ref('')
const dataToSend = history.state.dataToSend;

onMounted(() => {
  if (dataToSend) {
    console.log(dataToSend);
    // dataToSend 변수에 데이터가 들어있는지 확인하고 사용할 수 있습니다.
    receivedData.value = dataToSend
    // console.log("receivedData", receivedData);
  }
})

const goBack = () => {
  // 이전 페이지로 돌아가기
  router.go(-1) // 또는 router.back()
}

</script>


<!-- <script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const receivedData = ref('')
    const dataToSend = history.state.dataToSend;
    // if (dataToSend) {
    //   // dataToSend 변수에 데이터가 들어있는지 확인하고 사용할 수 있습니다.
    //   console.log("dataToSend:", dataToSend);
    // } else {
    //   console.log("dataToSend에 데이터가 없습니다.");
    // }

    onMounted(() => {
      // Q. 왜 .value 메서드가 안 먹힐까?
      // state에 담겨져서 넘어오면서 더이상 ref객체가 아닌걸까?
      receivedData.value = dataToSend._value
      // console.log("receivedData", receivedData);
    })

    

    const goBack = () => {
      // 이전 페이지로 돌아가기
      router.go(-1) // 또는 router.back()
    }

    return {
      goBack,
      receivedData
    }
  }
}
</script> -->
