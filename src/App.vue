<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import ToastContainer from './components/ToastContainer.vue'
</script>

<template>
  <Nav />
  <RouterView />
  <Footer />
  <ToastContainer />
</template>
