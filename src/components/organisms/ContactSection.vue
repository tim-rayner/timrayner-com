<script setup lang="ts">
import ContactPill from '@/components/atoms/ContactPill.vue'
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { onMounted, ref } from 'vue'

const handshakeRef = ref<HTMLElement>()

onMounted(() => {
  // Add subtle animation to handshake emoji
  if (handshakeRef.value) {
    handshakeRef.value.style.animation = 'bounce 2s infinite'
  }
})
</script>

<template>
  <div id="contact" class="relative">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 rounded-3xl -m-4"></div>

    <div class="relative z-10">
      <!-- Header section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Let's work together
          <span ref="handshakeRef" class="inline-block text-4xl">🫱🏻‍🫲🏽</span>
        </h2>
        <p class="text-lg text-[#727c8d] max-w-2xl mx-auto leading-relaxed">
          I'm always excited to discuss new opportunities, collaborate on interesting projects, or
          simply chat about technology. Feel free to reach out!
        </p>
      </div>

      <!-- Contact methods grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="group">
          <ContactPill
            :icon="faEnvelope"
            label="tim.rayner2020@gmail.com"
            link="mailto:tim.rayner2020@gmail.com"
            class="w-full justify-center"
          />
        </div>

        <div class="group">
          <ContactPill
            :icon="faPhone"
            label="07512 282 997"
            link="tel:07512282997"
            class="w-full justify-center"
          />
        </div>

        <div class="group">
          <ContactPill
            :icon="faLocationPin"
            label="Norfolk, United Kingdom"
            class="w-full justify-center"
          />
        </div>
      </div>

      <!-- Call to action section -->
      <div
        class="text-center bg-[#171b27]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#6366f1]/20"
      >
        <h3 class="text-xl md:text-2xl font-semibold mb-4 text-white">
          Ready to build something amazing?
        </h3>
        <p class="text-[#727c8d] mb-6 max-w-xl mx-auto">
          Whether you have a project in mind, need technical consultation, or just want to connect,
          I'd love to hear from you. Let's create something great together!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:tim.rayner2020@gmail.com"
            class="bg-[#6366f1] hover:bg-[#5b5cf0] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/25"
          >
            Send me an email
          </a>
          <a
            href="tel:07512282997"
            class="border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Call me directly
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.group:hover .contact-pill {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.15);
}
</style>
