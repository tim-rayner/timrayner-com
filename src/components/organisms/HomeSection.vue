<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="text-center md:text-left" id="home">
    <h1 class="text-6xl my-2">Tim Rayner</h1>
    <h3 class="text-xl mx-2">Full stack software developer</h3>
    <a href="https://github.com/tim-rayner" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="faGithub" class="h-6 mt-6 text-[#727c8d]" />
    </a>
  </div>
</template>
