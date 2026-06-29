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
          <li v-for="item in allCategory" :key="item.id" class="mb-4">
            <span
              class="py-2 fw-500 cursor-pointer"
              :class="{ active: clickCategory === item.id }"
              @click="clickCategory = item.id"
              >{{ item.name }}</span
            >
          </li>
        </ul>
      </div>
      <!-- list -->
      <div class="col-10 col-md-4">
        <div class="row">
          <div v-for="product in filterCategory" :key="product.id" class="col-4 col-md-2">
            <div class="mb-12 mb-md-6">
              <RouterLink class="text-decoration-none" :to="`/products/${product.id}`"
                ><img class="mb-3" :src="product.thumb" :alt="product.name" />
                <div class="product-info">
                  <h2 class="h6 mb-1 text-neutral-900">{{ product.name }}</h2>
                  <p class="fw-500 text-neutral-900">NT{{ formatPrice(product.price) }}</p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- hightlight -->
  <HightLight />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HightLight from '@/components/HightLight.vue'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import { formatPrice } from '@/utils/formatePrice'

const allCategory = [
  {
    id: 1,
    name: '所有商品',
  },
  {
    id: 2,
    name: '慢跑鞋',
  },
  {
    id: 3,
    name: '滑板鞋',
  },
  {
    id: 4,
    name: '厚底鞋',
  },
  {
    id: 5,
    name: '限定 / 聯名企劃',
  },
]
const clickCategory = ref(1)

//篩選
const filterCategory = computed(() => {
  if (clickCategory.value === 1) return productList.value
  return productList.value.filter((item) => item.categoryId === clickCategory.value)
})

const url = import.meta.env.VITE_API_URL
const productList = ref([])
const fetchProduct = async () => {
  try {
    const res = await axios.get(`${url}/products`)
    productList.value = res.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchProduct()
})
</script>
