import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

// 管理登入狀態：token 與姓名，並同步寫入 / 讀取 cookie
export const useAuthStore = defineStore('auth', () => {
  // 初始值從 cookie 還原，重整頁面仍保持登入
  const token = ref(Cookies.get('token') || '')
  const name = ref(Cookies.get('name') || '')
  const memberId = ref(Cookies.get('memberId') || '')

  const isLogin = computed(() => !!token.value)

  // 登入 / 註冊成功後呼叫：存狀態 + 寫 cookie + 設定 axios 預設 header
  const setAuth = ({ accessToken, user }) => {
    token.value = accessToken
    name.value = user.name
    memberId.value = user.id
    Cookies.set('token', accessToken, { expires: 7 })
    Cookies.set('name', user.name, { expires: 7 })
    Cookies.set('memberId', user.id, { expires: 7 })
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  }

  // 登出：清狀態 + 移除 cookie + 移除 axios header
  const logout = () => {
    token.value = ''
    name.value = ''
    memberId.value = ''
    Cookies.remove('token')
    Cookies.remove('name')
    Cookies.remove('memberId')
    delete axios.defaults.headers.common.Authorization
  }

  // App 啟動時呼叫：若 cookie 有 token，補上 axios header
  const initAuth = () => {
    if (token.value) {
      axios.defaults.headers.common.Authorization = `Bearer ${token.value}`
    }
  }

  return { token, name, memberId, isLogin, setAuth, logout, initAuth }
})
