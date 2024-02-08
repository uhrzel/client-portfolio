import { createRouter, createWebHistory } from 'vue-router'; // Import necessary functions
import Home from '../views/Home_Nav.vue'; // Import your views or components
import About from '../views/About_Nav.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Export the router instance
