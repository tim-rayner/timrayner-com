//@ts-nocheck

import { Technologies, type Project } from '@/types/homepageTypes'

import SoundSpotImg from '@/assets/png/soundSpot-screen.png'
import LunaTunesImg from '@/assets/png/LunaTunes-screen.png'

export const ShowcaseProjects: Project[] = [
  {
    title: 'SoundSpot',
    description:
      'SoundSpot is a digital rating platform based on the film equivalent, Letterboxd. Its a POC project that I built with Nuxt and MongoDB. Users can browse ratings anonymously, or sign in via spotify to rate and review songs.',
    image: SoundSpotImg,
    link: 'https://github.com/tim-rayner/sound-spot',
    technologies: [
      Technologies.VUE,
      Technologies.NUXT,
      Technologies.TYPESCRIPT,
      Technologies.VITE,
      Technologies.MONGO
    ]
  },
  {
    title: 'LunaTunes',
    description:
      'LunaTunes is a Nuxt based horoscope music app powered by AI & Spotify. Users can read their daily horoscope and find songs relevant to their signs reading for that day.',
    image: LunaTunesImg,
    link: 'https://github.com/tim-rayner/astro-beats',
    technologies: [
      Technologies.VUE,
      Technologies.NUXT,
      Technologies.TYPESCRIPT,
      Technologies.AI,
      Technologies.REACT_NATIVE,
      Technologies.EXPRESS
    ]
  },
  {
    title: 'Airbnb Clone (WIP)',
    description:
      'This work in progress project is a clone of Airbnb. It is being built with React and Next,js taking inspiration from the UX design masters at Airbnb.',
    image: 'https://via.placeholder.com/150',
    link: 'https://github.com/tim-rayner/airbnb-clone',
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.NEXT,
      Technologies.EXPRESS
    ]
  }
]
