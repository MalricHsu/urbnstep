<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="nav">
    <div class="py-4 py-sm-3 container">
      <div class="d-flex d-md-flex-wrap">
        <div class="d-flex align-items-center w-100">
          <div class="me-12">
            <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
          </div>
          <ul class="d-flex d-sm-none" :class="{ 'd-md-none': isIndex }">
            <li class="py-3 me-10">
              <RouterLink class="fw-500 text-decoration-none text-neutral-900" to="/products"
                >商品列表</RouterLink
              >
            </li>
            <li class="py-3">
              <RouterLink class="fw-500 text-decoration-none text-neutral-900" to="/story"
                >品牌故事</RouterLink
              >
            </li>
          </ul>
          <div class="ml-auto d-flex align-items-center" style="gap: 24px">
            <RouterLink
              v-if="authStore.isLogin"
              to="/collection"
              title="我的收藏"
              class="nav-icon-container"
            >
              <i class="bi bi-heart text-neutral-900"></i>
              <span class="icon-badge">{{ favoriteStore.count }}</span>
            </RouterLink>
            <!-- 已登入：顯示姓名 + 登出 -->
            <template v-if="authStore.isLogin">
              <span class="d-flex align-items-center fw-500 text-neutral-900">
                <i class="bi bi-person me-1"></i>歡迎，{{ authStore.name }}
              </span>
              <button
                type="button"
                class="btn-logout fw-500 text-neutral-600"
                @click="handleLogout"
              >
                登出
              </button>
            </template>
            <!-- 未登入：顯示登入 icon -->
            <RouterLink v-else to="/login" title="會員登入">
              <i class="bi bi-person text-neutral-600"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <ul v-show="isIndex" class="d-none d-md-flex w-100">
      <li class="py-3 w-50 text-center bg-primary-200">
        <RouterLink class="fw-500 text-decoration-none text-neutral-900" to="/products"
          >商品列表</RouterLink
        >
      </li>
      <li class="py-3 w-50 text-center bg-primary-100">
        <RouterLink class="fw-500 text-decoration-none text-neutral-900" to="/story"
          >品牌故事</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.btn-logout {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.btn-logout:hover {
  text-decoration: underline;
}
</style>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useFavoriteStore } from '@/stores/favorite'
import { useToastStore } from '@/stores/toast'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const favoriteStore = useFavoriteStore()
const toastStore = useToastStore()

// 透過 path 來判斷是否為首頁，可避免 route.name 尚未解析時的閃爍
const isIndex = computed(() => route.path === '/')

// 進站時若已登入，先載入收藏數量（處理重整）
onMounted(() => {
  if (authStore.isLogin) favoriteStore.fetchFavorites()
})

// 登入狀態改變時同步：登入後載入、登出後清空
watch(
  () => authStore.isLogin,
  (loggedIn) => {
    if (loggedIn) favoriteStore.fetchFavorites()
    else favoriteStore.clear()
  },
)

const handleLogout = () => {
  authStore.logout()
  toastStore.showToast('已登出', 'info')
  router.push('/')
}
</script>
