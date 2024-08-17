import { createApp } from 'vue';
import router from './routers'

import App from './App.vue';

import { VueQueryPlugin } from '@tanstack/vue-query';

createApp(App).use(router).use(VueQueryPlugin).mount('#app');

        
