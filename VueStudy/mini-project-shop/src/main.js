import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //router 폴더의 index.js가 import됨
import mixins from './mixins'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// createApp(App) : 최상위 컴포넌트인 App.vue로 app을 생성하고
// use(router) : App.vue에서 router가 사용될 수 있도록 추가
// mount('#app') : App.vue를 public 폴더의 index.html에 정의되어 있는 id=”app”인 html element에 마운트 시킴
const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');

// window.kakao.init("카카오앱키");

// SpringTest.vue에서 사용. ApiTest.vue 에서는 없어도 돼
// 스프링 서버랑 연동
import axios from 'axios';
axios.defaults.baseURL = "http://15.164.232.32:8080";
app.config.globalProperties.axios = axios;