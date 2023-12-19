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
const testAnswers = ref([]);
watch(listboxTest, async (newValue) => {
    try {
        const endpoint = `/tests/${newValue.testId}`;
        const response = await api.get(endpoint);
        testDetail.value = response.map(item => {
            return { ...item, "answerCode": true };
        });
        // testAnswers 채우기
    // 답안 목록 나열 testItemNumber에 따른 itemAnswer 각 숫자에 맞춰서 html 엔터티로 바꾸기 '&#8545' ~ '&#8549'
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
                            <!-- <ToggleButton v-model="rowData.data.answerCode" :style="{ width: '3.3em' }">
                                <template #onLabel>
                                    <i class="pi pi-check-circle" style="opacity: 0; position: absolute;"></i>
                                </template>
                                <template #offLabel>
                                    <i class="pi pi-minus-circle" style="opacity: 0; position: absolute;"></i>
                                </template>      
                            </ToggleButton> -->
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5> 학습지 미리보기 </h5>
                <!--스크롤 기능 추가하기-->
                <div class="grid">
                    <!-- card는 영역을 보기 위해 임시적으로 사용-->
                    <div class="card col-12" style="height: calc(20vw);"> 유저 이름, 학습지 이름, 현재 날짜, (이거는 학원 학습지 틀 참조하기 - 촬영!)</div>
                    <div v-for="(item, index) in testDetail" :key="index" class="card col-6">
                        {{ item }}
                    </div>
                    <div v-for="i in 6 - (testDetail.length%6)" :key="'empty_' + i " class="card col-6">
                        같은 사이즈의 빈 이미지 넣기
                    </div>
                    <div>
                        &#x2461; &#x2462;
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
