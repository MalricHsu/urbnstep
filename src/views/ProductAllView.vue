<template>
  <main class="mt-80 mt-sm-70 container py-8 mb-12 py-md-4 mb-md-6">
    <!-- 麵包削 -->
    <nav class="mb-6 col-md-4">
      <ol class="d-flex">
        <li class="breadcrumb-item breadcrumb-item-md">
          <RouterLink class="sm-md breadcrumb-link" to="/">首頁</RouterLink>
        </li>
        <li class="breadcrumb-item breadcrumb-item-md">
          <RouterLink class="sm-md breadcrumb-link" to="/products">女鞋</RouterLink>
        </li>
        <li class="sm-md breadcrumb-item breadcrumb-item-md fw-500">所有商品</li>
      </ol>
    </nav>
    <h1 class="h3 mb-6 py-1-5 col-md-4">女鞋</h1>
    <div class="row">
      <!-- category -->
      <div class="col-2 d-md-none">
        <ul class="category">
          <li class="mb-5">
            <RouterLink class="py-2 fw-500 text-decoration-none active" to="/products">所有商品</RouterLink>
          </li>
          <li class="mb-4">
            <RouterLink class="d-block py-3 fw-500 text-decoration-none text-neutral-900" to="/products">慢跑鞋</RouterLink>
          </li>
          <li class="mb-4">
            <RouterLink class="d-block py-3 fw-500 text-decoration-none text-neutral-900" to="/products">滑板鞋</RouterLink>
          </li>
          <li class="mb-4">
            <RouterLink class="d-block py-3 fw-500 text-decoration-none text-neutral-900" to="/products">厚底鞋</RouterLink>
          </li>
          <li class="mb-4">
            <RouterLink class="d-block py-3 fw-500 text-decoration-none text-neutral-900" to="/products"
              >限定 / 聯名企劃</RouterLink
            >
          </li>
        </ul>
      </div>
      <!-- list -->
      <div class="col-10 col-md-4">
        <div class="row">
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" to="/products/1"
                ><img class="mb-3" src="../assets/images/product-list/product-1.png" alt="鞋子1" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">PLATFORM 404</h2>
                  <p class="fw-500 text-neutral-900">NT$2,600</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-48">
              <RouterLink class="text-decoration-none" to="/collection"
                ><img class="mb-3" src="../assets/images/product-list/product-2.png" alt="鞋子2" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">PLATFORM 404</h2>
                  <p class="fw-500 text-neutral-900">NT$2,600</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" to="/products/3"
                ><img class="mb-3" src="../assets/images/product-list/product-3.png" alt="鞋子3" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">VM001</h2>
                  <p class="fw-500 text-neutral-900">NT$2,600</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" to="/products/4"
                ><img class="mb-3" src="../assets/images/product-list/product-4.png" alt="鞋子4" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">Melty Kiss</h2>
                  <p class="fw-500 text-neutral-900">NT$4,000</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" to="/products/5"
                ><img class="mb-3" src="../assets/images/product-list/product-5.png" alt="鞋子5" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">BOOMBLOK</h2>
                  <p class="fw-500 text-neutral-900">NT$3,200</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" to="/products/6"
                ><img class="mb-3" src="../assets/images/product-list/product-6.png" alt="鞋子6" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">BOOMBLOK</h2>
                  <p class="fw-500 text-neutral-900">NT$3,200</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" to="/products/7"
                ><img class="mb-3" src="../assets/images/product-list/product-7.png" alt="鞋子7" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">R:UNER</h2>
                  <p class="fw-500 text-neutral-900">NT$4,000</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" to="/products/8"
                ><img class="mb-3" src="../assets/images/product-list/product-8.png" alt="鞋子8" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">Sugar Snap</h2>
                  <p class="fw-500 text-neutral-900">NT$4,000</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-4 col-md-2">
            <div class="mb-12 mb-md-8">
              <RouterLink class="text-decoration-none" to="/products/9"
                ><img class="mb-3" src="../assets/images/product-list/product-9.png" alt="鞋子9" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">Neofoam</h2>
                  <p class="fw-500 text-neutral-900">NT$4,000</p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="d-none d-md-block col-md-2">
            <div class="mb-12 mb-md-8">
              <RouterLink class="text-decoration-none" to="/products/10"
                ><img
                  class="mb-3"
                  src="../assets/images/product-list/product-10.png"
                  alt="鞋子10"
                />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">Buttermood</h2>
                  <p class="fw-500 text-neutral-900">NT$4,000</p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
        <!-- pagination -->
        <ul class="d-flex justify-content-center align-items-center">
          <li class="me-3 page-item">
            <button type="button" class="btn" disabled>
              <i class="bi bi-chevron-left"></i>
            </button>
          </li>
          <li class="me-2 page-item">
            <button type="button" class="btn active">1</button>
          </li>
          <li class="me-2 page-item">
            <button type="button" class="btn">2</button>
          </li>
          <li class="me-2 page-item">
            <button type="button" class="btn">3</button>
          </li>
          <li class="me-2 page-item">...</li>
          <li class="me-3 page-item">
            <button type="button" class="btn">10</button>
          </li>
          <li class="page-item">
            <button type="button" class="btn">
              <i class="bi bi-chevron-right"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </main>
  <!-- hightlight -->
  <HightLight />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HightLight from '@/components/HightLight.vue'
</script>
