<script setup lang="ts">
import Button from 'primevue/button'
import TimelineVue from '@/components/organisms/Timeline.vue'
import { EmoploymentHistory } from '@/constants/HomeConstants'
import { useRouter } from 'vue-router'
import { onDownloadCV } from '@/helpers/download-helpers'

const router = useRouter()

const goTo = (id: string) => {
  router.push({ hash: `#${id}` })
}
</script>

<template>
  <div id="about">
    <h2 class="text-xl md:text-2xl">Hi, I'm Tim 👋🏻</h2>

    <p class="my-2 mb-4 md:mb-4 md:w-2/3">
      A full stack software developer based in the UK. With over 5 years of commercial experience, I
      have a passion for building projects & solving problems with code.
    </p>
    <p class="my-2 md:w-2/3">
      Scroll to explore more about my work, skills & experience. Or click the button to reach out
    </p>

    <div class="flex flex-row">
      <Button
        label="Contact me"
        class="my-6 mr-3 p-button-outlined"
        @click="goTo('contact')"
        rounded
      />
      <Button
        label="Download CV"
        class="my-6 mr-3 !hidden md:!block"
        @click="onDownloadCV"
        rounded
      />
    </div>

    <div class="my-6">
      <h2 class="text-xl md:text-2xl md:text-center">My story, so far...</h2>
      <TimelineVue :employmentHistory="EmoploymentHistory" />
    </div>
  </div>
</template>
