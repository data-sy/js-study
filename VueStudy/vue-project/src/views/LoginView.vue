<template>
  <!-- .prevent를 추가하여 로그인 버튼을 눌렀을 때 화면에 data를 표시하도록-->
  <!-- 실제 개발에서는 jwt를 쿠키에 담아서 사용할 것이므로, 이 방법이 사용되진 않을 듯-->
  <form v-on:submit.prevent="login"> <!-- 로그인 -->
    <div>
      <label for="userEmail"> email: </label>
      <input id="userEmail" type="text" v-model="requestData.userEmail">
    </div>
    <div>
      <label for="userPassword"> password: </label>
      <input id="userPassword" type="password" v-model="requestData.userPassword">
    </div>
    <button type="submit">로그인</button>
  </form>
  <div>{{ data }}</div>
  <div v-if="error" style="color: red">{{ error.message }}</div>
</template>

<script setup>
import { ref } from 'vue';
import { useApi } from '../composables/api.js';

const api = useApi();
const data = ref(null);
const error = ref(null);
const requestData = {
  userEmail: '',
  userPassword: '',
};

const login = async () => {
  try {
    const response = await api.post('/authentication', requestData);
    data.value = response;
    error.value = null;
  } catch (err) {
    console.error('데이터 생성 중 에러 발생:', err);
    error.value = err;
  }
};

</script>
