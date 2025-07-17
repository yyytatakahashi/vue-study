import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/git',
      name: 'git',
      component: () => import('../views/GitView.vue'),
    },
    {
      path: '/crud',
      name: 'Crud',
      component: () => import('../views/CrudView.vue'),
    },
    {
      path: '/bootmenu',
      name: 'bootMenu',
      component: () => import('../views/BootMenuView.vue'),
    },
    {
      path: '/bootforms',
      name: 'bootForms',
      component: () => import('../views/BootFormsView.vue'),
    },
  ],
})

export default router
