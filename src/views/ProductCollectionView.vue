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

        <!-- 載入中 -->
        <p v-if="isLoading" class="text-center text-neutral-500 py-8">載入中...</p>

        <!-- 空狀態 -->
        <p v-else-if="!favorites.length" class="text-center text-neutral-500 py-8">
          目前還沒有收藏任何商品
        </p>

        <!-- 收藏卡片 -->
        <template v-else>
          <div v-for="fav in favorites" :key="fav.id" class="collection-card">
            <div class="d-flex pb-8 border-bottom mb-8">
              <RouterLink :to="`/products/${fav.product.id}`" class="text-decoration-none me-6">
                <img class="w-120 h-120" :src="fav.product.thumb" :alt="fav.product.name" />
              </RouterLink>
              <div class="collection-info flex-grow-1">
                <!-- 標題 + 移除 -->
                <div class="d-flex justify-content-space-between">
                  <RouterLink
                    :to="`/products/${fav.product.id}`"
                    class="text-decoration-none text-neutral-900"
                  >
                    <h2 class="h5 mb-2">{{ fav.product.name }}</h2>
                  </RouterLink>
                  <button
                    type="button"
                    class="btn-remove text-neutral-500"
                    title="移除收藏"
                    @click="favoriteStore.removeFavorite(fav.id)"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
                <p class="text-neutral-600 mb-2">
                  尺寸<span class="ms-3 text-primary">{{ fav.size }}</span>
                </p>
                <p class="text-neutral-600 mb-2">
                  顏色<span class="ms-3 text-primary">{{ fav.color }}</span>
                </p>
                <!-- 數量調整 + 小計 -->
                <div class="d-flex align-items-center justify-content-space-between">
                  <div class="qty-stepper d-flex align-items-center">
                    <button
                      type="button"
                      class="qty-btn"
                      :disabled="(fav.quantity || 1) <= 1"
                      @click="favoriteStore.updateQuantity(fav.id, (fav.quantity || 1) - 1)"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <span class="qty-value fw-500">{{ fav.quantity || 1 }}</span>
                    <button
                      type="button"
                      class="qty-btn"
                      @click="favoriteStore.updateQuantity(fav.id, (fav.quantity || 1) + 1)"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                  <p class="h6 mb-0">
                    NT${{ formatPrice(fav.product.price * (fav.quantity || 1)) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 總金額 -->
        <div v-if="favorites.length" class="d-flex justify-content-space-between mb-8">
          <span class="h5">總金額</span>
          <span class="h5 text-primary-400">NT${{ formatPrice(favoriteStore.totalPrice) }}</span>
        </div>

        <!-- 點我預約 -->
        <button v-if="favorites.length" type="button" class="d-block mx-auto btn btn-dark">
          立即預約門市試穿
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFavoriteStore } from '@/stores/favorite'
import { formatPrice } from '@/utils/formatePrice'

const favoriteStore = useFavoriteStore()
// storeToRefs 響應性 陣列
const { favorites } = storeToRefs(favoriteStore)

const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await favoriteStore.fetchFavorites()
  isLoading.value = false
})
</script>

<style scoped>
.btn-remove {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: color 0.15s;
}
.btn-remove:hover {
  color: #171717;
}

/* 數量調整：整組用一個外框包起來的膠囊 */
.qty-stepper {
  border: 1px solid #d4d4d4;
  border-radius: 999px;
  overflow: hidden;
}
.qty-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #171717;
  transition: background 0.15s;
}
.qty-btn:hover:not(:disabled) {
  background: #f5f5f5;
}
.qty-btn:disabled {
  color: #d4d4d4;
  cursor: not-allowed;
}
.qty-value {
  min-width: 40px;
  text-align: center;
  font-size: 15px;
}
</style>
