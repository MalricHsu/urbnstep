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
          <div class="ml-auto d-flex align-items-center" style="gap: 16px">
            <RouterLink v-if="route.name === 'collection'" to="/collection" title="我的收藏" class="nav-icon-container">
              <i class="bi bi-heart text-neutral-900"></i>
              <span class="icon-badge">0</span>
            </RouterLink>
            <RouterLink to="/login" title="會員登入">
              <i class="bi bi-person text-neutral-900"></i>
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

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
// 透過 path 來判斷是否為首頁，可避免 route.name 尚未解析時的閃爍
const isIndex = computed(() => route.path === '/')
</script>
