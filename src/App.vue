<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/molecules/Navbar.vue'
import Footer from '@/components/molecules/Footer.vue'
</script>

<template>
  <header></header>
  <Navbar />
  <main>
    <div class="mt-20" id="top">
      <RouterView />
    </div>
  </main>
  <Footer />
  <!-- TODO: add a scroll based progress bar along the bottom of the page -->
</template>

<style scoped></style>
