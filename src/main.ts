import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import "//at.alicdn.com/t/c/font_3874450_z1ykjug2pnq.js";

const history = createWebHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { path: "/doc", component: Doc },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
