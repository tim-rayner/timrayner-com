<script setup lang="ts">
import type { Project } from '@/types/homepageTypes'
import Pill from '../atoms/Pill.vue'
import Button from 'primevue/button'

import { register } from 'swiper/element/bundle'

type ShowcaseCarouselProps = {
  projects: Project[]
}

register()

const { projects } = defineProps<ShowcaseCarouselProps>()

const spaceBetween = 10

const onProgress = (e: CustomEvent) => {
  const [swiper, progress] = e.detail
}

const onSlideChange = (e: CustomEvent) => {}

const handleRedirect = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <!-- TODO: build a swiperjs carousel: https://swiperjs.com/vue -->

  <swiper-container
    :space-between="spaceBetween"
    :loop="true"
    :pagination="true"
    :autoplay="{ delay: 7500 }"
    :breakpoints="{
      768: {
        slidesPerView: 1
      },
      1020: {
        slidesPerView: 2
      }
    }"
    :pauseOnMouseEnter="true"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
    class="pt-6"
  >
    <swiper-slide v-for="project in projects" :key="project.link" class="!h-auto mb-12">
      <div class="bg-[#15181f] h-full mx-auto rounded-2xl p-4">
        <div class="flex flex-col my-auto">
          <h3>{{ project.title }}</h3>
          <p class="!text-[#a8b1c0]">{{ project.description }}</p>
          <div class="pills-container flex flex-wrap mt-2">
            <Pill v-for="tech in project.technologies" :key="tech"> {{ tech }}</Pill>
          </div>
          <Button label="View project" class="mt-4 w-fit" @click="handleRedirect(project.link)" />
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container::part(pagination) {
  position: relative;
}

swiper-container::part(bullet) {
  background-color: #6366f1;
  opacity: 0.6;
  transition:
    background-color 0.3s,
    transform 0.3s;
}
swiper-container::part(bullet-active) {
  background-color: #6366f1;

  transform: scale(1.4); /* Slightly larger active bullet */
}
</style>
