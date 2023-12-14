<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const receivedData = ref('')
const dataToSend = history.state.dataToSend;

onMounted(() => {
  if (dataToSend) {
    console.log(dataToSend);
    receivedData.value = dataToSend
    // console.log("receivedData", receivedData);
  }
})

const goBack = () => {
  // 이전 페이지로 돌아가기
  router.go(-1) // 또는 router.back()
}
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5> 선수단위개념 상세보기 </h5>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5> 단위개념 상세보기 </h5>
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <h5> 단위개념 TREE </h5>
            </div>
        </div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button  @click="goBack" label="이전" class="mr-2 mb-2"></Button>
        </div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-6 xl:col-8">빈공간</div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button label="홈으로" class="mr-2 mb-2"></Button>
        </div>     
    </div>
</template>

