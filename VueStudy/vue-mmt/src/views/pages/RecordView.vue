<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import CustomerService from '@/service/CustomerService';

const listboxTest = ref(null);
const listboxTests = ref([]);

const customerService = new CustomerService();
const customer3 = ref(null);
onBeforeMount(() => {
    // 여기서 demo-data-customer-medium.json 에서 데이터를 긁어옴 => slotProps.data ~~
    customerService.getCustomersMedium().then((data) => (customer3.value = data));
});

const toggleValue = ref(false);

</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                <h5> 학습지 목록 </h5>
                <Listbox v-model="listboxTest" :options="listboxTests" optionLabel="name" />
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                <h5>정오답 기록하기</h5>
                <DataTable :value="customer3" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1">
                    <Column field="number" header="번호" style="min-width: 200px"></Column>                    
                    <Column field="status" header="정답" style="min-width: 200px">
                        <template #body="slotProps">
                            <span :class="'customer-badge status-' + slotProps.data.status">{{ slotProps.data.status }}</span>
                        </template>
                    </Column>
                    <Column field="date" header="Date" style="min-width: 200px">
                        <template #body="slotProps">
                            <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No" :style="{ width: '10em' }" />
                            <span>{{ slotProps.data.status }}</span>
                        </template>
                    </Column>
                    <!-- <Column filed="answerCode" header="정오답">
                        <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No" :style="{ width: '10em' }" />
                    </Column> -->
                </DataTable>
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card"> 
                <h5> 학습지 미리보기 </h5>
                진단에서 만든 뒤 그대로 가져다 쓰기
            </div>
        </div>
    </div>
</template>
