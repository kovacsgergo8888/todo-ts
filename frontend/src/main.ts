import './styles.css'
import { createApp } from 'vue'
import {router} from './router'
import App from './App.vue'
import Btn from './components/common/Btn.vue'
import TextField from './components/common/TextField.vue'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(store)
app.component('Btn', Btn)
app.component('TextField', TextField)

app.mount('#app')
