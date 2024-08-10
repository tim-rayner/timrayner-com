export enum Technologies {
  VUE = 'Vue',
  PINIA = 'Pinia',
  VITE = 'Vite',
  TYPESCRIPT = 'TypeScript',
  JAVASCRIPT = 'JavaScript',
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
  SVELTEKIT = 'SvelteKit'
}

export type Project = {
  title: string
  description: string
  image: string
  link: string
  technologies: Technologies[]
}
