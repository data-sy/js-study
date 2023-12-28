<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter } from 'vue-router'
import cytoscape from 'cytoscape';
import klay from 'cytoscape-klay';

cytoscape.use(klay);

const router = useRouter()
const dataToSend = history.state.dataToSend;
const receivedData = ref('')
const knowledgeSpace = [];
const uniqueConceptIds = new Set();
const cyElement = ref(null);
let cy = null;
const clickedNodeId = ref('');
const conceptDetail = ref(null);

onMounted(() => {
  if (dataToSend) {
    // console.log(dataToSend);
    receivedData.value = dataToSend
    // console.log("receivedData", receivedData);
  }
  if (receivedData.value) {
    // 해당 concept
    conceptDetail.value = receivedData.value.nodes.find(node => node.conceptId === receivedData.value.conceptId);
    // nodes를 knowledgeSpace 변환하는 반복문
    receivedData.value.nodes.forEach(node => {
      // 중복된 conceptId를 Set에 추가
      uniqueConceptIds.add(node.conceptId);
    });
    // 중복이 제거된 conceptId를 가지고 knowledgeSpace에 데이터 추가
    uniqueConceptIds.forEach(uniqueConceptId => {
      const filteredNode = receivedData.value.nodes.find(node => node.conceptId === uniqueConceptId);
      if (filteredNode) {
        knowledgeSpace.push({
          data: {
            id: filteredNode.conceptId.toString(),
            label: filteredNode.conceptName
          }
        });
      }
    });
    // edges를 knowledgeSpace 변환
    // 나중에 백단에서 걸러서 오는 걸로 리팩토링
    receivedData.value.edges.forEach(edge => {
      // edge의 source가 nodes의 conceptId에 있는지 확인
      const sourceExists = receivedData.value.nodes.some(node => {
        return node.conceptId === parseInt(edge.data.source);
      });
      // target이 nodes 안에 있을 경우만 추가
      if (sourceExists) {
        knowledgeSpace.push(edge);
      }
    });
  }
  if (cyElement.value) {
    cy = cytoscape({
      container: cyElement.value,
      elements: knowledgeSpace,
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
            // 화살표
            'curve-style': 'bezier',
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        name: 'klay',
        animate: false,
        gravityRangeCompound: 1.5,
        fit: true,
        tile: true
      }
    });
    cy.on('tap', 'node', function(event) {
        clickedNodeId.value = event.target.id();
        // console.log(clickedNodeId.value);
    });
  }
});

// 컴포넌트 파기 시 Cytoscape 인스턴스 파기
onBeforeUnmount(() => {
  if (cy) {
    cy.destroy();
  }
});

const selectedNode = ref('')
// 노드 클릭 시 해당 노드의 데이터 화면에 보여주기
watch(clickedNodeId, (newValue) => {
  const selectedNodeId = parseInt(newValue);
  if (newValue && receivedData.value && receivedData.value.nodes) {
    selectedNode.value = receivedData.value.nodes.find(node => node.conceptId === selectedNodeId);
    if (selectedNode) {
      // 선택된 노드 데이터를 가지고 화면에 필요한 작업 수행
      // console.log(selectedNode.value);
      // 화면에 표시하는 로직을 여기에 추가
    }
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
                <div class="surface-section" v-if="selectedNode"> <!-- conceptDetail자리에 testData 사용-->
                    <div class="font-medium text-4xl text-900 mb-3">{{ selectedNode.conceptName }}</div>
                    <div class="text-500 mb-5"></div>
                    <ul class="list-none p-0 m-0">
                        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">개념설명</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ selectedNode.conceptDescription }}</div>
                        </li>
                        <!-- <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">영역</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                                <Chip v-for="section in conceptDetail.conceptSection" :label="section" class="mr-2" :key="section" />
                            </div>
                        </li> -->
                        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">성취기준</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ selectedNode.conceptAchievementName }}</div>
                        </li>
                    </ul>
                </div>
                <div class="surface-section" v-else>
                    <div class="font-medium text-3xl text-900 mb-3 text-blue-500"> 단위개념을 선택해주세요 </div>
                    <div class="text-500 mb-5">  </div>
                    <ul class="list-none p-0 m-0">
                        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">개념설명</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1"></div>
                        </li>
                        <!-- <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">영역</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1"></div>
                        </li> -->
                        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">성취기준</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card">
                <h5> 단위개념 상세보기 </h5>
                <div class="surface-section" v-if="conceptDetail"> 
                    <div class="font-medium text-4xl text-900 mb-3">{{ conceptDetail.conceptName }}</div>
                    <div class="text-500 mb-5"></div>
                    <ul class="list-none p-0 m-0">
                        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">개념설명</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ conceptDetail.conceptDescription }}</div>
                        </li>
                        <!-- <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">영역</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                                <Chip v-for="section in conceptDetail.conceptSection" :label="section" class="mr-2" :key="section" />
                            </div>
                        </li> -->
                        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                            <div class="text-500 w-6 md:w-2 font-medium">성취기준</div>
                            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ conceptDetail.conceptAchievementName }}</div>
                        </li>
                    </ul>
                </div>
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
