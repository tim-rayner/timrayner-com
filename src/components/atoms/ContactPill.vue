<script setup lang="ts">
type ContactPillProps = {
  icon: any
  label: string
}

const { icon, label } = defineProps<ContactPillProps>()
</script>

<template>
  <div
    class="flex items-center content-center text-[#6366f1] bg-[#171b27] py-1 px-6 my-3 text-xs rounded-2xl w-fit cursor-pointer"
  >
    <font-awesome-icon :icon="icon" class="p-2" />
    <p>{{ label }}</p>
  </div>
</template>
