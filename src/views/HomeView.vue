<script setup lang="ts">
import HomeSection from '@/components/organisms/HomeSection.vue'
import AboutSection from '@/components/organisms/AboutSection.vue'
import ProjectsSection from '@/components/organisms/ProjectsSection.vue'
import ContactSection from '@/components/organisms/ContactSection.vue'
</script>

<template>
  <div>
    <div class="mb-12">
      <HomeSection />
    </div>

    <div class="mt-12 mb-0">
      <AboutSection />
    </div>

    <div class="mb-12">
      <ProjectsSection />
    </div>

    <div class="my-12">
      <ContactSection />
    </div>
  </div>
</template>
