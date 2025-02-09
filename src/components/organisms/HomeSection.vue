<script setup lang="ts">
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '@/composables/useGithubApi'
import { computed } from 'vue'
import Button from 'primevue/button'
import { onDownloadCV } from '@/helpers/download-helpers'

const userQuery = useUser('tim-rayner')

const avatar_url = computed(() => userQuery.data?.value?.avatar_url)
</script>

<template>
  <div class="text-center md:text-left md:flex md:items-center" id="home">
    <div
      class="avatar mx-auto rounded-full overflow-hidden mb-8 md:mb-0 w-44 md:mx-2"
      v-if="avatar_url"
    >
      <img :src="avatar_url" alt="Tim Rayner" />
    </div>

    <div class="text md:ml-2">
      <h1 class="text-6xl my-6 md:my-3">Tim Rayner</h1>
      <h3 class="text-xl md:text-2xl mx-2 mt-3">Full stack software developer</h3>
      <div class="flex align-middle w-fit mx-auto md:mx-2 my-6 md:mt-3">
        <font-awesome-icon :icon="faMapLocationDot" class="h-6 text-white my-auto" />
        <p class="ml-3 my-auto !text-white !font-semibold">Norwich, UK</p>
      </div>
      <div class="flex justify-center md:justify-start space-x-6 md:space-x-3 my-6 md:my-6">
        <a href="https://github.com/tim-rayner" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="faGithub" class="h-6 text-[#727c8d]" />
        </a>
        <a href="https://linkedin.com/in/tim-rayner" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="faLinkedin" class="h-6 text-[#727c8d]" />
        </a>
      </div>
    </div>

    <div class="mt-6 md:hidden">
      <Button
        label="Download CV"
        icon="pi pi-download"
        class="p-button-rounded !px-6"
        @click="onDownloadCV"
      />
    </div>
  </div>
</template>
