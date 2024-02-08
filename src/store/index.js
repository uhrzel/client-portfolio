// Import necessary files and modules
import { createApp } from 'vue'; // Import createApp from Vue 3
import { createStore } from 'vuex'; // Import createStore from Vuex 4

// Create a Vue 3 app instance
const app = createApp({});

// Create a Vuex store instance
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

// Use Vuex with the app instance
app.use(store);

// Export the Vuex store instance
export default store;
