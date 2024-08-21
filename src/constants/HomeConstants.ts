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
    description: `<p>I am currently working as a Frontend software developer at Mobilityways, after deciding to specialise in a particular area of the stack; I chose to home in on my frontend skills.</p></br>
                  <p>Vue 3 has been the technology I have been primarily working with for the past two years, however I have also worked with the likes of react native, handlebars (email template development), Razor, C# and SQL.</p></br>
                  <p>I would say my time at Mobilityways has made me a true perfectionist about my work, and boosted my confidence in front end development so much.</p></br>`,
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
    description: `
    <p>I worked as a full stack Jr software developer at Asprey Assets, a company providing asset management software to social housing committees via cloud-based single page applications and APIs. Since starting at Asprey, I have really homed in my skills working with Angular, .NET Core, and Microsoft SQL Server. I have become a valued member of the development team, capable of developing and deploying new features and ideas through a continuous integration development pipeline using Git, as well as contributing with other developers utilising this same CI/CD pattern.</p></br>  
    <p>I was assigned as the development team leader in the field of integrating a comprehensive testing infrastructure across the whole stack of our existing system. This is something I learnt and implemented myself as a side-project within my role, as well as my daily development duties. This helped enhance my time management skills as well as my team leading/management skills.</p></br>`,
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
    description: `
    <p>Crisp Malt marks the start of my professional career in software development. I initially joined the company as an Apprentice in October 2019. I completed my apprenticeship in August 2021 gaining a distinction. I was then offered a full-time position as a Full Stack Software Developer. Whilst being employed at Crisp I expanded my skillset significantly into full stack development utilising technologies such as Visual C#, ASP.NET Core, ASP.NET Framework, Entity Framework (Core), SQL, React, and various other relevant cloud-based technologies such as Microsoft Azure.</p></br>
    <p>After transitioning from an apprentice to one of Crisp's primary web developers, I pioneered bringing existing systems into the cloud using Microsoft Azure, as well as building new innovative web-based solutions from the ground up across the entire stack.</p></br>`,
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQE0_qXjPmCHSw/company-logo_200_200/company-logo_200_200/0/1630646319463/crisp_malt_logo?e=1732147200&v=beta&t=ulxYhCNWvnsPkRtyc9YGkY0KiTpqqQMaXJeIYyewWDY',
    linkedIn: 'https://www.linkedin.com/company/crisp-malt/'
  }
]
