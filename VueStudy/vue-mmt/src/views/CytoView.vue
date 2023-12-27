<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import cytoscape from 'cytoscape';

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

receivedData.value = { 
    "conceptId": 2625, 
    "nodes": [
         { "conceptId": 2620, "conceptName": "약수", "conceptDescription": "약수: 어떤 수를 나누어 떨어지게 하는 수", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초5", "conceptSemester": "1학기", "conceptChapterId": 299, "conceptChapterName": "약수와 배수를 찾아볼까요", "conceptChapterMain": null, "conceptChapterSub": "약수와 배수", "conceptAchievementId": 22, "conceptAchievementName": "약수의 의미를 알고 구할 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 1875, "conceptName": "자연수", "conceptDescription": "1, 2, 3과 같은 수", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초3", "conceptSemester": "2학기", "conceptChapterId": 206, "conceptChapterName": "여러 가지 분수를 알아볼까요 (1)", "conceptChapterMain": null, "conceptChapterSub": "분수", "conceptAchievementId": 15, "conceptAchievementName": "단위분수와 진분수의 의미를 알고 그 관계를 설명할 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 5814, "conceptName": "1부터 5까지의 수", "conceptDescription": "1부터 5까지의 수를 읽고 셀 수 있다.", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 1, "conceptChapterName": "몇일까요 (1)", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 1, "conceptAchievementName": "50까지의수 개념을이해 하고, 수를 세고 읽고 쓸 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 5834, "conceptName": "수의 순서", "conceptDescription": "1부터 9까지의 수 1, 2, 3, 4, 5, 6, 7, 8, 9를 순서대로 나타낼 수 있다.", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 6, "conceptChapterName": "수의 순서를 알아볼까요", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 1, "conceptAchievementName": "50까지의 수 개념을 이해 하고, 수를 세고 읽고 쓸 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 7581, "conceptName": "첫째", "conceptDescription": "차례를 매길 때, 맨 처음에 오는 수", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 5, "conceptChapterName": "몇째일까요", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 5, "conceptAchievementName": "50까지의 수의 계열을 이해하고, 수의 크기를 비교할 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 5485, "conceptName": "여섯", "conceptDescription": "다섯에 하나를 더한 수", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 3, "conceptChapterName": "몇일까요 (2)", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 1, "conceptAchievementName": "50까지의수 개념을이해 하고, 수를 세고 읽고 쓸 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 5814, "conceptName": "1부터 5까지의 수", "conceptDescription": "1부터 5까지의 수를 읽고 셀 수 있다.", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 1, "conceptChapterName": "몇일까요 (1)", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 1, "conceptAchievementName": "50까지의수 개념을이해 하고, 수를 세고 읽고 쓸 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 5835, "conceptName": "1 큰 수와 1 작은 수", "conceptDescription": "수를 순서대로 썼을 때 바로 앞의 수가 1 작은 수, 바로 뒤의 수가 1 큰 수입니다.", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 7, "conceptChapterName": "1만큼 더 큰 수와 1만큼 더 작은 수는 무엇일까요", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 1, "conceptAchievementName": "50까지의 수 개념을 이해 하고, 수를 세고 읽고 쓸 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 5836, "conceptName": "두 수의 크기 비교하기", "conceptDescription": "9와 5의 크기를 비교해보면 9는 5보다 큽니다. 5는 9보다 작습니다.", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 8, "conceptChapterName": "어느 수가 더 클까요", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 1, "conceptAchievementName": "50까지의 수 개념을 이해 하고, 수를 세고 읽고 쓸 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 5835, "conceptName": "1 큰 수와 1 작은 수", "conceptDescription": "수를 순서대로 썼을 때 바로 앞의 수가 1 작은 수, 바로 뒤의 수가 1 큰 수입니다.", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 7, "conceptChapterName": "1만큼 더 큰 수와 1만큼 더 작은 수는 무엇일까요", "conceptChapterMain": null, "conceptChapterSub": "9까지의 수", "conceptAchievementId": 1, "conceptAchievementName": "50까지의 수 개념을 이해 하고, 수를 세고 읽고 쓸 수 있다.", "conceptSection": "['수와 연산']" }, 
         { "conceptId": 6557, "conceptName": "10개씩 묶음의 수가 다를 때", "conceptDescription": "10개씩 묶음의 수를 비교합니다.", "conceptSchoolLevel": "초등", "conceptGradeLevel": "초1", "conceptSemester": "1학기", "conceptChapterId": 32, "conceptChapterName": "어느 수가 더 클까요", "conceptChapterMain": null, "conceptChapterSub": "50까지의 수", "conceptAchievementId": 5, "conceptAchievementName": "50까지의 수의 계열을 이해하고, 수의 크기를 비교할 수 있다.", "conceptSection": "['수와 연산']" } 
        ], 
    "edges": [ 
        { "data": { "id": 781, "toConceptId": 5834, "fromConceptId": 1875 } }, 
        { "data": { "id": 3421, "toConceptId": 5814, "fromConceptId": 1875 } }, 
        { "data": { "id": 64, "toConceptId": 1875, "fromConceptId": 2620 } }, 
        { "data": { "id": 83, "toConceptId": 2620, "fromConceptId": 2625 } }, 
        { "data": { "id": 2352, "toConceptId": 7581, "fromConceptId": 5834 } }, 
        { "data": { "id": 2353, "toConceptId": 5835, "fromConceptId": 5834 } }, 
        { "data": { "id": 2354, "toConceptId": 5836, "fromConceptId": 5835 } }, 
        { "data": { "id": 2357, "toConceptId": 5835, "fromConceptId": 5836 } }, 
        { "data": { "id": 2358, "toConceptId": 6557, "fromConceptId": 5836 } }, 
        { "data": { "id": 2350, "toConceptId": 5814, "fromConceptId": 7581 } }, 
        { "data": { "id": 2351, "toConceptId": 5485, "fromConceptId": 7581 } } 
    ] 
}
const cyElement = ref(null);
let cy = null;

onMounted(() => {
  cy = cytoscape({
    container: cyElement.value,
    elements: [
      // 그래프 요소들을 정의합니다.
      { data: { id: 'node1', label: 'Node 1' }, position: { x: 100, y: 100 } },
      { data: { id: 'node2', label: 'Node 2' }, position: { x: 200, y: 200 } },
      { data: { id: 'edge1', source: 'node1', target: 'node2' } }
    ],
    style: [
      // 그래프 스타일을 정의합니다.
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'label': 'data(label)'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle'
        }
      }
    ]
  });
});

// 컴포넌트 파기 시 Cytoscape 인스턴스 파기
onBeforeUnmount(() => {
  if (cy) {
    cy.destroy();
  }
});




const goBack = () => {
  // 이전 페이지로 돌아가기
  router.go(-1) // 또는 router.back()
}

// 홈으로
const goToHome = () => {
  try {
    router.push({ path: '/' }); 
  } catch (error) {
    console.error('에러 발생:', error);
  }
};
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
                <!-- <p>받은 데이터: {{ receivedData }}</p> -->
                <div>
                    <div ref="cyElement" style="height: 400px; width: 100%;"></div>
                </div>
            </div>
        </div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button  @click="goBack" label="이전" class="mr-2 mb-2"></Button>
        </div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-6 xl:col-8">빈공간</div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button @click="goToHome" label="홈으로" icon="pi pi-home" class="mr-2 mb-2"></Button>
        </div>     
    </div>
</template>
