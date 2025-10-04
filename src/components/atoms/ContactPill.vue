<script setup lang="ts">
type ContactPillProps = {
  icon: any
  label: string
  link?: string
  class?: string
}

const { icon, label, link, class: additionalClass } = defineProps<ContactPillProps>()
</script>

<template>
  <div
    v-if="link"
    :class="[
      'contact-pill flex items-center content-center text-[#6366f1] bg-[#171b27] py-4 px-6 text-sm md:text-lg rounded-2xl w-full cursor-pointer transition-all duration-300 hover:bg-[#1a1f2e] hover:text-white hover:shadow-lg hover:shadow-[#6366f1]/20 hover:border-[#6366f1]/30 border border-transparent group',
      additionalClass
    ]"
  >
    <a :href="link" target="_blank" rel="noopener noreferrer" class="flex items-center w-full">
      <div
        class="bg-[#6366f1]/10 group-hover:bg-[#6366f1]/20 rounded-full p-3 mr-4 transition-all duration-300"
      >
        <font-awesome-icon :icon="icon" class="text-lg" />
      </div>
      <p class="font-medium">{{ label }}</p>
    </a>
  </div>
  <div
    v-else
    :class="[
      'contact-pill flex items-center content-center text-[#6366f1] bg-[#171b27] py-4 px-6 text-sm md:text-lg rounded-2xl w-full cursor-default transition-all duration-300 hover:bg-[#1a1f2e] hover:text-white hover:shadow-lg hover:shadow-[#6366f1]/20 hover:border-[#6366f1]/30 border border-transparent group',
      additionalClass
    ]"
  >
    <div
      class="bg-[#6366f1]/10 group-hover:bg-[#6366f1]/20 rounded-full p-3 mr-4 transition-all duration-300"
    >
      <font-awesome-icon :icon="icon" class="text-lg" />
    </div>
    <p class="font-medium">{{ label }}</p>
  </div>
</template>
