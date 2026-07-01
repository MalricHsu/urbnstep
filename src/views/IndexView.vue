<template>
  <!-- banner -->
  <section class="mt-80 mt-sm-120 banner">
    <h1 class="display-1 text-white mb-4 mb-md-2 display-2-md">URBNSTEP</h1>
    <p class="h3 text-white mb-12 mb-md-8 h5-md">Your Step, Your Statement</p>
    <RouterLink to="/products" class="btn btn-primary">立即選購</RouterLink>
  </section>
  <!-- 新品上市 -->
  <div class="container">
    <div class="py-16 py-md-10">
      <div class="row">
        <div class="col-12">
          <h2 class="display-2 text-center mb-3 mb-md-2 h2-md">New Arrival</h2>
          <h3 class="h2 text-center mb-8 mb-md-6 h4-md">新品上市</h3>
        </div>

        <div
          v-for="newItem in newProductList"
          :key="newItem.id"
          class="col-6 col-md-2 mb-10 mb-md-6"
        >
          <RouterLink to="/products" class="text-decoration-none">
            <img class="mb-3 mb-md-2" :src="newItem.image" :alt="newItem.name" />
            <h3 class="h5 text-neutral-900 mb-1 mb-md-0 h6-md">{{ newItem.name }}</h3>
            <p class="fw-500 text-neutral-900">NT${{ formatPrice(newItem.price) }}</p>
          </RouterLink>
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
          <div v-for="hotItem in hotProductList" :key="hotItem.id" class="col-3 hotGood-md-col">
            <div class="position-relative">
              <RouterLink class="text-decoration-none" :to="`/products/${hotItem.productId}`">
                <img :src="hotItem.image" :alt="hotItem.id" />
                <p class="sm fw-500 hot-goods">人氣 No.1</p>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 廣告 -->
  <section class="ad">
    <img src="../assets/images/index/star.svg" alt="星星" class="star-img" />
    <img src="../assets/images/index/sparkle.svg" alt="火花" class="sparkle-img" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mb-4 mb-md-0">
            <span class="display-2 text-white text-center d-md-block mb-md-2 h1-md">URBNSTEP</span>
            <span class="h1 ms-6 me-6 text-primary-300 text-center d-md-block mb-md-2 h2-md"
              >x</span
            >
            <span class="display-2 text-white text-center d-md-block mb-md-4 h1-md"
              >Kevin Chen</span
            >
          </div>
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
            <RouterLink to="/products"
              ><button type="button" class="btn btn-primary">立即搶購</button></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 依系列選購 -->
  <div class="container">
    <div class="py-16 py-md-10">
      <div class="row">
        <div class="col-12">
          <h3 class="h2 mb-4 h4-md">依系列選購</h3>
        </div>
        <div
          v-for="category in categoriesProductList"
          :key="category.id"
          class="col-3 col-md-2 mb-md-3"
        >
          <RouterLink
            :to="`/products/${category.price}`"
            class="img-card d-block position-relative text-decoration-none"
          >
            <img :src="category.image" :alt="category.name" />
            <div class="overlay">
              <div class="pic-text">
                <p class="h3 mb-2 text-center text-white h5-lg h6-md">{{ category.slug }}</p>
                <p class="h3 text-center text-white h5-lg h6-md">{{ category.name }}</p>
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
import { onMounted, ref } from 'vue'
import axios from 'axios'
import HightLight from '@/components/HightLight.vue'
import { formatPrice } from '@/utils/formatePrice'

const url = import.meta.env.VITE_API_URL
const newProductList = ref([])
const hotProductList = ref([])
const categoriesProductList = ref([])

const fetchData = async (endpoint, targetRef) => {
  try {
    const res = await axios.get(`${url}/${endpoint}`)
    targetRef.value = res.data
  } catch (error) {
    console.error(error)
    throw error // 往外拋，讓呼叫端決定如何處理
  }
}

onMounted(async () => {
  try {
    await Promise.all([
      fetchData('newProduct', newProductList),
      fetchData('hotProduct', hotProductList),
      fetchData('categories', categoriesProductList),
    ])
  } catch (error) {
    console.error('首頁資料載入失敗', error)
  }
})
</script>
