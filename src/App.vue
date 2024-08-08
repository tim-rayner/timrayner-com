<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/molecules/Navbar.vue'
import Footer from '@/components/molecules/Footer.vue'
</script>

<template>
  <header></header>
  <!-- TODO: IMPLEMENT LAYOUT -->
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
