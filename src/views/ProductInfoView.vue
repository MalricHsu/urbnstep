<template>
  <main v-if="product" class="mt-80 mt-sm-70 container py-16 mb-10 py-md-0">
    <div class="row">
      <!-- 產品圖片 -->
      <!-- 桌面版 -->
      <div class="col-7 d-md-none">
        <div class="product-row">
          <div v-for="(img, i) in product.images" :key="i" class="product-col mb-2">
            <img :src="img" :alt="`${product.name} 照片${i + 1}`" />
          </div>
        </div>
      </div>
      <!-- 手機版 -->
      <div class="d-none d-md-block mb-md-6 product-gallery">
        <Swiper
          :slides-per-view="1"
          :space-between="16"
          :loop="true"
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="(img, i) in product.images" :key="i">
            <img :src="img" :alt="`${product.name} 照片${i + 1}`" />
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
            <li class="breadcrumb-item fw-500 sm-md">{{ product.name }}</li>
          </ol>
        </nav>
        <div class="mb-8">
          <h1 class="h2 mb-4 h4-md mb-md-3">{{ product.name }}</h1>
          <p class="h5 text-primary-400 mb-4 h6-md mb-md-3">
            NT${{ formatPrice(product.price) }}
            <del v-if="product.onSale" class="sm text-neutral-500 fw-400 me-2"
              >NT${{ formatPrice(product.originalPrice) }}</del
            >
          </p>
          <p class="mb-3">{{ product.description }}</p>
        </div>
        <!-- 產品顏色 -->
        <div class="mb-8 mb-md-6">
          <h3 class="mb-2">顏色</h3>
          <ul class="d-flex">
            <li v-for="color in product.colors" :key="color.code" class="me-2 text-center">
              <span
                class="color-swatch w-64 h-64 mb-1 d-block rounded"
                :class="{ 'color-swatch--active': selectedColor === color.name }"
                :style="{ backgroundColor: color.code }"
                @click="selectedColor = color.name"
              ></span>
              <span class="fw-500 text-neutral-600">{{ color.name }}</span>
            </li>
          </ul>
        </div>
        <!-- 產品尺寸 -->
        <div class="mb-12 mb-md-6">
          <h3 class="mb-2">尺寸</h3>
          <div class="d-flex flex-wrap gap-2 mb-2">
            <button
              v-for="size in product.sizes"
              :key="size.eu"
              type="button"
              class="btn btn-product-size"
              :class="{ active: selectedSize === size.eu }"
              :disabled="!size.inStock"
              @click="selectedSize = size.eu"
            >
              {{ size.eu }}({{ size.cm }}cm)
            </button>
          </div>
          <p v-if="product.stock <= 5" class="sm text-danger-300">僅剩 {{ product.stock }} 雙</p>
        </div>
        <!-- 收藏/預約 -->
        <div class="product-action mb-8">
          <!-- 手機版：文字收藏鈕 -->
          <button
            type="button"
            class="btn btn-light btn-favorite d-md-none"
            :disabled="!canFavorite"
            @click="toggleFavorite"
          >
            <i class="bi" :class="isFavorite ? 'bi-heart-fill' : 'bi-heart'"></i>
            {{ isFavorite ? '取消收藏' : '加入收藏' }}
          </button>
          <button type="button" class="btn btn-dark me-md-2">
            <i class="bi bi-handbag"></i>門市預約試穿
          </button>
          <!-- 桌機版：愛心鈕 -->
          <button
            type="button"
            class="like d-none d-md-block"
            :disabled="!canFavorite"
            @click="toggleFavorite"
          >
            <i class="bi" :class="isFavorite ? 'bi-heart-fill' : 'bi-heart'"></i>
          </button>
        </div>
        <!-- 未選顏色/尺寸時的提示 -->
        <p v-if="!canFavorite" class="sm text-neutral-500 mb-8" style="margin-top: -1.5rem">
          請先選擇顏色與尺寸才能加入收藏
        </p>
        <div class="product-material py-3 border-bottom">
          <p class="fw-500 mb-1">商品材質</p>
          <ul>
            <li v-for="(item, i) in materialList" :key="i" class="text-neutral-600">{{ item }}</li>
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
  <div v-if="recommendations.length" class="container">
    <div class="row py-16 py-md-10">
      <div class="col-12">
        <h4 class="h4 mb-4 py-2-5 h5-md">你可能也喜歡...</h4>
      </div>
      <!-- 桌面版 -->
      <div v-for="item in recommendations" :key="item.id" class="col-3 d-md-none">
        <RouterLink
          :to="`/products/${item.id}`"
          class="d-flex flex flex-direction-column text-neutral-900 text-decoration-none"
        >
          <img class="mb-3" :src="item.thumb" :alt="item.name" />
          <h4 class="h6 mb-1">{{ item.name }}</h4>
          <p class="fw-500">NT${{ formatPrice(item.price) }}</p>
        </RouterLink>
      </div>
      <!-- 手機版 -->
      <div class="d-none col-md-4 d-md-block">
        <Swiper
          :slides-per-view="1.2"
          :space-between="16"
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="item in recommendations" :key="item.id">
            <RouterLink :to="`/products/${item.id}`" class="text-neutral-900 text-decoration-none">
              <img class="mb-3" :src="item.thumb" :alt="item.name" />
              <div class="product-info">
                <h4 class="h6 mb-1">{{ item.name }}</h4>
                <p class="fw-500 mb-0">NT${{ formatPrice(item.price) }}</p>
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
import { RouterLink, useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import HightLight from '@/components/HightLight.vue'
import { onMounted, ref, computed, watch } from 'vue'
import axios from 'axios'
import { formatPrice } from '@/utils/formatePrice'
import { useAuthStore } from '@/stores/auth'
import { useFavoriteStore } from '@/stores/favorite'
import { useToastStore } from '@/stores/toast'
import { SITE_NAME } from '@/router'

//從路由接收過來
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const url = import.meta.env.VITE_API_URL
const router = useRouter()
const authStore = useAuthStore()
const favoriteStore = useFavoriteStore()
const toastStore = useToastStore()

const product = ref(null)

// 商品材質
const materialList = computed(() =>
  product.value?.material ? product.value.material.split('；').filter(Boolean) : [],
)

const fetchProduct = async () => {
  try {
    const res = await axios.get(`${url}/products/${props.id}`)
    product.value = res.data
    // 以商品名稱更新分頁標題
    document.title = `${res.data.name}｜${SITE_NAME}`
    // 切換商品時重置選取狀態
    selectedColor.value = ''
    selectedSize.value = ''
    fetchRecommendations()
    restoreSelection()
  } catch (error) {
    console.error(error)
    throw error // 往外拋
  }
}

// onMounted 與 watch 共用：統一接住 fetchProduct 的錯誤
const loadProduct = async () => {
  try {
    await fetchProduct()
  } catch (error) {
    console.error('商品資料載入失敗', error)
  }
}

// 使用者選取的顏色與尺寸
const selectedColor = ref('')
const selectedSize = ref('')

// 顏色與尺寸都選了才能收藏
const canFavorite = computed(() => !!selectedColor.value && !!selectedSize.value)

// 收藏狀態直接來自 store（Nav、收藏頁共用同一份資料）
const isFavorite = computed(() => favoriteStore.isFavorite(props.id))

// 若此商品已收藏，還原當初選的顏色與尺寸
const restoreSelection = async () => {
  if (!authStore.isLogin) return
  // 確保 store 已載入收藏清單（重整後直接進商品頁時）
  if (!favoriteStore.favorites.length) await favoriteStore.fetchFavorites()
  const fav = favoriteStore.getFavorite(props.id)
  if (fav) {
    selectedColor.value = fav.color || ''
    selectedSize.value = fav.size || ''
  }
}

// 加入 / 取消收藏
const toggleFavorite = async () => {
  // 未登入 → 導去登入頁，登入後回到本頁
  if (!authStore.isLogin) {
    router.push({ name: 'login', query: { redirect: `/products/${props.id}` } })
    return
  }
  try {
    if (isFavorite.value) {
      // 取消收藏
      const fav = favoriteStore.getFavorite(props.id)
      await favoriteStore.removeFavorite(fav.id)
    } else {
      // 加入收藏
      await favoriteStore.addFavorite({
        productId: props.id,
        color: selectedColor.value,
        size: selectedSize.value,
      })
    }
  } catch (error) {
    console.error(error)
    toastStore.showToast('操作失敗，請稍後再試', 'error')
  }
}

const recommendations = ref([])
// 一次最多顯示幾筆推薦
const RECOMMEND_LIMIT = 4
const fetchRecommendations = async () => {
  try {
    const res = await axios.get(`${url}/products`)
    const others = res.data.filter((item) => String(item.id) !== String(props.id))
    // 先取同分類的，不足再用其他商品補滿
    const sameCategory = others.filter((item) => item.categoryId === product.value?.categoryId)
    const rest = others.filter((item) => item.categoryId !== product.value?.categoryId)
    recommendations.value = [...sameCategory, ...rest].slice(0, RECOMMEND_LIMIT)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  loadProduct()
})

// 在同一頁切換不同商品 id 時重新抓取
watch(
  () => props.id,
  () => loadProduct(),
)
</script>

<style scoped>
.color-swatch {
  cursor: pointer;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.color-swatch--active {
  border-color: #171717;
}
.like:disabled,
.btn-favorite:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
