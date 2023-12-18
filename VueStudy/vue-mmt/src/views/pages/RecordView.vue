<script setup>
import { onMounted, ref, watch } from 'vue';
import { useApi } from '../../composables/api.js';

const api = useApi();
const listboxTest = ref(null);
const listboxTests = ref([]);
// 학습지 목록
onMounted(async () => {
  try {
    const endpoint = "tests/user"
    const response = await api.get(endpoint);
    listboxTests.value = response;
  } catch (error) {
    console.error('데이터 생성 중 에러 발생:', err);
  }
});
// 추가) 정오답에 따라 활성화 주고, 기록 이미 한 학습지는 분석결과 보러가기 or 재기록 버튼 (새 userTest로 다시 저장되도록)

// 학습지 미리보기
const testDetail = ref([]);
watch(listboxTest, async (newValue) => {
    try {
        const endpoint = `/tests/${newValue.testId}`;
        const response = await api.get(endpoint);
        testDetail.value = response.map(item => {
            return { ...item, "answerCode": true };
        });
    } catch (err) {
        console.error('데이터 생성 중 에러 발생:', err);
    }    
});
const toggleValue = ref(false);

</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                <h5> 학습지 목록 </h5>
                <Listbox v-model="listboxTest" :options="listboxTests" optionLabel="testName" />
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                <h5>정오답 기록하기</h5>
                <DataTable :value="testDetail" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1">
                    <Column field="testItemNumber" header="번호" style="min-width: 5em"></Column>                    
                    <Column field="itemAnswer" header="정답" style="min-width: 5em"></Column>
                    <Column field="answerCode" header="정오답입력" style="min-width: 5em">
                        <template #body="rowData">
                            <ToggleButton v-model="rowData.data.answerCode" onLabel="o" offLabel="x" :style="{ width: '3.3em' }" />
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card"> 
                <h5> 학습지 미리보기 </h5>
                {{ testDetail }}
                진단에서 만든 뒤 그대로 가져다 쓰기
            </div>
        </div>
    </div>
</template>
