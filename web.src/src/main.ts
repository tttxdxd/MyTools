import { createApp } from 'vue';
import App from './App.vue';

import element from './plugins/element-plus';

createApp(App).use(element).mount('#app');
