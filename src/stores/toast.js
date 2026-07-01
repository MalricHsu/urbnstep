import { defineStore } from 'pinia'
import { ref } from 'vue'

// 全站共用的 toast 提示訊息
export const useToastStore = defineStore('toast', () => {
  //  { id, message, type }；type: success | error | info
  const toasts = ref([])
  let seed = 0

  // 顯示一則 toast，預設 2.5 秒後自動移除
  const showToast = (message, type = 'success', duration = 2500) => {
    const id = ++seed
    toasts.value.push({ id, message, type })
    setTimeout(() => removeToast(id), duration)
  }

  const removeToast = (id) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return { toasts, showToast, removeToast }
})
