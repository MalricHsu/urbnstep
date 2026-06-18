<template>
  <main class="mt-80 mt-sm-70 container py-16 mb-10 py-md-0">
    <div class="row">
      <!-- 產品圖片 -->
      <!-- 桌面版 -->
      <div class="col-7 d-md-none">
        <div class="product-row">
          <div class="product-col mb-2">
            <img src="../assets/images/product-info/image-1.png" alt="照片1" />
          </div>
          <div class="product-col mb-2">
            <img src="../assets/images/product-info/image-2.png" alt="照片2" />
          </div>
          <div class="product-col mb-2">
            <img src="../assets/images/product-info/image-3.png" alt="照片3" />
          </div>
          <div class="product-col mb-2">
            <img src="../assets/images/product-info/image-4.png" alt="照片4" />
          </div>
          <div class="product-col mb-2">
            <img src="../assets/images/product-info/image-5.png" alt="照片5" />
          </div>
          <div class="product-col mb-2">
            <img src="../assets/images/product-info/image-6.png" alt="照片6" />
          </div>
          <div class="product-col">
            <img src="../assets/images/product-info/image-7.png" alt="照片7" />
          </div>
          <div class="product-col">
            <img src="../assets/images/product-info/image-8.png" alt="照片8" />
          </div>
        </div>
      </div>
      <!-- 手機版 -->
      <div class="d-none d-md-block mb-md-6">
        <Swiper
          :slides-per-view="1"
          :space-between="16"
          :loop="true"
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide>
            <img src="../assets/images/product-info/image-1.png" alt="照片1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/images/product-info/image-2.png" alt="照片2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/images/product-info/image-3.png" alt="照片3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/images/product-info/image-4.png" alt="照片4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/images/product-info/image-5.png" alt="照片5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/images/product-info/image-6.png" alt="照片6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/images/product-info/image-7.png" alt="照片7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../assets/images/product-info/image-8.png" alt="照片8" />
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- 產品描述 -->
      <div class="col-5 col-md-4">
        <!-- 麵包削 -->
        <nav class="mb-3 mb-md-2">
          <ol class="d-flex">
            <li class="breadcrumb-item">
              <RouterLink class="breadcrumb-link fw-500 sm-md" to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink class="breadcrumb-link fw-500 sm-md" to="/products">女鞋</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink class="breadcrumb-link fw-500 sm-md" to="/products">滑板鞋</RouterLink>
            </li>
            <li class="breadcrumb-item fw-500 sm-md">Platform 404</li>
          </ol>
        </nav>
        <div class="mb-8">
          <h1 class="h2 mb-4 h4-md mb-md-3">Platform 404</h1>
          <p class="h5 text-primary-400 mb-4 h6-md mb-md-3">
            NT$2,600
            <del class="sm text-neutral-500 fw-400 me-2">NT$3,200</del>
          </p>
          <p class="mb-3">
            Platform 404
            以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。
          </p>
          <p>
            鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。
          </p>
        </div>
        <!-- 產品顏色 -->
        <div class="mb-8 mb-md-6">
          <h3 class="mb-2">顏色</h3>
          <ul class="d-flex">
            <li class="me-2">
              <RouterLink class="fw-500 text-decoration-none text-neutral-600 d-block text-center" to="/products/1"
                ><img
                  class="w-64 h-64 mb-1"
                  src="../assets/images/product-list/product-1.png"
                  alt="藍色"
                />藍色</RouterLink
              >
            </li>
            <li>
              <RouterLink class="fw-500 text-decoration-none text-neutral-600 d-block text-center" to="/products/2"
                ><img
                  class="w-64 h-64 mb-1"
                  src="../assets/images/product-list/product-2.png"
                  alt="卡其色"
                />卡其色</RouterLink
              >
            </li>
          </ul>
        </div>
        <!-- 產品尺寸 -->
        <div class="mb-12 mb-md-6">
          <h3 class="mb-2">尺寸</h3>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button type="button" class="btn btn-product-size active">35(22.5cm)</button>
            <button type="button" class="btn btn-product-size">36(23.0cm)</button>
            <button type="button" class="btn btn-product-size">37(23.5cm)</button>
            <button type="button" class="btn btn-product-size">38(24.0cm)</button>
            <button type="button" class="btn btn-product-size">39(24.5cm)</button>
            <button type="button" class="btn btn-product-size">40(25.0cm)</button>
            <button type="button" class="btn btn-product-size">41(26.0cm)</button>
            <button type="button" class="btn btn-product-size" disabled>42(26.5cm)</button>
            <button type="button" class="btn btn-product-size" disabled>43(27.0cm)</button>
          </div>
          <p class="sm text-danger-300">僅剩 3 雙</p>
        </div>
        <!-- 收藏/預約 -->
        <div class="product-action mb-8">
          <button type="button" class="btn btn-light btn-favorite d-md-none">
            <i class="bi bi-heart"></i>加入收藏
          </button>
          <button type="button" class="btn btn-dark me-md-2">
            <i class="bi bi-handbag"></i>門市預約試穿
          </button>
          <button type="button" class="like d-none d-md-block">
            <i class="bi bi-heart"></i>
          </button>
        </div>
        <div class="product-material py-3 border-bottom">
          <p class="fw-500 mb-1">商品材質</p>
          <ul>
            <li class="text-neutral-600">鞋面：合成皮革（Synthetic Leather）</li>
            <li class="text-neutral-600">內裡：透氣網布材質，提升舒適與排汗性</li>
            <li class="text-neutral-600">鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果</li>
            <li class="text-neutral-600">鞋帶：聚酯纖維，耐拉扯不易鬆脫</li>
          </ul>
        </div>
        <div class="purchase-notice py-3 border-bottom">
          <p class="fw-500 mb-1">購買須知</p>
          <ul>
            <li class="text-neutral-600">商品顏色因螢幕顯示可能略有差異，請以實品為準。</li>
            <li class="text-neutral-600">建議首次穿著前試穿確認尺寸，避免影響退換貨權益。</li>
            <li class="text-neutral-600">
              本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。
            </li>
          </ul>
        </div>
        <div class="maintenance py-3 border-bottom">
          <p class="fw-500 mb-1">保養方式</p>
          <ul>
            <li class="text-neutral-600">
              商建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。
            </li>
            <li class="text-neutral-600">
              收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。
            </li>
            <li class="text-neutral-600">
              若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <!-- 你可能有興趣 -->
  <div class="container">
    <div class="row py-16 py-md-10">
      <div class="col-12">
        <h4 class="h4 mb-4 py-2-5 h5-md">你可能也喜歡...</h4>
      </div>
      <div class="col-3 d-md-none">
        <RouterLink to="/products/3" class="d-flex flex flex-direction-column text-neutral-900 text-decoration-none">
          <img class="mb-3" src="../assets/images/product-list/product-3.png" alt="商品3" />
          <h4 class="h6 mb-1">VM001</h4>
          <p class="fw-500">NT$2,600</p>
        </RouterLink>
      </div>
      <div class="col-3 d-md-none">
        <RouterLink to="/products/4" class="d-flex flex flex-direction-column text-neutral-900 text-decoration-none">
          <img class="mb-3" src="../assets/images/product-list/product-4.png" alt="商品4" />
          <h4 class="h6 mb-1">Melty Kiss</h4>
          <p class="fw-500">NT$4,000</p>
        </RouterLink>
      </div>
      <div class="col-3 d-md-none">
        <RouterLink to="/products/5" class="d-flex flex flex-direction-column text-neutral-900 text-decoration-none">
          <img class="mb-3" src="../assets/images/product-list/product-5.png" alt="商品5" />
          <h4 class="h6 mb-1">BOOMBLOK</h4>
          <p class="fw-500">NT$3,200</p>
        </RouterLink>
      </div>
      <div class="col-3 d-md-none">
        <RouterLink to="/products/8" class="d-flex flex flex-direction-column text-neutral-900 text-decoration-none">
          <img class="mb-3" src="../assets/images/product-list/product-8.png" alt="商品8" />
          <h4 class="h6 mb-1">Sugar Snap</h4>
          <p class="fw-500">NT$3,200</p>
        </RouterLink>
      </div>
      <div class="d-none col-md-4 d-md-block">
        <Swiper
          :slides-per-view="1.2"
          :space-between="16"
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide>
            <RouterLink to="/products/3" class="text-neutral-900 text-decoration-none">
              <img class="mb-3" src="../assets/images/product-list/product-3.png" alt="商品3" />
              <div class="product-info">
                <h4 class="h6 mb-1">VM001</h4>
                <p class="fw-500 mb-0">NT$2,600</p>
              </div>
            </RouterLink>
          </SwiperSlide>

          <SwiperSlide>
            <RouterLink to="/products/4" class="text-neutral-900 text-decoration-none">
              <img class="mb-3" src="../assets/images/product-list/product-4.png" alt="商品4" />
              <div class="product-info">
                <h4 class="h6 mb-1">Melty Kiss</h4>
                <p class="fw-500 mb-0">NT$4,000</p>
              </div>
            </RouterLink>
          </SwiperSlide>

          <SwiperSlide>
            <RouterLink to="/products/5" class="text-neutral-900 text-decoration-none">
              <img class="mb-3" src="../assets/images/product-list/product-5.png" alt="商品5" />
              <div class="product-info">
                <h4 class="h6 mb-1">BOOMBLOK</h4>
                <p class="fw-500 mb-0">NT$3,200</p>
              </div>
            </RouterLink>
          </SwiperSlide>

          <SwiperSlide>
            <RouterLink to="/products/8" class="text-neutral-900 text-decoration-none">
              <img class="mb-3" src="../assets/images/product-list/product-8.png" alt="商品8" />
              <div class="product-info">
                <h4 class="h6 mb-1">Sugar Snap</h4>
                <p class="fw-500 mb-0">NT$3,200</p>
              </div>
            </RouterLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  <HightLight />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import HightLight from '@/components/HightLight.vue'
</script>
