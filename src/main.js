import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jquery from 'jquery'
import { auth } from './firebase'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

window.$ = jquery

let app;
auth.onAuthStateChanged(user => {
    if (user == null) {
        user = { email: "Null" }
    }
    if (!app) {
        app = createApp(App);
        app.use(VueSweetalert2);
        app.use(router).mount('#app')
    }
})
