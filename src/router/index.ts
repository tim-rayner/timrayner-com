import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash)
      if (element) {
        setTimeout(() => {
          let yOffset = -100 // default y offset in pixels from the top
          console.log(to.name)
          if (to.name === 'top' || to.name === 'home') {
            yOffset = -200 // no offset for 'top' or 'home'
          }
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }, 0)
        return { el: to.hash, behavior: 'smooth' }
      }
    }
  }
})

export default router
