<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
const selectButtonLevel = ref(null);
const selectButtonLevels = ref([{ name: '초등' }, { name: '중등' }, { name: '고등' }]);
const listboxLevel = ref(null);
const listboxLevels = ref([]);
watch(selectButtonLevel, (newValue) => {
    // console.log(selectButtonValue1);
    // console.log(newValue);
    if (newValue.name === '초등') {
        listboxLevels.value = [
            { name: '1학년 1학기', code: 'el11', grade:'초1', semester:'1학기' },
            { name: '1학년 2학기', code: 'el11', grade:'초1', semester:'2학기' },
            { name: '2학년 1학기', code: 'el21', grade:'초2', semester:'1학기' },
            { name: '2학년 2학기', code: 'el12', grade:'초2', semester:'2학기' },
            { name: '3학년 1학기', code: 'el31', grade:'초3', semester:'1학기' },
            { name: '3학년 2학기', code: 'el32', grade:'초3', semester:'2학기' },
            { name: '4학년 1학기', code: 'el41', grade:'초4', semester:'1학기' },
            { name: '4학년 2학기', code: 'el42', grade:'초4', semester:'2학기' },
            { name: '5학년 1학기', code: 'el51', grade:'초5', semester:'1학기' },
            { name: '5학년 2학기', code: 'el52', grade:'초5', semester:'2학기' },
            { name: '6학년 1학기', code: 'el61', grade:'초6', semester:'1학기' },
            { name: '6학년 2학기', code: 'el62', grade:'초6', semester:'2학기' },
    ];
    } else if (newValue.name === '중등') {
        listboxLevels.value = [
            { name: '1학년 1학기', code: 'mid11', grade:'중1', semester:'1학기' },
            { name: '1학년 2학기', code: 'mid11', grade:'중1', semester:'2학기' },
            { name: '2학년 1학기', code: 'mid21', grade:'중2', semester:'1학기' },
            { name: '2학년 2학기', code: 'mid12', grade:'중2', semester:'2학기' },
            { name: '3학년 1학기', code: 'mid31', grade:'중3', semester:'1학기' },
            { name: '3학년 2학기', code: 'mid32', grade:'중3', semester:'2학기' },
    ];
    } else if (newValue.name === '고등') {
        listboxLevels.value = [
            { name: '수학(상)', code: 'high1', grade:'수학', semester:'상' },
            { name: '수학(하)', code: 'high2', grade:'수학', semester:'하' },
            { name: '수1', code: 'high3', grade:'수1', semester:'전체' },
            { name: '수2', code: 'high4', grade:'수2', semester:'전체' },
            { name: '확률과 통계', code: 'high7', grade:'확통', semester:'전체' },
            { name: '미적분', code: 'high5', grade:'미적', semester:'전체' },
            { name: '기하', code: 'high6', grade:'기하', semester:'전체' },   
    ];
    }
});
watch(listboxLevel, (newValue) => {
    const grade = newValue.grade;
    const semester = newValue.semester;
    console.log(grade);
    console.log(semester);
    // 이걸 api 겟의 리퀘스트로 쏴서
        // 대-중-소 : chapter 테이블에서 쿼리한 결과 받기
        // 학습지 목록 : test 테이블에서 쿼리한 결과 받기
});

//대-중-소단원
// 실제로는 api 리스펀스가 올 거야
const treeValue = ref([{
  key: "0",
  label: "대단원",
  data: "대단원 Data",
  icon: "pi pi-fw pi-inbox",
  children: [
    {
      key: "0-0",
      label: "중단원 1",
      data: "중단원 1 Data",
      icon: "pi pi-fw pi-folder",
      children: [
        {
            key: "0-0-0",
            label: "소단원 1",
            data: "소단원 1 Data",
            icon: "pi pi-fw pi-bars",
            children: []        
        }
    ]
    }
  ]
}]);
// const treeValue = ref(null);
// const nodeService = new NodeService();
// onMounted(() => {
//     // 지금은 노드서비스가 (저장되어 있는) json 파일에서 데이터를 긁어서 가져오는 중
//     // 쿼리 결과를 받는걸로 수정하기 (이러면 onMounted가 아니라 watch겠지?!)
//     nodeService.getTreeNodes().then((data) => (treeValue.value = data));
// });
const selectedTreeValue = ref(null);
// 단위개념목록
const listboxConcept = ref(null);
const listboxConcepts = ref([]);
watch(selectedTreeValue, (newValue) => {
    const key = Object.keys(newValue)[0];
    // console.log(Object.keys(newValue)[0]);
    const hyphenCnt = key.split('-').length - 1;
    if (hyphenCnt >= 2) {
        // 실제로는 api 리스펀스 결과를 넣게 될 거야
        listboxConcepts.value = [
                { name: '단위개념 이름'},
        ]
    }
});

// 임의의 값
const conceptId = 4979;
const dataToNext = {
  conceptId: conceptId
}

const router = useRouter()

const goToNextPage = () => {
  router.push({
    name: 'concepttree',
    state: { dataToSend: dataToNext },
  })
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
                <Listbox v-model="listboxConcept" :options="listboxConcepts" optionLabel="name" :filter="true" />
            </div>
            <div class="card">
                <h5> 단위개념 상세보기 </h5>
                이건 어떤 틀로 할지...고민중.. 태그 사용한 일반테이블?
            </div>
        </div>

        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button label="이전" class="mr-2 mb-2"></Button>
        </div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-6 xl:col-8">빈공간</div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button @click="goToNextPage" label="선수지식 확인" class="mr-2 mb-2"></Button>
        </div>
    </div>


</template>