import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { useToast } from 'vue-toastification'
//Thirdparty plugin css
import "vue-toastification/dist/index.css"
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import './assets/main.css'

const firebaseConfig = {
    apiKey: "AIzaSyBvEdYU9uC0GRa5JbrXs2GKMkGOK67Rd0A",
    authDomain: "vite-firebase-def90.firebaseapp.com",
    projectId: "vite-firebase-def90",
    storageBucket: "vite-firebase-def90.appspot.com",
    messagingSenderId: "701547920614",
    appId: "1:701547920614:web:0496f3dda535dbc0ea4f27",
    measurementId: "G-FV6X3SGM2S"
  };
  
// Initialize Firebase
const fire = initializeApp(firebaseConfig);
//Initialize Firebase Cloud messaging and get a ref to the server
const messaging = getMessaging(fire)
getToken(messaging, { vapidKey: 'BMQNIQR9qnE3YUaFnqyOWjz2MkgIo5j0Z4hvKIOIezqnwYylbey6AkXuGXOuJXN7h2gJv88134kJwnVBzE74AJQ'}).then((currentToken) => {
    if(currentToken){
        console.log('Firebase token', currentToken);
    } else {
        console.log('No reg token available');
    }
}).catch((err)=> {
    console.log('An error occurred', err);
})

onMessage(messaging, (payload) => {
    console.log('Message received ', payload);
    const toast = useToast();
    toast.success(payload.notification.title)
})

const app = createApp(App)
app.use(Toast, {
    newestOnTop: true,
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: true,
})
app.use(createPinia())
app.use(router)

app.mount('#app')
