import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

declare global {
    interface Window {
        eventBus:any;
    }
}

window.eventBus = mitt() 

createApp(App).mount('#app')
