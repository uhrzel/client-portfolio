import { createApp } from 'vue'; // Import createApp function from Vue 3
import App from './App.vue';
import router from './router'; // Import your router configuration
import store from './store';
import vuetify from './plugins/vuetify';

const app = createApp(App); // Create a new Vue app instance

// Use Vue Router with the app instance
app.use(router);

app.use(store); // You can use Vuex in a similar manner if you have it
app.use(vuetify); // Use Vuetify

app.mount('#app'); // Mount your app to the #app element in your HTML
