import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/reset.less";
import "virtual:windi.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.mount("#app");
