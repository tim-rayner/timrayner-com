<script setup lang="ts">
import { Employment } from '@/types/homepageTypes'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Timeline from 'primevue/timeline'
import { ref } from 'vue'
import Pill from '../atoms/Pill.vue'

type TimelineProps = {
  employmentHistory: Employment[]
}

const { employmentHistory } = defineProps<TimelineProps>()

const redirect = (url: string) => {
  window.open(url, '_blank')
}

const isEvenId = (id: number) => {
  return id % 2 === 0
}
</script>

<template>
  <Timeline :value="employmentHistory" align="alternate" class="customized-timeline pt-12">
    <template #marker="slotProps">
      <span
        class="flex w-16 h-16 items-center justify-center text-white z-10 shadow-sm rounded-full overflow-hidden cursor-pointer"
        :class="{ 'pulsing-shadow': slotProps.item?.status === 'currently employed' }"
        @click="redirect(slotProps.item?.linkedIn)"
      >
        <img :src="slotProps.item?.logo" alt="company logo" />
      </span>
    </template>
    <template #content="slotProps">
      <Card class="!bg-[#15181f] mb-6 rounded-lg w-full">
        <template #title>
          {{ slotProps.item?.company }}
        </template>
        <template #subtitle>
          <small
            >{{ slotProps.item?.startDate }} - {{ slotProps.item?.endDate ?? 'Present' }}</small
          >
        </template>
        <template #content>
          <div class="text-black" v-html="slotProps.item?.description"></div>

          <div
            class="pills-container flex flex-wrap mb-6 w-fit"
            :class="{ ' ml-auto': isEvenId(slotProps.item?.id) }"
          >
            <Pill v-for="tech in slotProps.item?.technologies" :key="tech"> {{ tech }}</Pill>
          </div>
          <Button label="LinkedIn" @click="redirect(slotProps.item?.linkedIn)" />
        </template>
      </Card>
    </template>
  </Timeline>
</template>
<style lang="scss">
.pulsing-shadow {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(168, 128, 255, 0.1); /* Brighter purple with 10% opacity */
  }
  70% {
    box-shadow: 0 0 20px 20px rgba(168, 128, 255, 0); /* Brighter purple with 0% opacity */
  }
  100% {
    box-shadow: 0 0 0 0 rgba(168, 128, 255, 0); /* Brighter purple with 0% opacity */
  }
}

.p-timeline-event-separator {
  z-index: 0;
  margin-top: 10px;
}

.p-card-title {
  color: #fff;
}

.p-card-content {
  p {
    color: #a8b1c0 !important;
  }
}
.p-timeline-event-connector {
  background-color: #6365f173 !important;
}

@media screen and (max-width: 1250px) {
  .p-timeline-event {
    margin-bottom: 3rem !important;
  }

  .p-timeline-event-opposite {
    display: none !important ;
  }

  .p-timeline-event-content {
    padding: 10px !important;
  }

  .p-timeline-event-separator {
    margin-top: 10px;
  }

  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
      display: none;
    }
  }
}
</style>
