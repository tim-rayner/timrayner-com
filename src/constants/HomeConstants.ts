//@ts-nocheck

import {
  EmploymentStatus,
  Technologies,
  type Employment,
  type Project
} from '@/types/homepageTypes'

import LunaTunesImg from '@/assets/png/LunaTunes-screen.png'
import SoundSpotImg from '@/assets/png/soundSpot-screen.png'

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
    title: 'DreamDrive',
    description: 'Your car. Any street. Any dream.',
    image: null,
    link: 'https://github.com/tim-rayner/dream-drive',
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.NEXT,
      Technologies.SUPABASE,
      Technologies.DOCKER,
      Technologies.NODE
    ]
  },
  {
    title: 'Starttline',
    description: 'Reverse engineering Beryl - Helping you get a head start on your local commute',
    link: 'https://github.com/tim-rayner/starttline',
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.NEXT,
      Technologies.SUPABASE,
      Technologies.DOCKER,
      Technologies.NODE
    ]
  }
]

export const EmoploymentHistory: Employment[] = [
  {
    id: 1,
    company: 'Artlist.io',
    status: EmploymentStatus.CURRENTLY_EMPLOYED,
    startDate: '02/01/2025',
    role: 'Full Stack Engineer',
    technologies: [
      Technologies.REACT,
      Technologies.NEXT,
      Technologies.NEST,
      Technologies.TYPESCRIPT,
      Technologies.TRPC,
      Technologies.POSTGRESQL,
      Technologies.REDIS,
      Technologies.AWS,
      Technologies.DOCKER,
      Technologies.GITLAB
    ],
    description: `<p>I am currently working as a Full Stack Engineer at Artlist.io, contributing to a platform that enables creators to discover, manage, and use music, video, templates, and other creative assets in their projects at scale.</p></br>
<p>My work spans the full stack with technologies including Next.js, Nest.js, TypeScript, PostgreSQL, Redis, AWS, Docker, and GitLab, with a focus on building secure, reliable distributed systems.</p></br>
<p>Most recently I transitioned into leading a new cross-functional AI initiative team (under NDA), where I collaborate with engineers, designers, and product stakeholders to explore and integrate emerging AI tools, shaping the next generation of content creation and curation experiences.</p></br>`,
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQE6wfutfUhOtw/company-logo_100_100/company-logo_100_100/0/1671469981018/art_list_logo?e=2147483647&v=beta&t=Jsvcy5hXIYZ-HELigDVidNeQupL2hzeCtMvt0Ce6-4E',
    linkedIn: 'https://www.linkedin.com/products/art-list-artlist/'
  },
  {
    id: 2,
    company: 'Mobilityways (Liftshare)',
    status: EmploymentStatus.PREVIOUSLY_EMPLOYED,
    startDate: '08/08/2022',
    endDate: '30/12/2024',
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
    description: `<p>I was a Frontend Software Developer at Mobilityways, having chosen to focus on specializing in frontend development.</p></br>
    <p>During my time there, I primarily worked with Vue 3, while also gaining experience with React Native, Handlebars for email templates, Razor, C#, and keeping up with my SQL skills.</p></br>
    <p>My time at Mobilityways made me a perfectionist in my work and greatly boosted my confidence in frontend development as a whole.</p></br>`,
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFeeZ02QCGz8w/company-logo_200_200/company-logo_200_200/0/1663758987311/mobilityways_logo?e=2147483647&v=beta&t=YXPRfzJm1fNrrWiOh5FTAgGs8ZWaF4NVPAMp_k3373Q',
    linkedIn: 'https://www.linkedin.com/company/mobilityways'
  },
  {
    id: 3,
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
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGL03XRqjCXnA/company-logo_100_100/company-logo_100_100/0/1630495261709/asprey_management_solutions_logo?e=2147483647&v=beta&t=ZWeGpTGW1m8ypSioRlEtbDwjnV1-4FtDZm9o2d3OuAw'
  },
  {
    id: 4,
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
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQE0_qXjPmCHSw/company-logo_200_200/company-logo_200_200/0/1630646319463/crisp_malt_logo?e=2147483647&v=beta&t=LVfNRhI1yqvnHMPH5vTwLHUtwVVaOyPzD65xCgxrAY0',
    linkedIn: 'https://www.linkedin.com/company/crisp-malt/'
  }
]
