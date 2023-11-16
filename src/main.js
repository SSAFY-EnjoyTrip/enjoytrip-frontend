import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, SessionStorage, Notify } from 'quasar';

import App from './App.vue';
import router from './router';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {
    SessionStorage,
    Notify,
  },
});

app.mount('#app');