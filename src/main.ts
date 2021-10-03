import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import golf from '@/components/experience_golf/golf.vue'
const app=createApp(App);
 app.component('golf', golf);
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// createApp(App).use(BootstrapVue).mount('#app');
app.use(router).mount('#app');
