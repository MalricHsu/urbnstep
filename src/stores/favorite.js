import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import { useAuthStore } from './auth'
import { useToastStore } from './toast'

const url = import.meta.env.VITE_API_URL

// 管理收藏清單，讓 Nav 數量、商品頁愛心、收藏頁共用同一份狀態
export const useFavoriteStore = defineStore('favorite', () => {
  // 每筆為 { id, memberId, productId, color, size, product }
  const favorites = ref([])

  // Nav badge 收藏的商品筆數
  const count = computed(() => favorites.value.length)

  // 總金額：每筆單價 × 數量加總（product 可能不存在時以 0 計）
  const totalPrice = computed(() =>
    favorites.value.reduce(
      (sum, item) => sum + (item.product?.price || 0) * (item.quantity || 1),
      0,
    ),
  )

  // 目前會員的收藏（_expand=product 一併帶出商品資料）
  const fetchFavorites = async () => {
    const authStore = useAuthStore()
    if (!authStore.isLogin) {
      favorites.value = []
      return
    }
    try {
      const res = await axios.get(`${url}/favorites`, {
        params: { memberId: authStore.memberId, _expand: 'product' },
      })
      // 過濾掉對應商品已不存在的收藏，避免後續讀取 product 時出錯
      favorites.value = res.data.filter((item) => item.product)
    } catch (error) {
      console.error(error)
    }
  }

  // 加入收藏
  const addFavorite = async ({ productId, color, size }) => {
    const authStore = useAuthStore()
    const res = await axios.post(`${url}/favorites`, {
      memberId: authStore.memberId,
      productId: Number(productId),
      color,
      size,
      quantity: 1,
    })
    await fetchFavorites()
    useToastStore().showToast('已加入收藏')
    return res.data
  }

  // 取消收藏
  const removeFavorite = async (favoriteId) => {
    await axios.delete(`${url}/favorites/${favoriteId}`)
    await fetchFavorites()
    useToastStore().showToast('已取消收藏', 'info')
  }

  // 更新數量（最少 1）
  const updateQuantity = async (favoriteId, quantity) => {
    const qty = Math.max(1, quantity)
    const target = favorites.value.find((item) => item.id === favoriteId)
    if (target) target.quantity = qty
    try {
      await axios.patch(`${url}/favorites/${favoriteId}`, { quantity: qty })
    } catch (error) {
      console.error(error)
      await fetchFavorites() // 失敗則還原成後端狀態
    }
  }

  // 該商品是否已收藏
  const isFavorite = (productId) =>
    favorites.value.some((item) => String(item.productId) === String(productId))

  // 取出該商品的收藏紀錄（用來拿 favoriteId、color、size）
  const getFavorite = (productId) =>
    favorites.value.find((item) => String(item.productId) === String(productId))

  // 登出時清空
  const clear = () => {
    favorites.value = []
  }

  return {
    favorites,
    count,
    totalPrice,
    fetchFavorites,
    addFavorite,
    removeFavorite,
    updateQuantity,
    isFavorite,
    getFavorite,
    clear,
  }
})
