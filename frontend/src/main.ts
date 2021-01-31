import './styles.css'
import { createApp } from 'vue'
import {router} from './router'
import App from './App.vue'
import Btn from './components/common/Btn.vue'

const app = createApp(App)
app.use(router)
app.component('Btn', Btn)
app.mount('#app')
