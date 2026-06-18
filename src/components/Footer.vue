<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-neutural-100 py-16 py-sm-8 px-sm-3">
    <div class="container">
      <nav class="d-flex justify-content-space-between align-items-center mb-6 d-sm-block mb-sm-6">
        <RouterLink to="/"><img class="mb-sm-2" src="../assets/images/logo.svg" alt="logo" /></RouterLink>
        <ul class="d-flex align-items-center d-sm-block px-sm-3">
          <li class="py-sm-3 mb-sm-1">
            <RouterLink class="fw-500 me-10 text-neutral-900 text-decoration-none" to="/products"
              >商品列表</RouterLink
            >
          </li>
          <li class="py-sm-3">
            <RouterLink class="fw-500 py-3 text-neutral-900 text-decoration-none" to="/story"
              >品牌故事</RouterLink
            >
          </li>
        </ul>
      </nav>
      <div class="pt-8 border-top">
        <p class="sm text-center text-neutral-600 mb-1">Copyright ©2025 URBNSTYLE</p>
        <p class="sm text-center text-neutral-600">All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
