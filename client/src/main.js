import { createApp } from "vue";
import { VueFire, VueFireAuth } from 'vuefire'
import App from "./App.vue";
import router from "./router";
import "./main.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {};

export const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App).use(router);

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ]
})

app.mount("#app");