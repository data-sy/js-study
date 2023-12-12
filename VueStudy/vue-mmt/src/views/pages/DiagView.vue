<script setup>
// 링크 전 화면에서 데이터 가져오는 것 해보기

import { ref, watch } from 'vue';

const selectButtonLevel = ref(null);
const selectButtonLevels = ref([{ name: '초등' }, { name: '중등' }, { name: '고등' }]);
const listboxLevel = ref(null);
const listboxLevels = ref([]);
const listboxTest = ref(null);
const listboxTests = ref([]);

</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                <h5> School Level </h5>
                <SelectButton v-model="selectButtonLevel" :options="selectButtonLevels" optionLabel="name" />
            </div>
            <div class="card">
                <h5> Grade Level </h5>
                <Listbox v-model="listboxLevel" :options="listboxLevels" optionLabel="name" />
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card"> 
                <h5> 학습지 목록 </h5>
                <Listbox v-model="listboxTest" :options="listboxTests" optionLabel="name" :filter="true"/>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card"> 
                <h5> 학습지 미리보기 </h5>
                해당 카드의 절반 사이즈의 div 만들고
                A4비율에 맞춰서 문항 6개 표현하기
                여기는 이미지 가져와서 가로 두 칸에 나눠 넣기
                순서는 item_number 대로
                페이지 넘겨서 답안 목록
                <h5>Image</h5>
                <div class="flex justify-content-center">
                    <Image :src="'demo/images/galleria/galleria11.jpg'" alt="Image" width="250" preview />
                </div>
            </div>
        </div>
    </div>
</template>
