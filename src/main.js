import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap 5
import './assets/scss/all.scss';
import 'bootstrap';

createApp(App).use(router).mount('#app');
