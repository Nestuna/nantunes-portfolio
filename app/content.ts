import { Project, Skill } from './types'

export const about = `
Auparavant professionnel dans le médico-social, je me suis vite intéressé à l’informatique en autodidacte.
A la recherche de nouveaux défis, j’ai entrepris de reprendre des études en informatique qui aboutit á l’obtention de mon titre. Je suis donc maintenant un développeur avec des soft skills développés de par mon background, et de bonnes compétences techniques acquis lors de mon expérience en alternance.
`

// image name must correspond to skill name : /images/[skill].png
export const skills: Skill[] = [
  { name: 'typescript' },
  { name: 'angular' },
  { name: 'react' },
  { name: 'jest' },
  { name: 'webdriverio', title: 'Webdriver I/O' },
  { name: 'python' },
  { name: 'django' },
  { name: 'gitlabci', title: 'Gitlab CI' },
  { name: 'docker' }
]

export const projects: Project[] = [
  {
    id: 2,
    year: 2024,
    title: 'Refonte UI de la navigation de Nudgis',
    projectContext: 'Projet professionnel chez Ubicast',
    description: 'Design et refonte UI / UX  intégrale de la navigation de Nudgis',
    stack: ['Angular', 'Material', 'Jest', 'Webdriver I/O', 'Django', 'Docker', ],
    repositories: [],
    projectLink: ''
  },
  {
    id: 5,
    year: 2024,
    title: 'JukeBoxify (En projet)',
    projectContext: 'Projet personnel',
    description: 'Permettre à des personnes d’ajouter des morceaux à une liste de lecture Spotify en cours.',
    stack: ['React', 'Next', 'MUI', 'PWA', 'Fast API', 'MongoDB'],
    repositories: [],
    projectLink: ''
  },
  {
    id: 1,
    year: 2024,
    title: 'Portfolio ',
    projectContext: 'Projet personnel',
    description: 'Site vitrine pour exposer mes compétences mais aussi pour m’entraîner sur React et Next',
    stack: ['React', 'Next', 'Chakra UI'],
    repositories: [{ title: 'Web site repository', href: 'https://github.com/Nestuna/nantunes-portfolio'}],
    projectLink: ''
  },
  {
    id: 3,
    year: 2023,
    title: 'Cuistou',
    projectContext: 'Projet universitaire autonome en groupe',
    description: 'Proposer des recettes en accord avec les fruits et légumes de saisons.',
    stack: ['React', 'Next', 'MUI', 'Express.js', 'MongoDB'],
    repositories: [{ title: 'Client app repository', href: 'https://github.com/Nestuna/cuistou'}],
    projectLink: ''
  },
  {
    id: 4,
    year: 2020,
    title: 'Butterfly - Mobile App',
    projectContext: 'Projet universitaire en duo',
    description: 'Messagerie éphémère et privée.',
    stack: ['React Native', 'Docker', 'Django Rest', 'MySQL'],
    repositories: [
      { title: 'Mobile app repository', href: 'https://github.com/Nestuna/butterfly_project_front/tree/master'},
      { title: 'Server repository', href: 'https://github.com/Nestuna/butterfly-server-app'}
    ],
    projectLink: ''
  },
]
