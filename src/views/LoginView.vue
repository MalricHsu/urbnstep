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
            <RouterLink class="auth-tab auth-tab--active h6 text-neutral-900" to="/login">登入</RouterLink>
            <RouterLink class="auth-tab auth-tab--inactive h6 text-neutral-600" to="/register"
              >註冊</RouterLink
            >
          </div>
          
          <!-- 表單 -->
          <form @submit.prevent>
            <div class="auth-floating">
              <!-- placeholder=" " 讓 :placeholder-shown 偽類可以運作 -->
              <input type="email" class="auth-input" id="loginEmail" placeholder=" ">
              <label class="auth-label" for="loginEmail">電子信箱</label>
            </div>
            
            <div class="auth-floating">
              <input type="password" class="auth-input" id="loginPassword" placeholder=" ">
              <label class="auth-label" for="loginPassword">密碼</label>
            </div>

            <button type="submit" class="btn btn-primary w-100 py-3 mb-6">登入</button>
          </form>

          <div class="text-center text-neutral-500 mb-4">或透過以下方式登入</div>
          
          <div class="d-flex justify-content-center" style="gap: 16px;">
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
import { RouterLink } from 'vue-router'
</script>
