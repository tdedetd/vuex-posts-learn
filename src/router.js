import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/add-post',
      component: () => import('./views/AddPost.vue')
    }
  ]
});
