<script setup lang="ts">
import type { GithubRepo } from '@/types/apiTypes'
import Pill from '../atoms/Pill.vue'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Button from 'primevue/button'
import { ref } from 'vue'

// expects an array of Github repos to be passed in as a prop
type MoreProjectsProps = {
  projects: GithubRepo[]
}

const { projects } = defineProps<MoreProjectsProps>()

const formatDate = (dateString: Date) => {
  const date = new Date(dateString)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()

  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()

  if (isToday) {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `Today at ${hours}:${minutes}`
  } else if (isYesterday) {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `Yesterday at ${hours}:${minutes}`
  } else {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }
}

const shownProjects = ref(projects.slice(0, 3))

const projectsToggled = ref(false)

const toggleMore = () => {
  if (shownProjects.value.length === projects.length) {
    shownProjects.value = projects.slice(0, 3)
  } else {
    shownProjects.value = projects
    projectsToggled.value = true
  }
}

const handleRedirect = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="flex flex-col">
    <div
      v-for="project in shownProjects"
      :key="project.id"
      class="bg-[#15181f] mb-6 p-4 rounded-lg w-full"
      @click="handleRedirect(project.html_url)"
    >
      <div class="flex items-center">
        <h3 class="font-semibold text-white md:text-lg">{{ project.name }}</h3>
        <font-awesome-icon :icon="faArrowRightFromBracket" class="text-[#6366f1] ml-auto" />
      </div>

      <p class="!text-[#a8b1c0]">{{ project.description }}</p>
      <small class="!text-[#a8b1c0]">Last updated: {{ formatDate(project.updated_at) }}</small>
      <div class="flex flex-wrap mt-2 md:mt-3 items-center">
        <small class="!text-[#a8b1c0]"> Main technology: </small
        ><Pill class="ml-2">{{ project.language }}</Pill>
      </div>
    </div>

    <Button label="Load more" class="mx-auto" @click="toggleMore" v-if="!projectsToggled" rounded />
  </div>
</template>
