<template>
  <!-- banner -->
  <section class="mt-80 mt-sm-120 banner">
    <h1 class="display-1 text-white mb-4 mb-md-2 display-2-md">URBNSTEP</h1>
    <p class="h3 text-white mb-12 mb-md-8 h5-md">Your Step, Your Statement</p>
    <RouterLink to="/products" class="btn btn-primary">立即選購</RouterLink>
  </section>
  <!-- 新品上市 -->
  <div class="container col-md-4">
    <div class="py-16 py-md-10">
      <div class="row">
        <div class="col-12">
          <h2 class="display-2 text-center mb-3 mb-md-2 h2-md">New Arrival</h2>
          <h3 class="h2 text-center mb-8 mb-md-6 h4-md">新品上市</h3>
        </div>
        <div class="col-6 col-md-2">
          <div class="mb-10 mb-md-6">
            <RouterLink to="/products/1" class="text-decoration-none"
              ><img class="mb-3 mb-md-2" src="../assets/images/index/new-1.png" alt="新品1" />
              <h3 class="h5 text-neutral-900 mb-1 mb-md-0 h6-md">Monoverse</h3>
              <p class="fw-500 text-neutral-900">NT$3,600</p></RouterLink
            >
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="mb-1 mb-md-00 mb-md-6">
            <RouterLink to="/products/2" class="text-decoration-none"
              ><img class="mb-3 mb-md-2" src="../assets/images/index/new-2.png" alt="新品2" />
              <h3 class="h5 text-neutral-900 mb-1 mb-md-0 h6-md">PLATFORM 404</h3>
              <p class="fw-500 text-neutral-900">NT$2,600</p></RouterLink
            >
          </div>
        </div>
        <div class="col-6 col-md-2">
          <RouterLink to="/products/3" class="text-decoration-none"
            ><img class="mb-3 mb-md-2" src="../assets/images/index/new-3.png" alt="新品3" />
            <h3 class="h5 text-neutral-900 mb-1 mb-md-0 h6-md">URBN Force</h3>
            <p class="fw-500 text-neutral-900">NT$3,200</p></RouterLink
          >
        </div>
        <div class="col-6 col-md-2">
          <RouterLink to="/products/4" class="text-decoration-none"
            ><img class="mb-3 mb-md-2" src="../assets/images/index/new-4.png" alt="新品4" />
            <h3 class="h5 text-neutral-900 mb-1 mb-md-0 h6-md">Mode90</h3>
            <p class="fw-500 text-neutral-900">NT$4,000</p></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 熱銷補貨 -->
  <div class="container">
    <div class="py-16 py-md-10">
      <div class="row">
        <div class="col-12 col-md-4">
          <h3 class="h2 mb-4 h4-md">熱銷補貨</h3>
        </div>
        <div class="row flex-md-nowrap overflow-md-auto hotGood-md-row">
          <div class="col-3 hotGood-md-col">
            <div class="position-relative">
              <RouterLink class="text-decoration-none" to="/products/4">
                <img src="../assets/images/product-list/product-4.png" alt="商品4" />
                <p class="sm fw-500 hot-goods">人氣 No.1</p>
              </RouterLink>
            </div>
          </div>
          <div class="col-3 hotGood-md-col">
            <div class="position-relative">
              <RouterLink class="text-decoration-none" to="/products/1">
                <img src="../assets/images/product-list/product-1.png" alt="商品1" />
                <p class="sm fw-500 hot-goods">人氣 No.1</p>
              </RouterLink>
            </div>
          </div>
          <div class="col-3 hotGood-md-col">
            <div class="position-relative">
              <RouterLink class="text-decoration-none" to="/products/7">
                <img src="../assets/images/product-list/product-7.png" alt="商品7" />
                <p class="sm fw-500 hot-goods">人氣 No.1</p>
              </RouterLink>
            </div>
          </div>
          <div class="col-3 hotGood-md-col">
            <div class="position-relative">
              <RouterLink class="text-decoration-none" to="/products/5">
                <img src="../assets/images/product-list/product-5.png" alt="商品5" />
                <p class="sm fw-500 hot-goods">人氣 No.1</p>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 廣告 -->
  <section>
    <img src="../assets/images/index/star.svg" alt="星星" class="star-img" />
    <img src="../assets/images/index/sparkle.svg" alt="火花" class="sparkle-img" />
    <div class="ad"></div>
    <h2 class="mb-4 mb-md-0">
      <span class="display-2 text-white text-center d-md-block mb-md-2 h1-md">URBNSTEP</span>
      <span class="h1 ms-6 me-6 text-primary-300 text-center d-md-block mb-md-2 h2-md">x</span>
      <span class="display-2 text-white text-center d-md-block mb-md-4 h1-md">Kevin Chen</span>
    </h2>
    <p class="h2 text-white text-center mb-8 h5-md mb-md-6">跨界聯名，限量發售</p>
    <p class="lg text-neutral-500 text-center mb-12 d-md-none">
      新銳漫畫家 Kevin Chen 親自操刀設計，街頭能量全面引爆！
    </p>
    <div class="d-none d-md-block">
      <span class="d-block text-neutral-500 text-center mb-md-1"
        >新銳漫畫家 Kevin Chen 親自操刀設計</span
      >
      <span class="d-block text-neutral-500 text-center mb-md-8">街頭能量全面引爆！</span>
    </div>
    <div class="text-center">
      <RouterLink to="/products" class="btn btn-primary">立即搶購</RouterLink>
    </div>
  </section>
  <!-- 依系列選購 -->
  <div class="container">
    <div class="py-16 py-md-10">
      <div class="row">
        <div class="col-12">
          <h3 class="h2 mb-4 h4-md">依系列選購</h3>
        </div>
        <div class="col-3 col-md-2 mb-md-3">
          <RouterLink
            to="/products"
            class="img-card d-block position-relative text-decoration-none"
          >
            <img src="../assets/images/product-list/product-7.png" alt="商品七" />
            <div class="overlay">
              <div class="pic-text">
                <p class="h3 mb-2 text-center text-white h5-lg h6-md">URBN RUNNER</p>
                <p class="h3 text-center text-white h5-lg h6-md">慢跑系列</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-3 col-md-2 mb-md-3">
          <RouterLink
            to="/products"
            class="img-card d-block position-relative text-decoration-none"
          >
            <img src="../assets/images/product-list/product-12.png" alt="商品12" />
            <div class="overlay">
              <div class="pic-text">
                <p class="h3 mb-2 text-center text-white h5-lg h6-md">STREETMODE</p>
                <p class="h3 text-center text-white h5-lg h6-md">滑板系列</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-3 col-md-2">
          <RouterLink
            to="/products"
            class="img-card d-block position-relative text-decoration-none"
          >
            <img src="../assets/images/product-list/product-10.png" alt="商品10" />
            <div class="overlay">
              <div class="pic-text">
                <p class="h3 mb-2 text-center text-white h5-lg h6-md">CHUNK DISTRICT</p>
                <p class="h3 text-center text-white h5-lg h6-md">厚底系列</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-3 col-md-2">
          <RouterLink
            to="/products"
            class="img-card d-block position-relative text-decoration-none"
          >
            <img src="../assets/images/product-list/product-11.png" alt="商品11" />
            <div class="overlay">
              <div class="pic-text">
                <p class="h3 mb-2 text-center text-white h5-lg h6-md">COLLAB ZONE</p>
                <p class="h3 text-center text-white h5-lg h6-md">聯名企劃</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <!-- 穿搭靈感 -->
  <div class="container">
    <div class="py-16 py-md-10 mb-12 mb-md-6">
      <div class="row">
        <div class="col-12">
          <h3 class="h2 mb-4 h4-md">穿搭靈感</h3>
        </div>
        <div class="col-12 overflow-md-auto">
          <div class="inspiration-row">
            <div class="inspiration-col-4">
              <div class="inspiration-row">
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-1.png" alt="穿搭1" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-2.png" alt="穿搭2" />
                </div>
                <div class="inspiration-col-12">
                  <img src="../assets/images/inspiration/inspiration-3.png" alt="穿搭3" />
                </div>
              </div>
            </div>
            <div class="inspiration-col-4">
              <div class="inspiration-row">
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-4.png" alt="穿搭4" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-5.png" alt="穿搭5" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-6.png" alt="穿搭6" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-7.png" alt="穿搭7" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-8.png" alt="穿搭9" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-9.png" alt="穿搭9" />
                </div>
              </div>
            </div>
            <div class="inspiration-col-4">
              <div class="inspiration-row">
                <div class="inspiration-col-12">
                  <img src="../assets/images/inspiration/inspiration-10.png" alt="穿搭10" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-11.png" alt="穿搭11" />
                </div>
                <div class="inspiration-col-6">
                  <img src="../assets/images/inspiration/inspiration-12.png" alt="穿搭12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <HightLight />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HightLight from '@/components/HightLight.vue'
</script>
