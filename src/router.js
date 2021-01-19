import { createRouter, createWebHistory } from 'vue-router';

import FrontendView from './pages/frontend/FrontendView.vue';
import Home from './pages/frontend/Home.vue';
import About from './pages/frontend/About.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', redirect: '/frontend/home' },
    { path: '/', redirect: '/frontend/home' },
    { path: '/frontend', component: FrontendView, children: [
      
      { path: 'home', component: Home }, 
      { path: 'about', component: About },
      
      { path: '', component: Home },
      
      ]
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});



export default router;