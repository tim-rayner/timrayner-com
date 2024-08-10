<script setup lang="ts">
import ContactPill from '@/components/atoms/ContactPill.vue'
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div id="contact">
    <h2>Let's work together</h2>
    <p>If you'd like to get in contact, feel free to reach out to me:</p>
    <div class="content-between">
      <ContactPill :icon="faEnvelope" label="tim@timrayner.com" />

      <ContactPill :icon="faPhone" label="07512 282 997" />

      <ContactPill :icon="faLocationPin" label="Norfolk, United Kingdom" />
    </div>
  </div>
</template>
