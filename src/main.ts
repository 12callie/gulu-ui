import "./index.scss";
import "./lib/guluLib.scss";
import { createApp } from "vue";
import App from "./App.vue";
import "//at.alicdn.com/t/c/font_3874450_u4ujmrcaemb.js";
import { router } from "./router";
import "github-markdown-css";

const app = createApp(App);
app.use(router);
app.mount("#app");
