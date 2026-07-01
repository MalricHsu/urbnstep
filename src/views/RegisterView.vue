<template>
  <div class="mt-sm-70 auth-hero-md d-none d-md-block"></div>
  <div class="mt-80 container">
    <div class="row py-16 py-md-0">
      <div class="col-5 d-md-none">
        <div class="auth-hero"></div>
      </div>
      <div class="col-7 col-md-4">
        <div class="auth-form-bg auth-form-bg-md px-20 py-30 py-md-8 px-md-0">
          <h1 class="h3 text-center mb-8 mb-md-6">歡迎</h1>
          <!-- 註冊/登入 tab -->
          <div class="d-flex mb-8 mb-md-6">
            <RouterLink class="auth-tab auth-tab--inactive h6 text-neutral-600" to="/login"
              >登入</RouterLink
            >
            <RouterLink class="auth-tab auth-tab--active h6 text-neutral-900" to="/register"
              >註冊</RouterLink
            >
          </div>

          <!-- 表單 -->
          <form @submit.prevent="handleRegister">
            <div class="auth-floating">
              <input
                v-model.trim="form.name"
                type="text"
                class="auth-input"
                id="registerName"
                placeholder=" "
                required
              />
              <label class="auth-label" for="registerName">姓名</label>
            </div>

            <div class="auth-floating">
              <input
                v-model.trim="form.email"
                type="email"
                class="auth-input"
                id="registerEmail"
                placeholder=" "
                required
              />
              <label class="auth-label" for="registerEmail">電子信箱</label>
            </div>

            <div class="auth-floating">
              <input
                v-model="form.password"
                type="password"
                class="auth-input"
                id="registerPassword"
                placeholder=" "
                required
              />
              <label class="auth-label" for="registerPassword">密碼</label>
            </div>

            <p v-if="errorMsg" class="sm text-danger-300 mb-3">{{ errorMsg }}</p>

            <button type="submit" class="btn btn-primary w-100 py-3 mb-6" :disabled="isLoading">
              {{ isLoading ? '註冊中...' : '註冊' }}
            </button>
          </form>

          <div class="text-center text-neutral-500 mb-4">或透過以下方式註冊</div>

          <div class="d-flex justify-content-center" style="gap: 16px">
            <a href="https://www.facebook.com/" target="_blank" class="social-icon-link">
              <img src="../assets/images/prodcut-logoin/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.apple.com/" target="_blank" class="social-icon-link">
              <img src="../assets/images/prodcut-logoin/apple.svg" alt="Apple" />
            </a>
            <a href="https://www.google.com/" target="_blank" class="social-icon-link">
              <img src="../assets/images/prodcut-logoin/google.svg" alt="Google" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useToastStore } from '@/stores/toast'

const url = import.meta.env.VITE_API_URL
const router = useRouter()
const authStore = useAuthStore()
const toastStore = useToastStore()

const form = ref({
  name: '',
  email: '',
  password: '',
})
const isLoading = ref(false)
const errorMsg = ref('')

const handleRegister = async () => {
  errorMsg.value = ''
  isLoading.value = true
  try {
    const res = await axios.post(`${url}/register`, {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    })
    // store 統一處理
    authStore.setAuth(res.data)
    toastStore.showToast('註冊成功，歡迎加入！')

    // 註冊成功導回首頁
    router.push('/')
  } catch (error) {
    // json-server-auth 會用回應內文回傳錯誤訊息
    errorMsg.value = error.response?.data || '註冊失敗，請稍後再試'
    toastStore.showToast(errorMsg.value, 'error')
  } finally {
    isLoading.value = false
  }
}
</script>
