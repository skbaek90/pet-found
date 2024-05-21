import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/home/Home.vue';
import Adopt from '@views/adopt/Adopt.vue';
import ReHome from '@views/re-home/ReHome.vue';
import Settings from '@views/settings/Settings.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/adopt', component: Adopt },
	{ path: '/re-home', component: ReHome },
	{ path: '/settings', component: Settings }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
