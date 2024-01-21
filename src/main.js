import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import './assets/main.css';
import PrimeVue from 'primevue/config';


createApp(App)
    .use(bootstrap)
    .use(PrimeVue)
    .mount('#app');
