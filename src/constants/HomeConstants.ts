//@ts-nocheck

import {
  Technologies,
  type Project,
  type Employment,
  EmploymentStatus
} from '@/types/homepageTypes'

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

export const EmoploymentHistory: Employment[] = [
  {
    id: 1,
    company: 'Mobilityways (Liftshare)',
    status: EmploymentStatus.CURRENTLY_EMPLOYED,
    startDate: '08/08/2022',
    role: 'Frontend Developer',
    technologies: [
      Technologies.VUE,
      Technologies.REACT_NATIVE,
      Technologies.TYPESCRIPT,
      Technologies.NODE,
      Technologies.PINIA,
      Technologies.RAZOR,
      Technologies.HANDLEBARS,
      Technologies.SQL,
      Technologies.DOCKER,
      Technologies.SASS,
      Technologies.AZURE
    ],
    description: `<p>I am currently a Frontend Software Developer at Mobilityways, having chosen to focus on specializing in frontend development.</p></br>
    <p>For the past two years, I've primarily worked with Vue 3, while also gaining experience with React Native, Handlebars for email templates, Razor, C#, and keeping up with my SQL skills.</p></br>
    <p>My time at Mobilityways has made me a perfectionist in my work and greatly boosted my confidence in frontend development as a whole.</p></br>`,
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFeeZ02QCGz8w/company-logo_200_200/company-logo_200_200/0/1663758987311/mobilityways_logo?e=1732147200&v=beta&t=bs-tFeffCJAqTZxRoR9CoXWTCgMHCgzIbVVlavWS0uw',
    linkedIn: 'https://www.linkedin.com/company/mobilityways'
  },
  {
    id: 2,
    company: 'Asprey Management Solutions',
    status: EmploymentStatus.PREVIOUSLY_EMPLOYED,
    startDate: '01/03/2022',
    endDate: '01/08/2022',
    role: 'Full Stack Developer',
    technologies: [
      Technologies.ANGULAR,
      Technologies.TYPESCRIPT,
      Technologies.CSHARP,
      Technologies.SQL,
      Technologies.NODE,
      Technologies.JEST,
      Technologies.DOTNET
    ],
    description: `<p>As a Full Stack Junior Developer at Asprey Assets, I contributed to building cloud-based, single-page applications and APIs for social housing committees. Working at Asprey allowed me to refine my expertise in Angular, .NET Core, and Microsoft SQL Server. I played a key role in developing and deploying new features through a CI/CD pipeline using Git, collaborating closely with the team.</p></br>  
                  <p>I led the integration of a comprehensive testing infrastructure across our existing system. This self-initiated project, along with my regular development tasks, strengthened my time management and team leadership skills.</p></br>`,
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGL03XRqjCXnA/company-logo_200_200/company-logo_200_200/0/1630495261709/asprey_management_solutions_logo?e=1732147200&v=beta&t=UEutTk2z1DmqVKEXafPjm8IKMt2gazH0Kd8yDxO1uTE',
    linkedIn: 'https://www.linkedin.com/company/asprey-management-solutions'
  },
  {
    id: 3,
    company: 'Crisp Malt',
    status: EmploymentStatus.PREVIOUSLY_EMPLOYED,
    startDate: '01/08/2019',
    endDate: '01/03/2022',
    role: 'Full Stack Developer',
    technologies: [
      Technologies.REACT,
      Technologies.CSHARP,
      Technologies.SQL,
      Technologies.JAVASCRIPT,
      Technologies.HTML,
      Technologies.CSS,
      Technologies.SASS,
      Technologies.ENTITY_FRAMEWORK,
      Technologies.AZURE,
      Technologies.RAZOR,
      Technologies.DOTNET,
      Technologies.VB,
      Technologies.MYSQL,
      Technologies.SWIFT
    ],
    description: `<p>Crisp Malt was where my professional software development career began. I joined as an Apprentice in October 2019 and completed my apprenticeship with distinction by August 2021. Following that, I was offered a full-time role as a Full Stack Developer. During my time at Crisp, I significantly expanded my skills, working with technologies like Visual C#, ASP.NET Core, Entity Framework, SQL, React, and cloud services such as Microsoft Azure.</p></br>
      <p>After transitioning from apprentice to a lead web developer, I spearheaded the migration of existing systems to the cloud using Microsoft Azure, while also building new web solutions across the full stack.</p></br>`,
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQE0_qXjPmCHSw/company-logo_200_200/company-logo_200_200/0/1630646319463/crisp_malt_logo?e=1732147200&v=beta&t=ulxYhCNWvnsPkRtyc9YGkY0KiTpqqQMaXJeIYyewWDY',
    linkedIn: 'https://www.linkedin.com/company/crisp-malt/'
  }
]
