<template>
  <div class="mt-80 mt-sm-70 container py-16">
    <div class="row">
      <div class="col-6 mx-auto col-md-4">
        <!-- 標題 -->
        <div class="d-flex justify-content-center mb-8">
          <img src="../assets/images/Check.png" alt="收藏系列" class="me-4 me-md-2" />
          <h1 class="h3">我的收藏</h1>
        </div>
        <!-- 營運時間 -->
        <div class="d-flex align-items-center bg-primary-100 border-radius-1 py-4 mb-8">
          <i class="bi bi-truck"></i>
          <p class="fw-500 text-primary-400 d-md-none">門市營業時間：週一至週五 10:00 - 22:00</p>
          <div class="d-none d-md-block">
            <p class="fw-500 text-primary-400">門市營業時間：</p>
            <p class="fw-500 text-primary-400">週一至週五 10:00 - 22:00</p>
          </div>
        </div>
        <!-- 卡片 -->
        <div class="collection-card">
          <RouterLink to="/products/1" class="d-flex pb-8 border-bottom mb-8 text-decoration-none">
            <img
              class="w-120 h-120 me-4"
              src="../assets/images/product-list/product-1.png"
              alt="商品1"
            />
            <div class="collection-info">
              <h2 class="h5 mb-2">PLATFORM 404</h2>
              <p class="text-neutral-600 mb-2">尺寸<span class="ms-3 text-primary">38</span></p>
              <p class="text-neutral-600 mb-2">顏色<span class="ms-3 text-primary">Navy</span></p>
              <p class="h6 text-align-right text-align-left-md">NT$2,600</p>
            </div>
          </RouterLink>
        </div>
        <div class="collection-card">
          <RouterLink to="/products/5" class="d-flex pb-8 border-bottom mb-8 text-decoration-none">
            <img
              class="w-120 h-120 me-4"
              src="../assets/images/product-list/product-5.png"
              alt="商品5"
            />
            <div class="collection-info">
              <h2 class="h5 mb-2">BOOMLOK</h2>
              <p class="text-neutral-600 mb-2">尺寸<span class="ms-3 text-primary">38</span></p>
              <p class="text-neutral-600 mb-2">顏色<span class="ms-3 text-primary">White</span></p>
              <p class="h6 text-align-right text-align-left-md">NT$3,200</p>
            </div>
          </RouterLink>
        </div>
        <div class="collection-card">
          <RouterLink to="/products/4" class="d-flex pb-8 border-bottom mb-8 text-decoration-none">
            <img
              class="w-120 h-120 me-4"
              src="../assets/images/product-list/product-4.png"
              alt="商品4"
            />
            <div class="collection-info">
              <h2 class="h5 mb-2">MELTY KISS</h2>
              <p class="text-neutral-600 mb-2">尺寸<span class="ms-3 text-primary">38</span></p>
              <p class="text-neutral-600 mb-2">顏色<span class="ms-3 text-primary">Violet</span></p>
              <p class="h6 text-align-right text-align-left-md">NT$4,000</p>
            </div>
          </RouterLink>
        </div>
        <!-- 點我預約 -->
        <button type="button" class="d-block mx-auto btn btn-dark">立即預約門市試穿</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
