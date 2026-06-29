import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 切換路由時捲回頁面最上面
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/products',
      name: 'products',
      // 所有商品頁 — 懶加載
      component: () => import('../views/ProductAllView.vue'),
    },
    {
      path: '/products/:id',
      name: 'product-info',
      // 單一商品詳情頁 — 懶加載，接受動態 id 參數
      component: () => import('../views/ProductInfoView.vue'),
      props: true,
    },
    {
      path: '/collection',
      name: 'collection',
      // 精選系列頁 — 懶加載
      component: () => import('../views/ProductCollectionView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/story',
      name: 'story',
      // 品牌故事頁 — 懶加載
      component: () => import('../views/StoryView.vue'),
    },
  ],
})

export default router
