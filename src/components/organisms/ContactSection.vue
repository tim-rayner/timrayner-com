<script setup lang="ts">
import ContactPill from '@/components/atoms/ContactPill.vue'
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div id="contact">
    <h2 class="text-xl md:text-2xl">Let's work together 🫱🏻‍🫲🏽</h2>
    <!-- TODO: make handshake bob up and down when clicked on from the navbar menu-->
    <p class="my-2 mb-5">If you'd like to get in contact, feel free to reach out to me:</p>
    <div class="content-between">
      <ContactPill
        :icon="faEnvelope"
        label="tim.rayner2020@gmail.com"
        link="mailto:tim.rayner2020@gmail.com"
      />

      <ContactPill :icon="faPhone" label="07512 282 997" link="tel:07512282997" />

      <ContactPill :icon="faLocationPin" label="Norfolk, United Kingdom" />
    </div>
  </div>
</template>
