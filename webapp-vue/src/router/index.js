import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'
import PelisView from '@/views/PelisView.vue'
import PeliView from '@/views/PeliView.vue'
import ActorView from '@/views/ActorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PelisView,
    },
    {
      path: '/:imdbID',
      name: 'peli',
      component: PeliView,
    },
    {
      path: '/:imdbID/:name',
      name: 'actor',
      component: ActorView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
