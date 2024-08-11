<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const hasScrolled = ref(false)
const currentSection = ref('home')

const sections = ['home', 'about', 'projects', 'contact']

const updateCurrentSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2

  // Check if the page is scrolled all the way to the top
  if (window.scrollY === 0) {
    currentSection.value = 'home'
    return
  }

  for (const section of sections) {
    const element = document.getElementById(section)
    if (
      element &&
      element.offsetTop <= scrollPosition &&
      element.offsetTop + element.offsetHeight > scrollPosition
    ) {
      currentSection.value = section
      break
    }
  }
}

const onScroll = () => {
  hasScrolled.value = window.scrollY > 0
  updateCurrentSection()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  updateCurrentSection() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav
    class="text-white px-6 py-3 rounded-3xl max-w-[375px] md:max-w-[600px] mx-auto mb-6 fixed top-6 left-0 right-0 z-10"
    :class="{ 'bg-[#292929] shadow-purple-500/10 ': hasScrolled }"
  >
    <ul class="flex justify-between">
      <li :class="{ 'text-[#6366f1]': currentSection === 'home' }">
        <RouterLink to="#home">Home</RouterLink>
      </li>
      <li :class="{ 'text-[#6366f1]': currentSection === 'about' }">
        <RouterLink to="#about">About</RouterLink>
      </li>
      <li :class="{ 'text-[#6366f1]': currentSection === 'projects' }">
        <RouterLink to="#projects">Projects</RouterLink>
      </li>
      <li :class="{ 'text-[#6366f1]': currentSection === 'contact' }">
        <RouterLink to="#contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.shadow-purple-500\/10 {
  box-shadow:
    0 4px 7px -1px rgba(99, 102, 241, 0.1),
    0 2px 5px -1px rgba(99, 102, 241, 0.06);
}
</style>
