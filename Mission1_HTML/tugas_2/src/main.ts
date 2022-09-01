import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueLazyLoad from "vue-lazyload"



const app = createApp(App)
app.use(VueLazyLoad, {
	loading: "/loading.gif",
	lazyComponent: true,
})
app.mount("#app")

