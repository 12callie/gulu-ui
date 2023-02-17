import "./index.scss";
import "./lib/guluLib.scss";
import { createApp } from "vue";
import App from "./App.vue";
import "//at.alicdn.com/t/c/font_3874450_pz537mwyetp.js";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
