<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { useApi } from '../../composables/api.js';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';
import levelDic from '@/assets/data/level.json';

// schoolLevel
const selectButtonLevel = ref(null);
const selectButtonLevels = ref([{ name: '초등' }, { name: '중등' }, { name: '고등' }]);
// gradeLevel
const listboxLevel = ref(null);
const listboxLevels = ref([]);
watch(selectButtonLevel, (newValue) => {
    if (newValue.name === '초등') {
        listboxLevels.value = levelDic['초등'];
    } else if (newValue.name === '중등') {
        listboxLevels.value = levelDic['중등'];
    } else if (newValue.name === '고등') {
        listboxLevels.value = levelDic['고등'];
    }
});
// chapeterLevel
const api = useApi();
const error = ref(null);
const treeValue = ref(null);
watch(listboxLevel, async (newValue) => {
    const grade = newValue.grade;
    const semester = newValue.semester;
    try {
        const endpoint = `/chapters?grade=${grade}&semester=${semester}`;
        const response = await api.get(endpoint);
        if (response[0]['label'] === "") {
            treeValue.value = response[0]['children']
        }
        else {
            treeValue.value = response;         
        }
        error.value = null;
    } catch (err) {
        console.error('데이터 생성 중 에러 발생:', err);
        error.value = err;
    }
});
// 추가) school_level 값이 바뀌면 treeValue를 리셋하도록?! (트리 열어둔 것 초기화 되도록)


// 단위개념목록
const selectedTreeValue = ref(null);
const listboxConcept = ref(null);
const listboxConcepts = ref([]);
watch(selectedTreeValue, async (newValue) => {
    const key = Object.keys(newValue)[0];
    const chapterId = parseInt(key);
    if (!isNaN(chapterId)){
        try {
            const endpoint = `/concepts?chapterId=${chapterId}`;
            const response = await api.get(endpoint);
            listboxConcepts.value = response;
            error.value = null;
        } catch (err) {
            console.error('데이터 생성 중 에러 발생:', err);
            error.value = err;
        }
    }
});

// 단위개념 상세보기
const conceptId = ref(null);
const conceptDetail = ref(null);
watch(listboxConcept, async (newValue) => {
    conceptDetail.value  = newValue;
    conceptId.value = conceptDetail.value.conceptId;
    console.log(conceptId.value);
});

// '이전' 버튼 (홈으로)
const router = useRouter()
const goToHome = () => {
  try {
    router.push({ path: '/' }); 
  } catch (error) {
    console.error('에러 발생:', error);
  }
};
// '다음' 버튼 : api & 화면이동
const goToNextPage = async () => {
    try {
        const nodesEndpoint = `/concepts/nodes/${conceptDetail.value.conceptId}`;
        const nodesResponse = await api.get(nodesEndpoint);
        const edgesEndpoint = `/concepts/edges/${conceptDetail.value.conceptId}`;
        const edgesResponse = await api.get(edgesEndpoint);
        // const data = {
        //     dataId: 3,
        //     dataName : "이름이당"
        // }
        const data = {
            conceptId : conceptId.value,
            nodes : nodesResponse,
            edges : edgesResponse
        }
        router.push({
            name: 'concepttree',
            state: {dataToSend: data}
        });
        error.value = null;
    } catch (err) {
        console.error('데이터 생성 중 에러 발생:', err);
        error.value = err;
    }
};
// 추가) 단위개념을 누르지 않고 버튼을 누르면, 단위개념 목록에서 단위개념을 먼저 골라달라고 안내 
// 아니면 그냥 버튼에 :disabled="true" 속성?
const popup = ref(null);
const toast = useToast();
const confirmPopup = useConfirm();
const confirm = (event) => {
    confirmPopup.require({
        target: event.target,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};  
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                <h5> School Level </h5>
                <SelectButton v-model="selectButtonLevel" :options="selectButtonLevels" optionLabel="name" />
            </div>
            <div class="card">
                <!-- 사이즈 반응형으로 바꾸기 -->
                <ScrollPanel :style="{ width: '250px', height: '200px' }">
                <h5> Grade Level </h5>
                <Listbox v-model="listboxLevel" :options="listboxLevels" optionLabel="name" />
                <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up"></ScrollTop>
                </ScrollPanel>
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card"> 
                <h5> 대단원-중단원-소단원 </h5>
                <Tree :value="treeValue" selectionMode="single" v-model:selectionKeys="selectedTreeValue"></Tree>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5> 단위개념 목록 </h5>
                <Listbox v-model="listboxConcept" :options="listboxConcepts" optionLabel="conceptName" :filter="true" />
            </div>
            <div class="card">
                <h5> 단위개념 상세보기 </h5>
                이건 어떤 틀로 할지...고민중.. 태그 사용한 일반테이블?
                {{ conceptDetail }}

            </div>
        </div>

        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button @click="goToHome" label="이전" class="mr-2 mb-2"></Button>
        </div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-6 xl:col-8">빈공간</div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <ConfirmPopup></ConfirmPopup>
            <Toast />
            <Button v-if="conceptId == null" ref="popup" @click="confirm($event)" label="선수지식 확인" class="mr-2 mb-2"></Button>
            <Button v-else @click="goToNextPage" label="선수지식 확인"  class="mr-2 mb-2"></Button>
        </div>
    </div>


</template>