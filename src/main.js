import { createApp } from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'



const settings = {
    apiKey: '76b8ab40-4a73-47f3-be30-95e2cfce1415',
    lang: 'ru_RU',
    coordorder: '56.314223, 43.989416',
    enterprise: false,
    version: '2.1'
  }


import './theme.css'


const VueScrollTo = require('vue-scrollto')




createApp(App)
.use(VueScrollTo)
.use(YmapPlugin, settings)
.mount('#app')


