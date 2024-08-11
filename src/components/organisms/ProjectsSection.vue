<script setup lang="ts">
import { ref } from 'vue'
import ProjectCarousel from '../molecules/ProjectCarousel.vue'
import { ShowcaseProjects } from '@/constants/HomeConstants'

import { useUser, useRepos, useCommits } from '@/composables/useGithubApi'
import MoreProjects from '../molecules/MoreProjects.vue'

const username = ref('tim-rayner')

const reposQuery = useRepos(username.value)
</script>

<template>
  <div id="projects">
    <h2>Personal projects</h2>

    <div class="main-projects mb-12">
      <p class="my-2">
        Here are some of my favourite side projects I have worked on in my free time, to aid my
        learning and career development:
      </p>
      <div class="">
        <ProjectCarousel :projects="ShowcaseProjects" />
      </div>
    </div>

    <div class="more-projects">
      <p class="my-2 mb-4">
        Here are some more projects I've been working on recently, pulled from my
        <a href="" class="link text-[#6366f1] underline">github</a> profile:
      </p>
      <div class="min-h-[200px]">
        <MoreProjects v-if="reposQuery.data.value" :projects="reposQuery.data.value" />
      </div>
    </div>
  </div>
</template>
