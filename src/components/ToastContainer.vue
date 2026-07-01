<template>
  <div class="toast-container">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toastStore.toasts"
        :key="toast.id"
        class="toast-item"
        :class="`toast-item--${toast.type}`"
        @click="toastStore.removeToast(toast.id)"
      >
        <i class="bi" :class="iconMap[toast.type]"></i>
        <span>{{ toast.message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useToastStore } from '@/stores/toast'

const toastStore = useToastStore()

const iconMap = {
  success: 'bi-check-circle-fill',
  error: 'bi-x-circle-fill',
  info: 'bi-info-circle-fill',
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 90px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.toast-item {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 240px;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.toast-item--success {
  background-color: #22a06b;
}
.toast-item--error {
  background-color: #e5484d;
}
.toast-item--info {
  background-color: #404040;
}
.toast-item .bi {
  font-size: 18px;
}

/* 進出場動畫 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
