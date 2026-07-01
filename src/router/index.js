import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import IndexView from '../views/IndexView.vue'

// 站名，供分頁標題共用
export const SITE_NAME = 'URBNSTEP'

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
      meta: { title: '首頁' },
    },
    {
      path: '/products',
      name: 'products',
      // 所有商品頁 — 懶加載
      component: () => import('../views/ProductAllView.vue'),
      meta: { title: '所有商品' },
    },
    {
      path: '/products/:id',
      name: 'product-info',
      // 單一商品詳情頁 — 懶加載，接受動態 id 參數
      component: () => import('../views/ProductInfoView.vue'),
      props: true,
      // 標題會在頁面載入商品後，以商品名稱動態覆蓋
      meta: { title: '商品詳情' },
    },
    {
      path: '/collection',
      name: 'collection',
      // 精選系列頁 — 懶加載，需登入
      component: () => import('../views/ProductCollectionView.vue'),
      meta: { requiresAuth: true, title: '我的收藏' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      // 已登入者不需再進登入頁
      meta: { guestOnly: true, title: '會員登入' },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { guestOnly: true, title: '會員註冊' },
    },
    {
      path: '/story',
      name: 'story',
      // 品牌故事頁 — 懶加載
      component: () => import('../views/StoryView.vue'),
      meta: { title: '品牌故事' },
    },
  ],
})

// 路由守衛：以 cookie 中的 token 判斷登入狀態
router.beforeEach((to) => {
  const isLogin = !!Cookies.get('token')

  // 需登入卻未登入 > 導到登入頁，並記住原本要去的頁面
  if (to.meta.requiresAuth && !isLogin) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  // 已登入卻想進登入 / 註冊頁 > 導回首頁
  if (to.meta.guestOnly && isLogin) {
    return { name: 'index' }
  }
})

// 切換頁面後更新瀏覽器分頁標題
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title}｜${SITE_NAME}` : SITE_NAME
})

export default router
