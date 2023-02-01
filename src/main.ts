import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import "//at.alicdn.com/t/c/font_3874450_z1ykjug2pnq.js";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
