<script setup>
import { ref } from 'vue';
import { useApi } from '../composables/api.js';

const api = useApi();
const data = ref(null);
const error = ref(null);
const requestData = {
  userEmail: '',    
  userPassword: '', 
  userName: '',    
  userPhone: ''
};

const signup = async () => {
  try {
    const response = await api.post('/signup', requestData);
    data.value = response;
    error.value = null;
  } catch (err) {
    console.error('데이터 생성 중 에러 발생:', err);
    error.value = err;
  }
};

</script>


<template>
  <form v-on:submit="signup"> <!-- 회원가입 -->
    <div>
      <label for="userEmail"> email: </label>
      <input id="userEmail" type="text" v-model="requestData.userEmail">
    </div>
    <div>
      <label for="userPassword"> password: </label>
      <input id="userPassword" type="password" v-model="requestData.userPassword">
    </div>
    <div>
      <label for="username"> name: </label>
      <input id="username" type="text" v-model="requestData.username">
    </div>
    <div>
      <label for="userPhone"> phone: </label>
      <input id="userPhone" type="text" v-model="requestData.userPhone">
    </div>
    <button type="submit">회원가입</button>
  </form>
</template>


<!-- <script>
// form으로 입력받은 데이터를 post로 쏴주기

import { ref } from "vue";
import { useApi } from "../composables/api.js";

export default {

  setup() {
    const api = useApi();
    const data = ref(null);
    const error = ref(null);
    const requestData = {
        userEmail: '',    
        userPassword: '', 
        userName: '',    
        userPhone: ''
    };
    async function signup() {
      try {
        const response = await api.post("/signup", requestData);
        data.value = response;
        error.value = null;
      } catch (err) {
        console.error("데이터 생성 중 에러 발생:", err);
        error.value = err;
      }
    }
    return {
      data,
      error,
      signup,
      requestData,
    };
  },
};

</script> -->
