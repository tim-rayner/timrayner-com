export enum Technologies {
  VUE = 'Vue',
  PINIA = 'Pinia',
  VITE = 'Vite',
  TYPESCRIPT = 'TypeScript',
  JAVASCRIPT = 'JavaScript',
  SQL = 'SQL',
  HTML = 'HTML',
  CSS = 'CSS',
  SASS = 'Sass',
  ANGULAR = 'Angular',
  REACT = 'React',
  NODE = 'Node',
  EXPRESS = 'Express',
  MONGO = 'MongoDB',
  FIREBASE = 'Firebase',
  GRAPHQL = 'GraphQL',
  POSTGRES = 'PostgreSQL',
  MYSQL = 'MySQL',
  DOCKER = 'Docker',
  KUBERNETES = 'Kubernetes',
  GO = 'Go',
  PYTHON = 'Python',
  JAVA = 'Java',
  CSHARP = 'C#',
  RUBY = 'Ruby',
  PHP = 'PHP',
  RUST = 'Rust',
  SWIFT = 'Swift',
  KOTLIN = 'Kotlin',
  FLUTTER = 'Flutter',
  REACT_NATIVE = 'React Native',
  CYPRESS = 'Cypress',
  JEST = 'Jest',
  MOCHA = 'Mocha',
  CHAI = 'Chai',
  JASMINE = 'Jasmine',
  KARMA = 'Karma',
  AI = 'AI',
  ENTITY_FRAMEWORK = 'Entity Framework',
  RAZOR = 'Razor',
  BLAZOR = 'Blazor',
  DOTNET = '.NET',
  VB = 'Visual Basic',
  NUXT = 'Nuxt',
  NEXT = 'Next',
  REDUX = 'Redux',
  SVELTE = 'Svelte',
  SVELTEKIT = 'SvelteKit',
  HANDLEBARS = 'Handlebars',
  AZURE = 'Azure',
  NEST = 'Nest',
  MSW = 'Mock Service Worker',
  REDIS = 'Redis',
  POSTGRESQL = 'PostgreSQL',
  TRPC = 'tRPC',
  AWS = 'AWS',
  GITLAB = 'GitLab'
}

export type Project = {
  title: string
  description: string
  image: string
  link: string
  technologies: Technologies[]
}

export type Employment = {
  id: number
  status: EmploymentStatus
  startDate: string
  endDate?: string
  company: string
  role: string
  description: string
  technologies: Technologies[]
  logo?: string
  linkedIn?: string
}

export enum EmploymentStatus {
  CURRENTLY_EMPLOYED = 'currently employed',
  PREVIOUSLY_EMPLOYED = 'previously'
}
