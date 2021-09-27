import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// createApp(App).use(BootstrapVue).mount('#app');
createApp(App).use(router).mount('#app');
