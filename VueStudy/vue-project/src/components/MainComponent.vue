<template>
    <div>
        <h1> store 학습 </h1>
    </div>
    
</template>


<script setup>
import { computed, onMounted } from 'vue'; // Composition API의 필요한 함수를 가져옵니다.
import { useStore } from 'vuex'; // Vuex 스토어를 가져옵니다.

const store = useStore(); // Vuex 스토어를 가져옵니다.
const name = computed(() => store.state.name);
const userInfo = computed(() => store.getters.getUserInfo);

// 컴포넌트가 마운트된 후 실행되는 로직을 onMounted 훅을 사용해 정의합니다.
onMounted(() => {
  console.log('');
  console.log('[MainComponent] : [data] : [start]');
  console.log('설 명 : 데이터 초기화 준비');
  console.log('이름 : ' + name.value);
  console.log('get 정보 : ' + userInfo.value);
  console.log('');

  // [사용자 정보 set 지정 실시]
  store.commit('setUserInfo', 'TWOK'); // Vuex 스토어를 통해 상태를 변경합니다.

  console.log('');
  console.log('[MainComponent] : [data] : [update]');
  console.log('get 정보 : ' + userInfo.value);
  console.log('');
});

</script>

<!-- 
<script>
import { computed, onMounted } from 'vue'; // Composition API의 필요한 함수를 가져옵니다.
import { useStore } from 'vuex'; // Vuex 스토어를 가져옵니다.

export default {
    setup() {
        const store = useStore(); // Vuex 스토어를 가져옵니다.
        const name = computed(() => store.state.name);
        const userInfo = computed(() => store.getters.getUserInfo);

        // 컴포넌트가 마운트된 후 실행되는 로직을 onMounted 훅을 사용해 정의합니다.
        onMounted(() => {
            console.log('');
            console.log('[MainComponent] : [data] : [start]');
            console.log('설 명 : 데이터 초기화 준비');
            console.log('이름 : ' + name.value);
            console.log('get 정보 : ' + userInfo.value);
            console.log('');

            // [사용자 정보 set 지정 실시]
            store.commit('setUserInfo', 'TWOK'); // Vuex 스토어를 통해 상태를 변경합니다.

            console.log('');
            console.log('[MainComponent] : [data] : [update]');
            console.log('get 정보 : ' + userInfo.value);
            console.log('');
        });

        return {
            name,
            userInfo
        };
    }
}
</script> -->
