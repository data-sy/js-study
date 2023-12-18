<script setup>
import { onMounted, reactive, ref, watch, nextTick  } from 'vue';
import { useRouter } from 'vue-router'
import { useApi } from '../composables/api.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const api = useApi();

// 다운로드 확인 창
const displayConfirmation = ref(false);
const openConfirmation = () => {
    displayConfirmation.value = true;
};
const closeConfirmation = () => {
    displayConfirmation.value = false;
};

// '이전' 버튼 (홈으로)
const router = useRouter()
const goToHome = () => {
  try {
    router.push({ path: '/' }); 
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

// 다운로드
const imageUrl = 'demo/images/galleria/galleria11.jpg';
const imageRef = ref(null);

const handlePDFDownload = () => {
  nextTick(() => {
    const imageElement = imageRef.value;

    html2canvas(imageElement)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 페이지의 폭
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('image.pdf');
      })
      .catch(error => {
        console.error('html2canvas error:', error);
      });
  });
};


// 컨펌에서 yes 누르면 다운로드 되도록
// 우선 한 기능만 넣자 - 다운로드
const yesClick = () => {
  closeConfirmation();
  downloadAsPDF();
};

</script>


<template>
    <div class="grid p-fluid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                3 하나
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card">
                3 하나
            </div>
        </div>
        <div class="col-12 xl:col-6">
            <div class="card">
                3 두개로
                <div class="flex justify-content-center">
                    <Image :src="imageUrl" ref="imageRef" alt="Image" width="150" preview />
                    <button @click="handlePDFDownload">PDF로 다운로드</button>
                </div>                
            </div>
        </div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button @click="goToHome" label="이전" class="mr-2 mb-2"></Button>
        </div>
        <div class="col">빈</div>
        <div class="col">공</div>
        <div class="col">간</div>
        <div class="col">!</div>
        <div class="col-4 xs:col-4 sm:col-4 md:col-4 lg:col-3 xl:col-2">
            <Button label="다운로드" icon="pi pi-check" class="mr-2 mb-2" @click="openConfirmation" />
            <Dialog header="학습지 다운로드" v-model:visible="displayConfirmation" :style="{ width: '350px' }" :modal="true">
                <div class="flex align-items-center justify-content-center">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                    <span>Are you sure you want to proceed?</span>
                </div>
                <template #footer>
                    <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
                    <Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus />
                </template>
            </Dialog>
        </div>
    </div>
</template>