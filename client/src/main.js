import { createApp } from "vue";
import { VueFire, VueFireAuth } from 'vuefire'
import App from "./App.vue";
import router from "./router";
import "./main.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDPUxXSLdum8TZoPvBsWV_YH4K45dJaw8g",
    authDomain: "pladder-4aa1e.firebaseapp.com",
    projectId: "pladder-4aa1e",
    storageBucket: "pladder-4aa1e.appspot.com",
    messagingSenderId: "551078559410",
    appId: "1:551078559410:web:06ce85968c8ba8887bd3ab"
  };

export const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App).use(router);

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ]
})

app.mount("#app");