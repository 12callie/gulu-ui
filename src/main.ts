import {createApp} from "vue"
import App from "./App.vue"
import "./index.css"
import {createWebHistory, createRouter} from "vue-router"
import First from "./components/First.vue"
import Second from "./components/Second.vue"

const history = createWebHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: First},
        {path: '/xxx', component: Second}
    ]
})
const app = createApp(App)
app.use(router)
app.mount("#app")