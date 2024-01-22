import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import ProductPage from '../components/ProductPage.vue';
import OrderPage from '../components/OrderPage.vue';
import ContactPage from '../components/ContactPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/product', component: ProductPage },
  { path: '/order', component: OrderPage },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
