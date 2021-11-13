import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/open'
  },
  {
    path: '/open',
    name: 'open',
    component: () => import('../views/open.vue')
  },
  {
    path: '/desktop',
    name: 'desktop',
    component: () => import('../views/desktop.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
