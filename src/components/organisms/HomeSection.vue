<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { useUser } from '@/composables/useGithubApi'
import { computed } from 'vue'

const userQuery = useUser('tim-rayner')

const avatar_url = computed(() => userQuery.data?.value?.avatar_url)
</script>

<template>
  <div class="text-center md:text-left content-center" id="home">
    <div class="avatar mx-auto rounded-full overflow-hidden w-44 mb-8" v-if="avatar_url">
      <img :src="avatar_url" alt="Tim Rayner" />
    </div>
    <h1 class="text-6xl my-2">Tim Rayner</h1>
    <h3 class="text-xl mx-2">Full stack software developer</h3>
    <a href="https://github.com/tim-rayner" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="faGithub" class="h-6 mt-6 mr-4 text-[#727c8d]" />
    </a>
    <a href="https://linkedin.com/in/tim-rayner" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="faLinkedin" class="h-6 mt-6 mr-4 text-[#727c8d]" />
    </a>
  </div>
</template>
