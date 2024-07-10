import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


export const routes: Readonly<RouteRecordRaw[]> = [
  {
    // 首页
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    // 关于我们
    path: '/about',
    component: () => import('@/views/about/index.vue')
  },
  {
    // 平台
    path: '/platform',
    component: () => import('@/views/platform/index.vue')
  }
]
  
let base = import.meta.env.VITE_ROUTE_BASE
const router = createRouter({
  history: createWebHistory(base),
  routes,
})

router.beforeEach((_to, _from, next) => {
  window.scrollTo(0,0)
  next()
})

export default router
