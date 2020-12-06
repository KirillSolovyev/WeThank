import LeadersPage from './components/pages/leaders/LeadersPage.vue';
import UserPage from './components/pages/user/UserPage.vue';
import ShopPage from './components/pages/shop/ShopPage.vue';

export const routes = [
  { path: '/leaders', component: LeadersPage },
  { path: '/user', component: UserPage },
  { path: '/shop', component: ShopPage },
];