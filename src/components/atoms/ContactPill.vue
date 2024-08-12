<script setup lang="ts">
type ContactPillProps = {
  icon: any
  label: string
  link?: string
}

const { icon, label } = defineProps<ContactPillProps>()
</script>

<template>
  <div
    v-if="link"
    :class="[
      'flex items-center content-center text-[#6366f1] bg-[#171b27] py-1 pr-6 pl-2 my-3 md:my-4 text-xs md:text-lg rounded-2xl w-fit cursor-pointer'
    ]"
  >
    <a :href="link" target="_blank" rel="noopener noreferrer" class="flex items-center">
      <font-awesome-icon :icon="icon" class="p-2" />
      <p>{{ label }}</p>
    </a>
  </div>
  <div
    v-else
    :class="[
      'flex items-center content-center text-[#6366f1] bg-[#171b27] py-1 pr-6 pl-2 my-3 md:my-4 text-xs md:text-lg rounded-2xl w-fit cursor-pointer'
    ]"
  >
    <font-awesome-icon :icon="icon" class="p-2" />
    <p>{{ label }}</p>
  </div>
</template>
