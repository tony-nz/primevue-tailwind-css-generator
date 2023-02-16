import { createApp } from "vue";
import { initPrimeVue } from "./plugins/primevue";
import App from "./App.vue";
import "@/assets/style.css";
const app = createApp(App);

/**
 * Initialize PrimeVUE components
 */
initPrimeVue(app);

app.mount("#app");

export default app;
