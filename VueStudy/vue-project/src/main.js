import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import mixins from './mixins'
// import PrimeVue from 'primevue';
// import 'primevue/resources/themes/saga-blue/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

const app = createApp(App)
app.config.globalProperties.$store = store; // [store / 저장소]
app.use(router)
app.use(store);
// app.mixin(mixins);
// app.use(PrimeVue);
app.mount('#app')
