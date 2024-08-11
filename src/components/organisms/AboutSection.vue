<script setup lang="ts">
import Button from 'primevue/button'
import Pill from '@/components/atoms/Pill.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (id: string) => {
  router.push({ hash: `#${id}` })
}
</script>

<template>
  <div id="about">
    <h2>Hi, I'm Tim 👋🏻</h2>

    <p class="my-2">
      A full stack software developer based in the UK. With over 6 years of commercial experience, I
      have a passion for building projects & solving problems with code.
    </p>
    <p class="my-2">
      Scroll to explore more about my work, skills & experience. Or click the button to reach out
    </p>

    <Button label="Contact me" class="my-2" size="small" @click="goTo('contact')" rounded />
  </div>
</template>
