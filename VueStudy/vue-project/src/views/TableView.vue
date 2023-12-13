<template>
  <div>
    <h1>학습지 목록 화면</h1>
    <!-- <div>{{ testsData }}</div> -->
    <div v-if="error" style="color: red">{{ error.message }}</div>
  </div>
  <div>
    <table>
            <thead>
                <tr>
                    <th> 유저 학습지 id </th>
                    <th> 학습지 id </th>                    
                    <th> 학습지 이름 </th>
                    <th> 기록여부 </th>
                  </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(test, i) in testsData" @click="selectTests(test.userTestId)">
                    <td>{{ test.userTestId }}</td>  
                    <td>{{ test.testId }}</td>
                    <td>{{ test.testName }}</td>
                    <td>{{ test.record }}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../composables/api.js';

const api = useApi();
const testsData = ref([]);
const error = ref(null);
const selectedTestId = ref(null);

// 유저의 학습지 데이터 불러오기
const tests = async () => {
  const userId = 3;
  try {
    const response = await api.get(`/tests/user/${userId}`);
    testsData.value = response;
    error.value = null;
  } catch (err) {
    console.error('데이터를 불러오는 중 에러 발생:', err);
    error.value = err;
  }
};

// 페이지 로드 시 데이터 불러오기
onMounted(() => {
  tests();
});

const selectTests = (testId) => {
  selectedTestId.value = testId;
  console.log(selectedTestId.value);
};

</script>
