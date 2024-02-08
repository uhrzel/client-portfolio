// Import necessary files and modules
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { createApp } from 'vue'; // Import createApp from Vue 3
import { createVuetify } from 'vuetify'; // Import createVuetify from Vuetify 3
import App from '../App.vue'; // Update the path to your App.vue file

// Create a Vue 3 app instance
const app = createApp(App);

// Create a new Vuetify instance
const vuetify = createVuetify({
  icons: {
    iconfont: 'fa' || 'md' || 'mdi',
  },
  theme: {
    themes: {
      dark: {
        background: '#111111',
      },
    },
  },
});

// Use Vuetify with the app instance
app.use(vuetify);

// Mount the app instance to the DOM
app.mount('#app');

// Export Vuetify instance to be used in other parts of the application
export default vuetify;
