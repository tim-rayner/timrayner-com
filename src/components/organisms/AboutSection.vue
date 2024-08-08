<script setup lang="ts">
import Button from 'primevue/button'
import Pill from '@/components/atoms/Pill.vue'
</script>

<template>
  <div>
    <h2>About Section</h2>
    <p class="my-2">
      This is some text about me, a little to do with my career and a little to do with my personal
      life.
    </p>
    <p class="my-2">
      this is some more text about the portfolio, what I am trying to achieve with it. etc.
    </p>

    <Button label="lets work together" class="my-2" rounded />

    <div class="flex flex-wrap">
      <Pill> Vue </Pill>
      <Pill> React </Pill>
      <Pill> Angular </Pill>
      <Pill> C# </Pill>
    </div>
  </div>
</template>
